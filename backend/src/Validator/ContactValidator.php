<?php

namespace App\Validator;

use App\DTO\ContactDTO;

class ContactValidator
{
    public function validate(array $data): array
    {
        $name = trim($data['name'] ?? '');
        $email = trim($data['email'] ?? '');
        $whatsapp = trim($data['whatsapp'] ?? '');
        $message = trim($data['message'] ?? '');
        $honeypot = trim($data['website'] ?? '');

        //valida preenchimento de nome e email
        if (!$name || !$email) {
            return ['error' => 'Nome e Email é obrigatório.'];
        }

        //valida email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return ['error' => 'Email inválido.'];
        }

        //valida whatsapp
        if ($whatsapp && !preg_match('/^[0-9\-\+\(\)\s]{8,20}$/', $whatsapp)) {
            return ['error' => 'Número inválido.'];
        }

        //valida spam
        if (!empty($honeypot)) {
            return ['error' => 'Spam detectado.'];
        }

        return [
            'success' => true,
            'data' => new ContactDTO(
                htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($message, ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($whatsapp, ENT_QUOTES, 'UTF-8')
            )
        ];
    }
}

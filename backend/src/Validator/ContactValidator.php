<?php

namespace App\Validator;

use App\DTO\ContactDTO;


class ContactValidator
{
    public function validate(ContactDTO $dto): array
    {
        $errors = [];

        $name = trim($dto->name);
        $email = trim($dto->email);
        $whatsapp = $dto->whatsapp ? trim($dto->whatsapp) : null;
        $message = trim($dto->message);
        $honeypot = trim($dto->honeypot);


        //valida nome
        if (empty($name)) {
            $errors['name'] = 'Nome é obrigatório.';
        }

        //valida email
        if (empty($email)) {
            $errors['email'] = 'Email é obrigatório';
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Email inválido.';
        }

        //valida mensagem
        if (empty($message)) {
            $errors['message'] = 'Mensagem é obrigatória';
        }
        //valida whatsapp
        if ($whatsapp && !preg_match('/^[0-9\-\+\(\)\s]{8,20}$/', $whatsapp)) {
            $errors['whatsapp'] = 'WhatsApp inválido.';
        }
        //valida spam
        if (!empty($honeypot)) {
            $errors['spam'] = 'Spam detectado;';
        }

        return $errors;
    }
}

<?php

namespace App\Controller;

use App\Services\MailService;
use App\DTO\ContactDTO;
use App\Validator\ContactValidator;

class ContactController
{
    private ContactValidator $validator;
    private MailService $mailService;

    public function __construct(
        ?ContactValidator $validator = null,
        ?MailService $mailService = null
    ) {
        $this->validator   = $validator   ?? new ContactValidator();
        $this->mailService = $mailService ?? new MailService();
    }

    public function handle(array $data): array
    {
        if (!empty($data['honeypot'] ?? '')) {
            return ['success' => true];
        }

        $dto = new ContactDTO(
            name: trim($data['name']    ?? ''),
            email: trim($data['email']   ?? ''),
            message: trim($data['message'] ?? ''),
            whatsapp: isset($data['whatsapp']) ? trim($data['whatsapp']) : null,
            honeypot: '',
        );

        $errors = $this->validator->validate($dto);

        if (!empty($errors)) {
            return ['success' => false, 'errors' => $errors];
        }

        $sent = $this->mailService->sendContact($dto);

        if (!$sent) {
            return ['success' => false, 'message' => 'Erro ao enviar email'];
        }

        return ['success' => true, 'message' => 'Validado.'];
    }
}

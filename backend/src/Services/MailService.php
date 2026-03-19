<?php

namespace App\Services;

use App\DTO\ContactDTO;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailService
{
    public function sendContact(ContactDTO $dto): bool
    {
        $mail = new PHPMailer(true);

        try {

            // SMTP config
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV['SMTP_USER'];
            $mail->Password = $_ENV['SMTP_PASS'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = $_ENV['SMTP_PORT'];

            // remetente (SEMPRE o seu domínio, nunca o do usuário)
            $mail->setFrom($_ENV['SMTP_USER'], 'Portfolio');

            // destino
            $mail->addAddress($_ENV['SMTP_USER']);

            // reply-to (aqui sim entra o usuário)
            $mail->addReplyTo($dto->email, $dto->name);

            // conteúdo
            $mail->isHTML(true);
            $mail->Subject = 'Novo contato do portfólio';

            $whatsapp = $dto->whatsapp ?? 'Não inforado.';

            // sanitização basica
            $name = htmlspecialchars($dto->name);
            $email = htmlspecialchars($dto->email);
            $message = nl2br(htmlspecialchars($dto->message));

            $mail->Body = "
                <h2>Novo contato recebido</h2>

                <p><strong>Nome:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>WhatsApp:</strong> {$whatsapp}</p>

                <p><strong>Mensagem:</strong></p>
                <p>{$message}</p>
            ";

            return $mail->send();
        } catch (Exception $e) {
            return false;
        }
    }
}

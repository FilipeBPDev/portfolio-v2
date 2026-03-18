<?php

namespace Src\Services;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailService
{
    public function sendContactEmail($name, $email, $whatsapp, $message): bool
    {
        $mail = new PHPMailer(true);

        try {

            // SMTP config
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'SEU_EMAIL@DOMINIO.COM';
            $mail->Password = 'SUA_SENHA';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // remetente (SEMPRE o seu domínio, nunca o do usuário)
            $mail->setFrom('SEU_EMAIL@DOMINIO.COM', 'Portfolio');

            // destino
            $mail->addAddress('SEU_EMAIL@DOMINIO.COM');

            // reply-to (aqui sim entra o usuário)
            $mail->addReplyTo($email, $name);

            // conteúdo
            $mail->isHTML(true);
            $mail->Subject = 'Novo contato do portfólio';

            $whatsappText = $whatsapp ?: 'Não informado';

            $mail->Body = "
                <h2>Novo contato recebido</h2>

                <p><strong>Nome:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>WhatsApp:</strong> {$whatsappText}</p>

                <p><strong>Mensagem:</strong></p>
                <p>{$message}</p>
            ";

            return $mail->send();

        } catch (Exception $e) {
            return false;
        }
    }
}
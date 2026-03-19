<?php

namespace Tests\Controller;

use App\Controller\ContactController;
use App\Services\MailService;
use App\Validator\ContactValidator;
use PHPUnit\Framework\TestCase;

class ContactControllerTest extends TestCase
{
    private function makeController(bool $mailSent = true): ContactController
    {
        $mailService = $this->createMock(MailService::class);
        $mailService->method('sendContact')->willReturn($mailSent);

        return new ContactController(
            validator: new ContactValidator(),
            mailService: $mailService
        );
    }

    private function validData(array $overrides = []): array
    {
        return array_merge([
            'name'     => 'João Silva',
            'email'    => 'joao@email.com',
            'message'  => 'Olá!',
            'honeypot' => '',
        ], $overrides);
    }

    public function test_honeypot_preenchido_retorna_sucesso_fake(): void
    {
        $result = $this->makeController()->handle($this->validData(['honeypot' => 'bot']));

        $this->assertTrue($result['success']);
        $this->assertArrayNotHasKey('message', $result); // não chegou a enviar email
    }

    public function test_dados_invalidos_retorna_errors(): void
    {
        $result = $this->makeController()->handle($this->validData(['email' => 'invalido']));

        $this->assertFalse($result['success']);
        $this->assertArrayHasKey('errors', $result);
    }

    public function test_falha_no_envio_retorna_erro(): void
    {
        $result = $this->makeController(mailSent: false)->handle($this->validData());

        $this->assertFalse($result['success']);
        $this->assertSame('Erro ao enviar email', $result['message']);
    }

    public function test_envio_bem_sucedido_retorna_sucesso(): void
    {
        $result = $this->makeController(mailSent: true)->handle($this->validData());

        $this->assertTrue($result['success']);
        $this->assertSame('Validado.', $result['message']);
    }
}

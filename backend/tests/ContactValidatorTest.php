<?php

namespace Tests\Validator;

use App\DTO\ContactDTO;
use App\Validator\ContactValidator;
use PHPUnit\Framework\TestCase;

class ContactValidatorTest extends TestCase
{
    private ContactValidator $validator;

    protected function setUp(): void
    {
        $this->validator = new ContactValidator();
    }

    private function makeDTO(array $overrides = []): ContactDTO
    {
        return new ContactDTO(
            name: $overrides['name']     ?? 'João Silva',
            email: $overrides['email']    ?? 'joao@email.com',
            message: $overrides['message']  ?? 'Olá, quero mais informações.',
            whatsapp: $overrides['whatsapp'] ?? null,
            honeypot: $overrides['honeypot'] ?? '',
        );
    }

    public function test_dto_valido_sem_erros(): void
    {
        $this->assertEmpty($this->validator->validate($this->makeDTO()));
    }

    public function test_nome_vazio_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['name' => '']));
        $this->assertArrayHasKey('name', $errors);
    }

    public function test_email_vazio_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['email' => '']));
        $this->assertArrayHasKey('email', $errors);
    }

    public function test_email_invalido_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['email' => 'nao-é-um-email']));
        $this->assertArrayHasKey('email', $errors);
    }

    public function test_mensagem_vazia_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['message' => '']));
        $this->assertArrayHasKey('message', $errors);
    }

    public function test_whatsapp_invalido_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['whatsapp' => 'abc123']));
        $this->assertArrayHasKey('whatsapp', $errors);
    }

    public function test_whatsapp_valido_nao_retorna_erro(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['whatsapp' => '+55 11 91234-5678']));
        $this->assertArrayNotHasKey('whatsapp', $errors);
    }

    public function test_honeypot_preenchido_retorna_erro_de_spam(): void
    {
        $errors = $this->validator->validate($this->makeDTO(['honeypot' => 'sou um bot']));
        $this->assertArrayHasKey('spam', $errors);
    }
}

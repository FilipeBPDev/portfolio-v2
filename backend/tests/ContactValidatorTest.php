<?php

namespace Tests;

use PHPUnit\Framework\TestCase;
use App\Validator\ContactValidator;

class ContactValidatorTest extends TestCase
{
    public function testShouldPassWithValidData()
    {
        $validator = new ContactValidator();

        $data = [
            'name' => 'Filipe',
            'email' => 'filipe@email.com',
            'message' => 'Mensagem válida'
        ];

        $result = $validator->validate($data);

        $this->assertArrayHasKey('success', $result);
        $this->assertTrue($result['success']);
    }

    public function testShouldFailWithInvalidEmail()
    {
        $validator = new ContactValidator();

        $data = [
            'name' => 'Filipe',
            'email' => 'email-invalido',
            'message' => 'Mensagem válida'
        ];

        $result = $validator->validate($data);

        $this->assertEquals('Email inválido.', $result['error']);
    }

    public function testShouldFailWithSpam()
    {
        $validator = new ContactValidator();

        $data = [
            'name' => 'Filipe',
            'email' => 'filipe@email.com',
            'message' => 'Mensagem válida',
            'website' => 'bot'
        ];

        $result = $validator->validate($data);

        $this->assertEquals('Spam detectado.', $result['error']);
    }
}

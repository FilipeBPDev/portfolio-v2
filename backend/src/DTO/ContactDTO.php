<?php

namespace App\DTO;

class ContactDTO
{
    public function __construct(
        public string $name,
        public string $email,
        public string $message,
        public ?string $whatsapp = null
    ) {}
}

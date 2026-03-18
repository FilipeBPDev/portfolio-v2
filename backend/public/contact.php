<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "error" => "Method not allowed"
    ]);
    exit;
}

$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

//validção de dados
if (!$data) {
    http_response_code(400);

    echo json_encode([
        "error" => "JSON inválido."
    ]);

    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$whatsapp = trim($data['whatsapp'] ?? '');
$honeypot = trim($data['website'] ?? '');

//validação de campos
if (!$name || !$email || !$message) {
    http_response_code(400);

    echo json_encode([
        "error" => "Todos os campos são obrigatórios."
    ]);

    exit;
}

//validação email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);

    echo json_encode([
        "error" => "Email inválido."
    ]);

    exit;
}

//validação tamanho mensagem
if (strlen($message) > 2000) {
    http_response_code(400);

    echo json_encode([
        "error" => "Mensagem muito longa."
    ]);

    exit;
}

//validação whatsapp
if ($whatsapp && !preg_match('/^[0-9\-\+\(\)\s]{8,20}$/', $whatsapp)) {

    http_response_code(400);

    echo json_encode([
        "error" => "Número inválido."
    ]);

    exit;
}

//validação bot
if (!empty($honeypot)) {

    http_response_code(400);

    echo json_encode([
        "error" => "Spam detectado."
    ]);

    exit;
}






$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$whatsapp = htmlspecialchars($whatsapp, ENT_QUOTES, 'UTF-8');
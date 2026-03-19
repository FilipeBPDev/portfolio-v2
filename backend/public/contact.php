<?php
require_once __DIR__  . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

use App\Controller\ContactController;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "error" => "Método não permitido"
    ]);
    exit;
}

$rawData = file_get_contents("php://input");

$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "error" => "Invalid JSON"
    ]);
    exit;
}

$controller = new ContactController();
$response = $controller->handle($data);

echo json_encode($response);

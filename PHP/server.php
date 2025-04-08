<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Start output buffering
ob_start();

// CORS headers for React
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle OPTIONS preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    ob_end_flush();
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Only POST requests allowed"]);
    ob_end_flush();
    exit();
}

// Process form data from React
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON data"]);
    ob_end_flush();
    exit();
}

$name = htmlspecialchars(trim($data["name"] ?? ""));
$email = htmlspecialchars(trim($data["email"] ?? ""));
$phone = htmlspecialchars(trim($data["contact"] ?? ""));
$position = htmlspecialchars(trim($data["address"] ?? ""));
$message = htmlspecialchars(trim($data["message"] ?? ""));
$errors = [];

if (empty($name) || strlen($name) > 100 || !preg_match("/^[a-zA-Z\s]+$/", $name)) {
    $errors[] = "Please provide a valid name (only letters and spaces allowed, max 100 characters).";
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Please provide a valid email address.";
}
if (empty($phone) || !preg_match("/^\d{10}$/", $phone)) {
    $errors[] = "Please provide a valid 10-digit phone number.";
}
if (empty($position) || strlen($position) > 50) {
    $errors[] = "Please provide a valid position (max 50 characters).";
}
if (empty($message)) {
    $errors[] = "Please provide a message.";
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["errors" => $errors]);
    ob_end_flush();
    exit();
}

// Email setup
$to = "dhimandeepak957@gmail.com"; // Consistent email
$from = "dhimandeepak957@gmail.com";
$fromName = "Deepak Dhiman";
$subject = "Resume Submission from $name";
$body = "
    <table width='100%' align='center' cellspacing='5' cellpadding='5' style='border:2px solid #000;'>
        <tr><td colspan='2' align='center' style='font-size:20px;border:1px solid #000;'>Resume</td></tr>
        <tr bgcolor='#f2f2f2'><td>Name:</td><td>$name</td></tr>
        <tr bgcolor='#f2f2f2'><td>Email:</td><td>$email</td></tr>
        <tr bgcolor='#f2f2f2'><td>Phone:</td><td>$phone</td></tr>
        <tr bgcolor='#f2f2f2'><td>Position:</td><td>$position</td></tr>
        <tr bgcolor='#f2f2f2'><td>Message:</td><td>$message</td></tr>
    </table>
";

// Send email with PHPMailer
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'dhimandeepak957@gmail.com';
    $mail->Password = 'baub jfff ugcm sdnf'; // Replace with new App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($from, $fromName);
    $mail->addAddress($to);
    $mail->addReplyTo($email, "Reply to: $name");

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\nPosition: $position\nMessage: $message";

    $mail->send();
    http_response_code(200);
    echo json_encode(["message" => "Form successfully submitted!"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Email could not be sent: " . $mail->ErrorInfo]);
}

ob_end_flush();
?>
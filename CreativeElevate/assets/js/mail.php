<?php
header('Content-Type: application/json');

function sendJsonResponse($status, $message) {
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"] ?? '');
    $message = trim($_POST["message"] ?? '');
    $budget = trim($_POST["budget"] ?? '');

    if (empty($name) || empty($subject) || empty($message) || empty($budget) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        sendJsonResponse(400, "Please complete the form and try again.");
    }

    $recipient = "prem.kachhawa@softude.com"; // Replace with your email
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Budget: $budget\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, "New contact from $name", $email_content, $email_headers)) {
        sendJsonResponse(200, "Thank You! Your message has been sent.");
    } else {
        sendJsonResponse(500, "Oops! Something went wrong and we couldn't send your message.");
    }
} else {
    sendJsonResponse(403, "There was a problem with your submission, please try again.");
}
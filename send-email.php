<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "lrandewich@hotmail.co.uk"; 
    $subject = "New Contact Form Submission";
    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Message: " . $message;

    if (mail($to, $subject, $body)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>

<?php
// We'll be outputting a PDF
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<html>
<head>
    <title>Hello, Php!</title>
</head>
<body>
    <h1>Sam was here - Hello, Php!</h1>
    <p>This page was generated with the Php programming langauge</p>

    <?php
        echo "Current Time: " . date("l m/d H:i:sa Y");
        echo "Your IP Adress: " . getenv("REMOTE_ADDR");
    ?>
</body>
</html>
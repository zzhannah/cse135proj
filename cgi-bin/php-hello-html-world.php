<?php
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
        echo "<p>Current Time: " . date("l m/d H:i:sa Y") . "<p>";
        echo "<p>Your IP Adress: " . getenv("REMOTE_ADDR") . "<p>";
    ?>
</body>
</html>
<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<html>
<head>
<script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>window.LogRocket && window.LogRocket.init('vif6az/cse135proj');</script>
    <title>Hello, Php!</title>
</head>
<body>
    <h1>Sam was here - Hello, Php!</h1>
    <p>This page was generated with the Php programming langauge</p>

    <?php
        echo "<p>Current Time: " . date("l m/d H:i:sa Y") . "</p>";
        echo "<p>Your IP Adress: " . getenv("REMOTE_ADDR") . "</p>";
    ?>
    <a href="/" style="display:inline-block;margin-top:20px;">Home</a>
</body>
</html>
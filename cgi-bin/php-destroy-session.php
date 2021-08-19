<?php
session_start();
?>

<html>
    <head>
        <script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>window.LogRocket && window.LogRocket.init('vif6az/cse135proj');</script>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align="center">Session Destroyed</h1>
        <?php
            unset($_SESSION["name"]);
        ?>
        <hr/>
        <a href="/php-cgiform.html">CGI Form</a><br />
        <a href="/cgi-bin/php-sessions-1.php">Session Page 1</a><br />
        <a href="/cgi-bin/php-sessions-2.php">Session Page 2</a>
    </body>
</html>

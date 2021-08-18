<?php
session_start();
?>

<html>
    <head>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align="center">Session Destroyed</h1>
        <?php
            unset($_SESSION);
        ?>
        <hr/>
        <a href="/php-cgiform.html">CGI Form</a><br />
        <a href="/cgi-bin/php-sessions-1.php">Session Page 1</a>
        <a href="/cgi-bin/php-sessions-2.php">Session Page 2</a>
    </body>
</html>

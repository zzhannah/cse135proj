<?php
session_start();
?>

<html>
    <head>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align=center>PHP Sessions Page 2</h1>
        <hr/>
        <?php
            if($_SESSION["name"]){
                echo "<p><b>Name: </b>". $_SESSION["name"] . "</p>";
            }else {
                echo "<p><b>Name: </b>You do not have a name set";
            }
        ?>
        <a href="/php-cgiform.html">CGI Form</a><br />
        <a href="/cgi-bin/php-sessions-1.php">Session Page 1</a>
        <form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
            <button type="submit">Destroy Session</button>
        </form>
    </body>
</html>

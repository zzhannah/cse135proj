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
        <h1 align=center>PHP Sessions Page 1</h1>
        <hr/>
        <?php
            if($_POST["name"]) {
                $_SESSION["name"] = $_POST["name"];
            }

            if($_SESSION["name"]){
                echo "<p><b>Name: </b>". $_SESSION["name"] . "</p>";
            }else {
                echo "<p><b>Name: </b>You do not have a name set</p>";
            }
        ?>
        <a href="/php-cgiform.html">CGI Form</a><br />
        <a href="/cgi-bin/php-sessions-2.php">Session Page 2</a><br />
        <form style="margin-top:30px" action="/cgi-bin/php-destroy-session.php" method="get">
            <button type="submit">Destroy Session</button>
        </form>
    </body>
</html>


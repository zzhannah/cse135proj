<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>

<html>
    <head>
        <script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>window.LogRocket && window.LogRocket.init('vif6az/cse135proj');</script>
        <title>POST Request Echo</title>
    </head>
    <body>
        <h1 align="center">POST Request Echo</h1>
        <hr/>
        <?php
            echo "<p><b>Request Method: </b>" . $_SERVER['REQUEST_METHOD'] . "</p>";
            echo "<p><b>Protocol: </b>" . $_SERVER['SERVER_PROTOCOL'] . "</p>";
        ?>
        <p><b>Query String:</b> </p>
        <ul>
        <?php
            foreach($_GET as $key_name => $key_value){
                echo "<li>$key_name = $key_value</li>";
            }
        ?>
        </ul>
        <p><b>Message Body:</b></p>
        <ul>
        <?php
            foreach($_POST as $key_name => $key_value){
                echo "<li>$key_name = $key_value</li>";
            }
        ?>
        </ul>
        <a href="/" style="display:inline-block;margin-top:20px;">Home</a>
    </body>
</html>

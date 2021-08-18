<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>

<html>
    <head>
        <title>POST Request Echo</title>
    </head>
    <body>
        <h1 align="center">POST Request Echo</h1>
        <hr/>
        <?php
            echo "<p><b>Request Method: " . $_SERVER['REQUEST_METHOD'] . "</b></p>";
            echo "<p><b>Protocol: " . $_SERVER['SERVER_PROTOCOL'] . "</b></p>";
        ?>
        <p><b>Request Method: </b></p>
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
    </body>
</html>

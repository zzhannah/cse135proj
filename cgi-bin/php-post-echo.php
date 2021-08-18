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
        <ul>
            <?php
            foreach($_POST as $key_name => $key_value){
                echo "<li>$key_name = $key_value</li>";
            }
            ?>
        </ul>
    </body>
</html>

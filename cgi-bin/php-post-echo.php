<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>

<html>
    <head>
        <title>General Request Echo</title>
    </head>
    <body>
        <h1 align="center">General Request Echo</h1>
        <hr/>
        <p><b>Message Body:</b> </p>
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

<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<html>
    <head>
        <title>GET Request Echo</title>
    </head>
    <body>
        <h1 align="center">GET Request Echo</h1>
        <hr/>
        <p><b>Query String:</b> </p>
        <ul>
            <?php
            foreach($_GET as $key_name => $key_value){
                echo "<li>$key_name = $key_value</li>";
            }
            ?>
        </ul>
    </body>
</html>

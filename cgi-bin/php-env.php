<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Environment Variables</title>
    </head>
    <body>
        <h1 align="center">Environment Variables</h1>
        <hr>
        <?php
            while (list($var,$value) = each ($_ENV)) {
            echo "$var => $value <br />";
            }
        ?>
    </body>    
</html>

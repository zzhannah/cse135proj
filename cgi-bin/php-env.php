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
            echo "Environment Variables:"
            $env_array = getenv();
            foreach ($env_array as $key=>$value){
                echo "$key => $value <br />";
            }
            echo "Server Variables:"
            foreach ($_SERVER as $parm => $value)  {
                echo "$parm => $value<br />";
            }
        ?>
    </body>    
</html>

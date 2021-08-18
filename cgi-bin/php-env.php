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
            print "<h4>Environment Variables:</h4>"
            $env_array = getenv();
            foreach ($env_array as $key=>$value){
                echo "$key => $value <br />";
            }
            print "<h4>Server Variables:</h4>"
            foreach($_SERVER as $key_name => $key_value) {

                print $key_name . "=" . $key_value . "<br />";
                
                }
        ?>
    </body>    
</html>

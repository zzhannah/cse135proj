<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<!DOCTYPE html>
<html>
    <head>
    <script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>window.LogRocket && window.LogRocket.init('vif6az/cse135proj');</script>
        <title>Environment Variables</title>
    </head>
    <body>
        <h1 align="center">Environment Variables</h1>
        <hr>
        <?php
            echo "<h4>Environment Variables:</h4>";
            $env_array = getenv();
            foreach ($env_array as $key=>$value){
                echo $key . " = " . $value . "<br />";
            }
            echo "<h4>Server Variables:</h4>";
            foreach($_SERVER as $key_name => $key_value) {
                echo $key_name . " = " . $key_value . "<br />";
            }
        ?>
        <a href="/" style="display:inline-block;margin-top:20px;">Home</a>
    </body>    
</html>

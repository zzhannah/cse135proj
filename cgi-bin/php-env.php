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
            
$env_array =getenv();

echo "<h3>The list of environment variables with values are :</h3>";

//Print all environment variable names with values

foreach ($env_array as $key=>$value)

{

    echo "$key => $value <br />";

}

        ?>
    </body>    
</html>

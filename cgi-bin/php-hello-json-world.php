<?php
header('Content-Type: text/html');
header('Cache-Control: no-cache');
?>
<html>
    <head>
    <script src="https://cdn.lr-in.com/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>window.LogRocket && window.LogRocket.init('vif6az/cse135proj');</script>
    </head>
<?php
$time = date("l m-d H:i:sa Y");
$addr = getenv("REMOTE_ADDR");
$arr = array('title' => 'Hello, Php!', 'message' => 'This page was generated with the Php programming language', 'heading' => 'Hello, Php!', 'time' => $time, 'IP' => $addr);

echo json_encode($arr);
?>
<a href="/" style="display:inline-block;margin-top:20px;">Home</a>
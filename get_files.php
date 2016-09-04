<?php 
$files = glob("../code365/*.html");
//echo "xxxxxx";
//print_r($files);
echo json_encode($files, true)
//echo $files;
?>
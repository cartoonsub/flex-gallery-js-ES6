<!doctype html>
<html>
<head>
	
<meta charset="utf-8">
<title>flex gallery js</title>
<link rel="shortcut icon" href="/image/favicon.png" type="image/x-icon">	

<?php
$js = 'js/resizergallery.min.js';	
$css = 'css/style.min.css';	
if (file_exists($css)) {
    echo '<link rel="stylesheet"   type="text/css" href="/css/style.min.css">';
} else {
    echo '<link rel="stylesheet"   type="text/css" href="/css/style.css">';
}
if (file_exists($js)) {
    echo '<script src="js/resizergallery.min.js?ver=4"></script>';
} else {
    echo '<script src="js/resizergallery.js?ver=4"></script>';
}
		
$nameHeadPage = pathinfo($_SERVER['SCRIPT_FILENAME']);
 $nameHeadPage['filename'];

 switch ($nameHeadPage['filename']) {
case 'gallery':
echo '';
break;
default: 
echo '';
break;
}	
	
?>

</head>
	
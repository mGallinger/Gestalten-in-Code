-function setup() {
 -createCanvas(700,700);
 -background(0);
 -}
 +<!doctype html>
  
 -function draw() {
 -fill(200);
 -  quad(windowWidth/2, 0, windowWidth, windowHeight/2, windowWidth/2, windowHeight, 0, windowHeight/2);
 - fill(0);
 - ellipse(windowWidth/2,windowHeight/2,windowWidth/4,windowWidth/4);
 - noStroke();
 - fill(120);
 -}
 +<html lang="en">
 +<head>
 +<meta charset="utf-8">
 +<meta http-equiv="x-ua-compatible" content="ie=edge">
 +<meta name="viewport" content="width=device-width, initial-scale=1">
 +<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
 +<title>Page Title</title>
 +  <meta name="description" content="something">
 +  <meta name="author" content="me">
  
 +  <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
  
 -function mousePressed(){
 -  save('image.jpg');
 -}
 +  <!--[if lt IE 9]>
 +  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 +  <![endif]-->
 +</head>
 +<body>
 +  <script type="text/javascript" src="assets/js/scripts.js"></script>
 +</body>
 +</html>

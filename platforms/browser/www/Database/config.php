<?php 
	header("Access-Control-Allow-Origin: *");
	
	// Login Database details FOR LAB MACHINE
	/*$dbHost= 'localhost';
	$dbName='wheresthegamedb';
	$dbUser='root';
	$dbPwd='mysqlpassword';*/
	
	$dbHost= 'localhost';	//FOR VIRUAL HOST
	$dbName='xxxxx';
	$dbUser='xxxxx';
	$dbPwd='xxxxx';
	
	// Setup Database Connection
	$con = mysqli_connect($dbHost,$dbUser,$dbPwd);
	if (!$con){
		die('Could not connect: ' . mysqli_error($con));
	}
	
	// Set the active mySQL database
	$dbs = mysqli_select_db($con, $dbName);
	if (!$dbs) {
		die ("Can\'t use db : " . mysqli_error($dbs));
	}
?>
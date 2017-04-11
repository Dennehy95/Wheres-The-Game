<?php
	header("Access-Control-Allow-Origin: *");

	//--------------------------------------------------------------------------
	// 1) Connect to mysql database
	//--------------------------------------------------------------------------
	include 'config.php';

	//--------------------------------------------------------------------------
	// 2) Query database for data
	//--------------------------------------------------------------------------
    
    $types = $_GET["type"];
    $result = mysqli_query($con, "SELECT * FROM ".mysqli_real_escape_string($con, $types).";"); 
	
	while ($row=mysqli_fetch_object($result)){
		$data[]=$row;
	}
	
	if (mysqli_num_rows($result)==0){
		$result = array (
			'success' => false
		);
	}
	else{
		$result = array (
			'success' => true,
			'data' => $data
		);
	}

	//--------------------------------------------------------------------------
	// 3) echo result as json 
	//--------------------------------------------------------------------------
	echo json_encode($result);

?>
<?php
	header("Access-Control-Allow-Origin: *");
	include 'config.php';
    
    $result = mysqli_query($con, "show tables");
    while ($row=mysqli_fetch_object($result)){
		$data[]=$row;
	}
    echo json_encode($data);
?>
<?php 
session_start(); 
      
/* script to connect fo Mandir Database and pick up neccesary Information to display on screen */
      /* declare some relevant variables */
      $hostname = "localhost";
      $username = "COL_OFF_KANDRA";
      $passwordsc = "s3BxJSrr9nvUyFAR";
      $dbName = "COL_OFF_KANDRA";

      $con = mysql_connect($hostname,$username,$passwordsc);
		if (!$con)
		  {
		  die('Could not connect: ' . mysql_error());
		  }
	mysql_select_db($dbName, $con);

?>
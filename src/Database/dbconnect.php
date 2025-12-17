<?php
    $database_name = "Tech_DB";
    $Server_name = "localhost";
    $password = "";
    $Username = "root";

    $connection = new mysqli($Server_name,$Username,$password,$database_name);

    if($connection -> connect_errno){
        die("Connection failed:" . $connection->connect_error);
    }else{
        //echo "Connected successfully";
    }
?>
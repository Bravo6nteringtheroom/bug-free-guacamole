<?php
    $name = $_POST["name"];
    $Email = $_POST["email"];
    $Content_Message = $_POST["Message"] ?? '';

    if(empty($name) && empty($Email) && empty($Content_Message)){
        echo "The field is empty";
    }else{
        echo "Message sent succussfully";
    }
?>

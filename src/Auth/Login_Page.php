<?php
    include "../Database/dbconnect.php";
    include "Session_Start.php";

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $Inserted_Email = $_POST["Email"];
        $Inserted_Password = $_POST["Password"];
        $target_url = "http://192.168.1.111/src/";
        //NOw Comapre this Password with the password stored:
        $sql_Code = "select Password from User_account where Email = '$Inserted_Email'";
        $value = $connection->query($sql_Code);
        if($value->num_rows > 0){
            while($row = $value->fetch_assoc()){
                if(password_verify($Inserted_Password , $row["Password"])){
                    echo "The Passwords are equal";
                    Start_Session_Now();
                    $_SESSION["Email"] = $Inserted_Email;
                    $_SESSION["Password"] = $Inserted_Password;
                    header("Location: " . $target_url);
                }else{
                    echo "THe Password is not equal";
                }
            }
        }else{
            echo "Your password is wrong";
        }
    }
?>

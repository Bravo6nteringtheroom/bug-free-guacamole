<?php
    include "../Database/dbconnect.php";
    include "../Auth/Session_Start.php";

    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $Name = $_POST["Name"];
        $Email = $_POST["Email"];
        $Country = $_POST["Country"];
        $Phone_number = $_POST["Phone_number"];
        $Password = $_POST["Password"];
        
        $Hashed_Password = password_hash($Password,PASSWORD_DEFAULT);
        $target_url = "http://192.168.1.111/src/";
        //Check if the user's sign in password already exists or nah
        $sql_Check_Account = "Select Password from user_account where Email = '$Email' ";
        $result = $connection->query($sql_Check_Account);

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                if(password_verify($Password,$row["Password"])){
                    echo "Bro you already have an account";
                    Start_Session_Now();
                    $_SESSION["Email"] = $Email;
                    $_SESSION["Password"] = $Hashed_Password;
                    header("Location: " . $target_url);
                }else{
                    //Encrypting the Name and the Country and the Phone_number
                        $ciphering = "AES-128-CTR";
                        $iv_length = openssl_cipher_iv_length($ciphering);
                        $option = 0;
                        
                        $key = base64_decode(getenv("ENCRYPTION_KEY"));
                        $decryption_key = base64_decode(getenv("ENCRYPTION_KEY"));

                        $iv_name = random_bytes(16);
                        $iv_country = random_bytes(16);
                        $iv_phone = random_bytes(16);
                        
                        $encryption_name = openssl_encrypt($Name,$ciphering,$key,$option,$iv_name);
                        $encryption_country = openssl_encrypt($Country,$ciphering,$key,$option,$iv_country);
                        $encryption_phone = openssl_encrypt($Phone_number,$ciphering,$key,$option,$iv_phone);
                        
                        $stored_name = base64_encode($iv_name . $encryption_name);
                        $stored_country = base64_encode($iv_country . $encryption_country);
                        $stored_phone = base64_encode($iv_phone . $encryption_phone);
                        
                        //Insert the following data to the database
                        $sql_Code = "insert into user_account(Name , Email , Password , Country , Phone) values ('$stored_name','$Email','$Hashed_Password','$stored_country','$stored_phone')";
                        if($connection->query($sql_Code) === true){
                            echo Get_Session_Status();
                            if(Get_Session_Status() != 2){
                                Start_Session_Now();
                            }else{
                                echo "Session has already started";
                            }
                        }else{
                            echo "Error:" . $sql_Code ." <br>" . $connection->error;
                        }
                    }
                }
            }
        }
?>

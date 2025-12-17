<?php
function Start_Session_Now(){
    if(session_status() != 2){
            session_start();
        }
    }

    function Stop_Session_Now() {
        session_unset();
        session_destroy();
    }

    function Get_Session_Status(){
        return session_status();
    }
?>
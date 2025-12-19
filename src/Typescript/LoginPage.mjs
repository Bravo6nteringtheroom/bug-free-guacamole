import {createCookie , destroyCookie , getCookie} from './Cookies.js'
"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var Email = document.getElementById("Email_input");
var Passowrd = document.getElementById("Password_input");
var Login_Btn = document.getElementById("Login_Btn");
var Email_Error = document.getElementById("Email_input_Error");
var Password_Error = document.getElementById("Password_input_Error");
var Login_Form = document.getElementById("Login_Form");
Login_Btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (Check_Login_input()) {
        Login_Form.submit();
        let Cookies = createCookie("Email_Cookie" , Email.value)
    }
    else {
        console.log("Error occured");
    }
});
function Check_Login_input() {
    var AllGood = true;
    var regex = /\d/;
    if (!("@gmail.com" in Email) && Email.value === "") {
        AllGood = false;
        Email_Error.textContent = "Invalid Email\nEmail should contain @\nEmail should contain gmail.com";
    }
    if (Passowrd.value.length < 8 && Passowrd.value === "" && !(regex.test(Passowrd.value))) {
        AllGood = false;
        Password_Error.textContent = "Invalid Password\nPassword length should be atleast 8 letters\nPassword should contain digits\nFirst letter should be Capital";
    }
    return AllGood;
}

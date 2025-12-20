import { createCookie } from "./Cookies";

var Name_input = document.getElementById("Name_input");
var Password_input = document.getElementById("Password_input");
var Email_input = document.getElementById("Email_input");
var Country_input = document.getElementById("Country_input");
var Phone_input = document.getElementById("Phone_input");
var Submit_btn = document.getElementById("Submit_Btn");
var Submit_Form = document.getElementById("Submit_Form");
//Error Message
var Name_Error = document.getElementById("Name_Error");
var Password_Error = document.getElementById("Password_Error");
var Email_Error = document.getElementById("Email_Error");
var Country_Error = document.getElementById("Country_Error");
var Phone_Error = document.getElementById("Phone_Error");
var country_codes = [
    "af", "ax", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am",
    "aw", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj",
    "bm", "bt", "bo", "bq", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf",
    "bi", "cv", "kh", "cm", "ca", "ky", "cf", "td", "cl", "cn", "cx", "cc",
    "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cw", "cy", "cz",
    "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et",
    "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "ga", "gm", "ge", "de",
    "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gg", "gn", "gw", "gy",
    "ht", "hm", "va", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie",
    "im", "il", "it", "jm", "jp", "je", "jo", "kz", "ke", "ki", "kp", "kr",
    "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo",
    "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx",
    "fm", "md", "mc", "mn", "me", "ms", "ma", "mz", "mm", "na", "nr", "np",
    "nl", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mk", "mp", "no", "om",
    "pk", "pw", "ps", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr",
    "qa", "re", "ro", "ru", "rw", "bl", "sh", "kn", "lc", "mf", "pm", "vc",
    "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sx", "sk", "si",
    "sb", "so", "za", "gs", "ss", "es", "lk", "sd", "sr", "sj", "se", "ch",
    "sy", "tw", "tj", "tz", "th", "tl", "tg", "tk", "to", "tt", "tn", "tr",
    "tm", "tc", "tv", "ug", "ua", "ae", "gb", "us", "um", "uy", "uz", "vu",
    "ve", "vn", "vg", "vi", "wf", "eh", "ye", "zm", "zw"
];
function isCountry(input) {
    return country_codes.includes(input.toLowerCase());
}
function check_input() {
    var regex = /\d/;
    var AllGood = true;
    //Check Username
    if (Name_input.value === "") {
        AllGood = false;
        Name_Error.textContent = "Please Enter a name Here";
    }
    //Check Email
    if (!("@gmail.com" in Email_input) && Email_input.value === "") {
        AllGood = false;
        Email_Error.textContent = "Email is Invalid";
    }
    //Check Password
    if (Password_input.value.length > 8 && Password_input.value === "" && (regex.test(Password_input.value))) {
        AllGood = false;
        Password_Error.textContent = "Passowrd Should be more than 8 charecters /nPassword Should Contain Digits";
    }
    //Check Country
    if (!isCountry(Country_input.value)) {
        AllGood = false;
        Country_Error.textContent = "This Country Doesn't Exist";
    }
    //Check Phone
    if (Phone_input.value.length > 15 || Phone_input.value === "") {
        AllGood = false;
        Phone_Error.textContent = "Wrong Phone Number";
    }
    if (!AllGood)
        return false;
    console.log("All Good we are ready to go");
    return true;
}
Submit_btn.addEventListener('click', function (event) {
    event.preventDefault();
    if (check_input()) {
        Submit_Form.submit();
    }
    Submit_Form.submit();
    createCookie("Username",Name_input.value)
});

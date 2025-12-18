import Cookie = require('./Cookies.mjs')

let Email : HTMLInputElement = document.getElementById("Email_input") as HTMLInputElement
let Passowrd : HTMLInputElement = document.getElementById("Password_input") as HTMLInputElement
let Login_Btn : HTMLInputElement = document.getElementById("Login_Btn") as HTMLInputElement

let Email_Error : HTMLElement = document.getElementById("Email_input_Error") as HTMLElement
let Password_Error : HTMLElement = document.getElementById("Password_input_Error") as HTMLElement
let Login_Form : HTMLFormElement = document.getElementById("Login_Form") as HTMLFormElement

Login_Btn.addEventListener('click' , (event) => {
    event.preventDefault()
    if(Check_Login_input()){
        Login_Form.submit()
    }else{
        console.log("Error occured")
    }
    
})

function Check_Login_input() : boolean {
    let AllGood = true;
    let regex = /\d/;

    if( !("@gmail.com" in Email) && Email.value === ""){
        AllGood = false
        Email_Error.textContent = "Invalid Email\nEmail should contain @\nEmail should contain gmail.com"
    }

    if(Passowrd.value.length < 8 && Passowrd.value === "" && !(regex.test(Passowrd.value))){
        AllGood = false
        Password_Error.textContent = "Invalid Password\nPassword length should be atleast 8 letters\nPassword should contain digits\nFirst letter should be Capital"
    }
    return AllGood
}
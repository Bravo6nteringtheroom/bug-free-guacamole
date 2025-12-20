let Sign_out_btn = document.getElementById("Sign_out_btn")

function destroyCookie(name) {
    document.cookie = "".concat(`${name}=;max-age=10;path=/`);
}

Sign_out_btn.addEventListener('click',() => {
    destroyCookie("Email_Cookie")
    console.log("Good bye user")
    console.log("Cookie has been destroyed")
})

console.log(document.cookie)
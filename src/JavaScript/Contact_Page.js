"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Contact_Name = document.getElementById("Name");
let Contact_Email = document.getElementById("Email");
let Message_Content = document.getElementById("Message_Content");
let Send_btn = document.getElementById("Send_btn");
Send_btn?.addEventListener('click', () => check());
function check() {
    let Validation = true;
    const nameVal = Contact_Name.value.trim();
    const emailVal = Contact_Email.value.trim();
    if (nameVal === "") {
        Validation = false;
    }
    if (emailVal === "" || emailVal.indexOf("@") === -1) {
        Validation = false;
    }
    if (Message_Content.value === "") {
        Validation = false;
    }
    if (Validation) {
        console.log("all good we are ready to go");
    }
}
//# sourceMappingURL=Contact_Page.js.map
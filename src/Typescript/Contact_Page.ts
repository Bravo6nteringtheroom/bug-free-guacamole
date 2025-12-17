let Contact_Name = document.getElementById("Name")! as HTMLInputElement
let Contact_Email = document.getElementById("Email")! as HTMLInputElement
let Message_Content = document.getElementById("Message_Content") as HTMLInputElement
let Send_btn = document.getElementById("Send_btn")! as HTMLButtonElement

Send_btn?.addEventListener('click' , () => check())

function check() : void {
    let Validation : boolean = true
    const nameVal = Contact_Name.value.trim();
    const emailVal: string = Contact_Email.value.trim();
    if(nameVal === ""){
        Validation = false;
    }
    if(emailVal === "" || emailVal.indexOf("@") === -1){
        Validation = false;
    }
    if(Message_Content.value === ""){
        Validation = false;
    }
    if(Validation){
        console.log("all good we are ready to go")
    }
}

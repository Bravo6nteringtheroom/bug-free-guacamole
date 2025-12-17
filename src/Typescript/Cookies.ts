//User name ; expires ; path
function createCookie(name:string,value:string) : void{
    let day : number = (86440);
    document.cookie = name + '=' + value + ";" +"max-age = " + day + ";path=/";
}
function DestroyCookie(name:string,value:string){
    document.cookie = `${name}=;max-age=0;path=/`;
}

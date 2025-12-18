//User name ; expires ; path
export function createCookie(name:string,value:string) : void{
    let day : number = (86440);
    document.cookie = name + '=' + value + ";" +"max-age = " + day + ";path=/";
}
export function destroyCookie(name:string,value:string){
    document.cookie = `${name}=;max-age=0;path=/`;
}

export function getCookie(cname : string) : string {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c : string = ca[i] ?? "";
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
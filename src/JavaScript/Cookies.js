//User name ; expires ; path
function createCookie(name, value) {
    var day = (86440);
    document.cookie = name + '=' + value + ";" + "max-age = " + day + ";path=/";
}
function DestroyCookie(name, value) {
    document.cookie = "".concat(name, "=;max-age=0;path=/");
}

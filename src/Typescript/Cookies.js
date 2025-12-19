"use strict";
//User name ; expires ; path
export function createCookie(name, value) {
    var day = (86440);
    document.cookie = name + '=' + value + ";" + "max-age = " + day + ";path=/";
}
export function destroyCookie(name) {
    document.cookie = "".concat(name, "=;max-age=0;path=/");
}
export function getCookie(cname) {
    var _a;
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = (_a = ca[i]) !== null && _a !== void 0 ? _a : "";
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

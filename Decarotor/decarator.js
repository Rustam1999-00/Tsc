"use strict";
// Decarator -- bu Metadastur yaratishga yordam beradi u orqali Class ni uning parametrlarini gettes setterlari Methodlarini o'zgartirishga va (uni qayta ishlashga )yordan beradi
class User {
    constructor() {
        this.user = 1000;
    }
    getuser() {
        return this.user;
    }
}
function serverUser(obj) {
    obj.user = 7;
    return obj;
}
function loggerUser(obj) {
    console.log("User count", obj.user);
    return obj;
}
console.log(new User().getuser());
console.log(serverUser(new User()).getuser());
console.log(serverUser(loggerUser(new User())).getuser());

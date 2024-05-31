"use strict";
//============================== 11-dars | namespace, module (nomlar fazosi) ==================================
// nameSpace Bu nom berilgan guruxlar xisoblanadi u orqali codeni tartiblsh mumkun 
//undagi class functionlarni tashqarida ishlatish uchun export orqali ishlatishimiz mumkun 
// uni birxil nom bn 2ta namcpaseni yaratish  mumkun 
// ichma ich  namecpase yaratish ham mumkun 
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text} `, `color:${color},fontSize:${fontSize}`);
        }
        else {
            console.log(`%c${text} `, `color:${color}`);
        }
    }
    Utils.log = log;
})(Utils || (Utils = {}));
Utils.log("Salom", "red", "24px");
(function (Utils) {
    class Animals {
        constructor(name) {
            this.name = name;
        }
    }
    Utils.Animals = Animals;
})(Utils || (Utils = {}));
// 2 ta birxil nom bn hamm yaratsa bo'ladi
(function (Utils) {
    class Tiger extends Utils.Animals {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }
        say() {
            Utils.log(`${this.say}`, "red", "22px");
        }
    }
    Utils.Tiger = Tiger;
})(Utils || (Utils = {}));
const tiger = new Utils.Tiger("sher", "RRRR");
console.log(tiger);

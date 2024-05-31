"use strict";
//===================== Claslar  6-darst  ================================================================
//Class bu birxil qiymatlarga ega bo'lgan  Objectlar yaratishga  kerakt bo'ladi
//Bir Classda bitta Canistruktur bo'ladi bir nechta netodlar bo'lishi mumkun
class myClas {
    constructor(name, age) {
        this._name = "Rustam";
        this._name = name,
            this._age = age;
    }
    //method birnechta bo'lishi mumkun
    info(value) {
        return `${this._name}-${this._age + value}`;
    }
    static description() {
        return `${this.name}`;
    }
    //get bu Class propertilarini to'g'ridan to'g'ri chiqarib beradi
    get name() {
        return this.name;
    }
    //Set BU Class qiymatlarini tashqaridan to'g'ridan to'g'ri o'zgartirib beradi
    set name(value) {
        this._name = value;
    }
}
//Statik Bu faqat Ota Classga tegishli bo'ladi 
//Undan meros olib bo'lmaydi
myClas.isFling = false;
const Diyor = new myClas("To'lqin", 15);
const ibrohim = new myClas("Rustam", 25);
// console.log(Diyor);
// console.log(ibrohim.info(10));
ibrohim.name = "ibrohim";
// console.log(ibrohim._name);
//======= Ininstensoft bu qaysi Clasdan ininstent olganligini aniqlaydi
if (ibrohim instanceof myClas) {
    // console.log("Tegishli");
}
else {
    // console.log("Tegishli emas");
}
//============================================= Inhertince Voristlik olishson Extent =========================================
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `Hello ${this._name}`;
    }
}
const Ibrohim = new Person("Ibrohim", 12);
// console.log(Ibrohim.seyHello());
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = group;
        this._course = course;
    }
    //Birxil nomdagi metodni boshqa extend olgan clasda ham ishlatsa bo'ladi
    //Birxil methodlarni chaqirganda o'ziga tegishli bolgan methodlaring sharti bajariladi
    seyHello() {
        return `Hello Mening ismim ${this._name}-${this._course}-kursdada ${this._group}- guruhda o'qiyman`;
    }
}
const Akbar = new Student("Akbar", 15, 26, 3);
// console.log(Akbar.seyHello());
class Teacher extends Person {
    constructor(name, age, fanlar) {
        super(name, age);
        this._fanlar = fanlar;
    }
}
const Umidjon = new Teacher("Umidjon", 24, ["React", "JS"]);
//implements orqali clasga type va interfaceni ko'rsatib qo'yiladi
class Person1 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return this._name;
    }
    info() {
        return `${this._name}-${this._age}`;
    }
}
const Ibrohim1 = new Person1("Ibrohim", 12);
// console.log(Ibrohim);
// ========================================= 10-dars | Abstrakt Class ========================
//Abstrct Claslardan Yangi Objekt yaratib Bo'lmaydi
//Undan faqat Exstend olish uchun ishlatiladi
//Abstract Clasda abstract method yaratilgan bo'lsa  extend olingan Clasda O'sh method ishlatilish kerakt 
class Abstract {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
class Abstract1 extends Abstract {
    constructor(name, age, group, corse) {
        super(name, age);
        this._group = group;
        this._corse = corse;
    }
    info() {
        return this._group;
    }
}
const Ibrohim2 = new Abstract1("Ibrohim", 12, 26, 3);
// console.log(Ibrohim2.info());
//============================== 10-dars | Access modifiers (public private protected readonly )==============================================
//public ochiq codlar
//private Bu yashirin code hisoblanadi uni boshqa joyda ishlatib bo'lmaydi
//protected Bundan extend olsa bo'ladi leki Objektda ishlatib bo'lmaydi chaqirib bo'lmaydi
// Redonlu bu faqat o'qish uchun Objektda uni qayta nomlab o'zgartirtib bo'lmaydi faqan ko'rish uchun 
class PersonP {
    constructor(id, name, age) {
        this._id = id;
        this._name = name;
        this._age = age;
    }
    seyHello() {
        return `Hello ${this._name}`;
    }
}
const IbrohimP = new PersonP(1, "Ibrohim", 12);
// IbrohimP._id=2 bo'lmaydi u redonly faqt o'qish uchun 
// IbrohimP.age  U ko'rinmaydi protected undan extend olsa bo'ladi faqat
// console.log(Ibrohim.seyHello());

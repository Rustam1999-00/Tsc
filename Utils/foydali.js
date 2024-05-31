"use strict";
//===================== 16-dars | Utils (Partial, Required, NonNullable, Record) | ===========================================
// Partial =  Bu o'pshinl qilib beradi  string | undefined == malumot kelmasa | undefined 
// Required = Bu bo'ishi shart 
// NonNullable = Bu faqat rost bolgan qiymatlarni qaytarib beradi == null| undefined olmaydi  String |number ni oladi
//Record = Bu propertilari bir xil typega ega bo'gan  Object yaratib beradi
// type MyExclude2 = boolean
//============================= 19-dars | Utils #4 Parameters, ConstructorParameters, ReturnType, InstanceType |===================================
//Parameters = bu function qanday parametr qabulqilishini xo'rsatadi
//ConstructorParameters == Bu Class Canstructuri qanday parametr qabulqilishini ko'rsatadi
//ReturnType == Bu Function qanday parametr qaytarishini ko'rsatadi
//InstanceType == Bu Class qanday parametr qabulqilishini ko'rsatadi
//Parameters
function MyFunc(x, y) {
    return x.length > y.toString().length;
}
//ConstructorParameters
class MyClass {
    constructor(x, y) {
        this.x = x,
            this.y = y;
    }
}
//=================== Mustahkamlash ===================
class Abst {
}
class MyAbst extends Abst {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
    }
    set(value) {
        this.age = value;
    }
    get() {
        return this.age;
    }
    show() {
        console.log(this.name, this.age);
    }
}
// namecpase && module  2 si hamm bir xil ishlaydi module eski versia xisoblanadi
//namecpase  ishlatish tacsia qilinadi
var myClassName;
(function (myClassName) {
    class MyClasss {
    }
    myClassName.MyClasss = MyClasss;
})(myClassName || (myClassName = {}));
var MyModule;
(function (MyModule) {
    class MyClasss1 {
    }
    MyModule.MyClasss1 = MyClasss1;
})(MyModule || (MyModule = {}));

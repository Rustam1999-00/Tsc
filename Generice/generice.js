"use strict";
// ==================== 12-dars | Generics (types, array, function) |===================
const Arr1 = [true, false, "abs"];
// Decleretion Functionda Generict type ishlatish
function MyFunc1(x) {
    return x;
}
// Arrey Functionda Generict type ishlatish
const MyFunc2 = (x) => {
    return x;
};
const MyFunc22 = (x) => x; // Arrey functionning qisqartma shakli
// Signatur Functionda Generict type ishlatish
const echo = (x) => {
    return x;
};
const echo1 = (x) => {
    return x;
};
// console.log(MyFunc22(13));
// console.log(echo1(13));
// ========================= 13-dars | Generics #2 (type, class, interface) | ================================
class List {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
const list = new List(); // typeni ko'rsatish hamm mumkun ko'rsatmaslik hamm mumkun 
list.add(true);
list.add(12);
class List2 {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
const list2 = new List2();
list2.add("Hello");
list2.add("World");
list2.add(12);
list2.add(true);
function myfunc(person) {
    console.log(person.name);
}
myfunc({ name: "abc" });
function myfunc2(person) {
    // console.log(person.name);
}
myfunc2({ name: "abc" });
function gerProperty(obj, key) {
    return obj[key];
}
const resalt = gerProperty({ name: "abs", age: 12 }, 'age');
// console.log(resalt);
//============================= 15/3715-dars | Generics #4(extends, infer, ternar) | ===================================
//Arreylarda gerict type ishlatish
let arrG = [1, "str", true];
//======== Objectda gereict ishlatish 
// Object typeni o'zlashtirib olish
let person = { name: 'John', age: 12 };

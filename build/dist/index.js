"use strict";
// =============================================== 1-dars===================================================================;
console.log("salm");
console.log("salom");
let a = 12;
let b = "salom";
let c = true;
let d = null;
let e = undefined;
let g = [];
let f = {};
let h = { name: "test" };
// Objekt hossalari ham qanday Typeda ekanligini ham berib ketiladi
// ======================================================= 2-dars Functions ===========================================================================
// oddiy Functions --- signatureFunctions ==== overloadFuctions --- O'rganamiz
// oddiy Functions
function add1(x, y) {
    return x ** y;
}
console.log(add1(2, 3));
// signatureFubctions
let add2;
add2 = function (x, y) {
    return x + y;
};
// overloadFunctin ==== any bo'lgan functionlar
function adds3(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x}===${y}`;
    }
}
console.log(adds3(5, 5));
// =================================================== 3-dars =================================================================
//   type and opshinel chaing operators
// or operators
let ab;
ab = "lg";
ab = true;
let bc = "hfd";
bc = true;
//literal types
let ac;
ac = 12;
//opshinel chaing operators
let ad;
ad = { name: "df", age: 12 };
ad = { name: "dv" };
let ojkect = { name: "kamol", age: 12 };
// objekt ichiqagi propertisini aniqlash sharti
if ('age' in ojkect) {
    console.log("mavjut");
}
else {
    console.log('mavjut emas');
}
// =========================================5-dars Arrey taple,enam==============================================================
// default holatda birinchi kiritilgan qiymat taypini oladi
let arr = [1, 2];
let arr1 = ["a", "b", "c", "d", "e", "f", "g"];
// numberdan tashkiltopgan array
let arr3;
// default qiymat oladi
let arr4 = [1, 2, 3];
let arr41;
let arr5 = [1, 2, 3];
// -------------------------------------  tuples ----------------
//tuple bu tayyor shablon 
// tuples bu oldindan qanday malumot kelishini  belgilash ketmaketligi aniq belgilanadi qaysi indexda qanday turdagi malumot joylanishimmi belgilaydi
//tayyor shablon tuziladi
let tup;
tup = [5, "abc"];
// X tup=["vjg",true] bunday qilish xato
//================ shu turdagi tuple tuzsa hamm bo'ladi
let tup2;
tup2 = [5, ["jhfs", "jhds"], [456, true]];
// ------------------------------------- Enum  ----------------
// Enum bu ---qayta hisoblash
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var G;
(function (G) {
    G[G["A"] = 0] = "A";
    G[G["B"] = 10] = "B";
    G[G["C"] = 11] = "C";
})(G || (G = {}));
console.log(G.A, G.B, G.C); // javob  0 10 11
// bu joylashuv tartib raqamini o'zgartiradi yani qayta tenglaydi
//Bu orqali index orqali Keyini olish 
console.log(Gender[Gender.male], Gender[Gender.female]); //javob male,female
console.log(Gender[0], Gender[1]); //javob male,female
var H;
(function (H) {
    H["A"] = "Hello ";
    H["B"] = "TypeScript";
})(H || (H = {}));
console.log(0 /* I.A */);

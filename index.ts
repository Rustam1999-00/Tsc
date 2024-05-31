// =============================================== 1-dars===================================================================;

console.log("salm");



console.log("salom");


let a: number = 12

let b: string = "salom"

let c: boolean = true

let d: null = null

let e: undefined = undefined

let g: Array<"T"> = []

let f: object = {}

let h: { name: string } = { name: "test" }
// Objekt hossalari ham qanday Typeda ekanligini ham berib ketiladi


// ======================================================= 2-dars Functions ===========================================================================
// oddiy Functions --- signatureFunctions ==== overloadFuctions --- O'rganamiz

// oddiy Functions

function add1(x: number, y: number): number {
    return x ** y;
}
console.log(add1(2, 3));



// signatureFubctions
let add2: (x: number, y: number) => number

add2 = function (x: number, y: number): number {
    return x + y;
}

// overloadFunctin ==== any bo'lgan functionlar


function adds3(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        return `${x}===${y}`
    }
}
console.log(adds3(5, 5));

// =================================================== 3-dars =================================================================
//   type and opshinel chaing operators

// or operators
let ab: "sm" | "md" | "lg" | boolean

ab = "lg"
ab = true

// type                                 
type Simble = string | number | boolean

let bc: Simble = "hfd"
bc = true

//literal types
let ac: string | number
ac = 12

//opshinel chaing operators
let ad: { name: string, age?: number }
ad = { name: "df", age: 12 }
ad = { name: "dv" }

//objekt type and & operator working
type obj1 = { name: string } & { age: number }
let ojkect: obj1 = { name: "kamol", age: 12 }

// objekt ichiqagi propertisini aniqlash sharti
if ('age' in ojkect) {
    console.log("mavjut");

} else {
    console.log('mavjut emas');

}

// =========================================5-dars Arrey taple,enam==============================================================

// default holatda birinchi kiritilgan qiymat taypini oladi
let arr = [1, 2];
let arr1 = ["a", "b", "c", "d", "e", "f", "g"]
// numberdan tashkiltopgan array
let arr3: number[]
// default qiymat oladi
let arr4: number[] = [1, 2, 3];
let arr41: (number | string | boolean)[]

let arr5: Array<number | string> = [1, 2, 3]


// -------------------------------------  tuples ----------------
//tuple bu tayyor shablon 
// tuples bu oldindan qanday malumot kelishini  belgilash ketmaketligi aniq belgilanadi qaysi indexda qanday turdagi malumot joylanishimmi belgilaydi
//tayyor shablon tuziladi
let tup: [number, string]
tup = [5, "abc"]
// X tup=["vjg",true] bunday qilish xato


//================ shu turdagi tuple tuzsa hamm bo'ladi
let tup2: [number, string[],[number,boolean]] 
tup2= [5,["jhfs","jhds"],[456,true]] 

// ------------------------------------- Enum  ----------------
// Enum bu ---qayta hisoblash

enum Gender{
    male,
    female
}
enum G {
    A,
    B = 10,
    C
}
console.log(G.A,G.B,G.C); // javob  0 10 11
// bu joylashuv tartib raqamini o'zgartiradi yani qayta tenglaydi

//Bu orqali index orqali Keyini olish 
console.log(Gender[Gender.male],Gender[Gender.female]);//javob male,female
console.log(Gender[0],Gender[1]);//javob male,female

enum H {
    A= "Hello ",
    B="TypeScript"
}
//console.log(H[H.A]); // bunday qilib Hello so'zini chiqarib bolmaydi



//Buda conist bn enum yaratganda conpiliatsia bo'lish jayayonida  bajarilgan malumotlargina o'tadi  qayta hisoblash funktionlari o'tmaydi
const enum I{
    A,
    B 
}
console.log(I.A);













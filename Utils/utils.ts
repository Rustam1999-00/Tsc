// ========================= 22-dars | BigInt vs Number |  ==================================
// BigInt = bu javaScriptda katta sonlar bn ishlash uchun  ishlatiladi 
// javaScriptda 16 xonali sonlardan keyin hisoblashda xatoga uchraydi undan katt sonlar ustida amal bajarish uchuun Bigint tipi ishlatiladi

console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308 === javaScript Maxsimal 308 xonaligacha son chiqarib beraoladi
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991 == javaScript xavsiz amal bajara oladigan soni 

//console.log("9007199254740991+2",9007199254740991 +2); // 9007199254740991+2 9007199254740992 javob xato 
//console.log("99999999999999999", 99999999999999999);  //99999999999999999 100000000000000000 xato bo;ib ketadi


//================ Bigint

//Bigint  n bn belgilanadi 
// u kasir sonlar bn ishlamaydi
// Bigintni number bn ishlatib bolmaydi 
// const bi: bigint = 12n

let ba:bigint= BigInt(12)
let ba2:bigint= 10n /3n  // javob 3n      kasirlarni olib tashlaydi
// console.log(ba2);

// console.log("99999999999999999n", 99999999999999999n);  //99999999999999999n 99999999999999999n tog'ri
let bt:bigint = 9007199254740991n + 2n

// console.log("9007199254740991+2",bt );  // 99999999999999999+2 9007199254740993n  bigintda to'gri chiqadi to'g'ri

// Bigint String kabi ishlaydi




// =================================== 23-dars | ?? (nullish assignment) vs ? (chaining operator) |   =========================================

// ?? (nullish assignment) 
// ?? bu bizga kelyotgan malumotni null va  undefined ga tekshirib beradi

let n: number|null|undefined = null
// n=20
n= undefined

//console.log(n ?? 0); // null|undefined teng  bo'lsa  0 ga tenglashtiriladi 

//  ||yoki  bu faqat true vs false ga tekshiradi
// // ?? bu null|undefined ga tekshiradi

// false, 0 ,undefined , null 

let bn = ""|| 0

console.log(bn) // null|undefined teng bo'lsa;


// ========================= ? (chaining operator) =========================

let chaining = {
    name: "salom",
    address: {
        city: "Toshkent",
        country: "Uzbekistan"
    }
}
let chaining2 = {
    name: "salom",
    address:null
}
console.log(chaining.address.city)
//Toshkent
// console.log(chaining2?.address?.city);
// name: 'salom', address: null }

// function add0 (x: number, y: number,cc?.(v: number)=>void):number{
//     let natija: number = x+y;
//     // if(cb){
//     //     cb(natija)
//     // }    
//     cc?.(natija)

//     return natija;

// }
// let result:number = add0(2,3,(e)=>console.log(">>>>",e));
// console.log(result);



type Arr0 = ({product: number}| null| undefined)[]

function productPrice(arr:Arr0):number {
    let s:number = 0

    arr.forEach(item => {
     s += item?.product ?? 0  // ?. product bolsa qo'shadi ?? bo'lmasa 0 ga tenglashtiriladi== vazifalari
    });
    return s;
}

let result1 = productPrice(
    [
        {
            product:1  
        },
        null,
        {
            product:2 
        },
        null,
        {
            product:3  
        },
        null,
        {
            product:4  
        },
        null,
        {
            product:5  
        },
        null,
    ]
)
// console.log(result1);




// ===============================  24-dars | ! operator va foydalanuvchi ma'lumotlarini tekshirish |============================================

// ! inkor operatori
// ! operator - bu  foydalanuvchi ma'lumoti aniq borligini belgilash typeScriptda
interface IProducts{
    name: string;
    weght?: number;
}
function calculiteProduct(product: IProducts[]):number{
    let totalProduct:number = 0
    product.forEach(
        product=>
        totalProduct += product.weght!) // ! bunda productning Weght poliyasi Aniq bor degani

    return totalProduct
}

let resultP = calculiteProduct([
    {name:"a",weght:1},
    {name:"b",weght:2 },
    {name:"c",weght:3},
    {name:"d",weght:4},
    {name:"e",weght:5},
])
// console.log(resultP); //15

let ap: number| null| undefined = null

setTimeout(() => {
ap = 20
},500)

setTimeout(() => {
let bp:number = ap! // ap! aniq number typega teng degani

console.log(bp);

},1000)

 class frontentDeveloper {
    isCreateRestApi: boolean = false
 }
 class BackendDeveloper {
    isCreateRestApi: boolean = true 
    createCode(){}
 }

 function isBackendDeveloper(developer:any): developer is BackendDeveloper{
    return developer.isCreateRestApi      // Backent Developerni aniqlovchi function
 }

 function vriateCode(developer: frontentDeveloper|BackendDeveloper){
    if(isBackendDeveloper(developer)){
        developer.createCode();      // Backent Developer bolsa RestApi tuza olsin degan function
    }else{
        console.log("frontend developer");
    }
 }

 console.log(vriateCode);
 






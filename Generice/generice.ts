// ==================== 12-dars | Generics (types, array, function) |===================

//Generic type bu moslashuvchang type hisoblanadi Qanday tipda malumot yuborsak shunday tipda malumot qaytadi

type A<T> = T

type B = A<number>   //B type numberga o'zlashtrildi 
type C = A<string>   //C type stringga o'zlashtrildi


// Arreyda Generic type ishlatish
type D <T> =T[]
const Arr1: D<boolean | string> = [true, false,"abs"]

// Decleretion Functionda Generict type ishlatish
function MyFunc1 <T>(x:T):T{
    return x
}
// Arrey Functionda Generict type ishlatish
const MyFunc2 = <T>(x:T):T=>{
    return x
}
const MyFunc22 = <T>(x:T):T => x // Arrey functionning qisqartma shakli

// Signatur Functionda Generict type ishlatish
const echo:<T>(x:T) => T = <T>(x:T):T =>{
return x
}

// Signatur Functionda Generict type yaratgan xolatdagi qisqartma xolati
type ECHO = <T>(x:T) => T 
const echo1:ECHO= <T>(x:T):T =>{
    return x
    }

// console.log(MyFunc22(13));
// console.log(echo1(13));

// ========================= 13-dars | Generics #2 (type, class, interface) | ================================


class List <T>{
    elements:T[]=[];
    add(element:T):void{
        this.elements.push(element)
    }
}
const list = new List<number|boolean>() // typeni ko'rsatish hamm mumkun ko'rsatmaslik hamm mumkun 
list.add(true)
list.add(12)

// console.log(list.elements);

interface IList<T> {
    elements:T[]
    add(element:T):void
    // new (name:string,age:number):void // Interfacesda canstructor yaratish shakli
}
type ListType = string|number|boolean

class List2 implements IList<ListType>{
    elements:ListType[]=[];
    add(element:ListType):void{
        this.elements.push(element)
    }
}

const list2 = new List2()

list2.add("Hello")
list2.add("World")
list2.add(12)
list2.add(true)

// console.log(list2.elements);

// ==================================   14-dars | Generics #3 (extends, ternar) |  ===============================

// generettypeda  extends ishlaltish orqali uning o'rniga  string object kelishi mumkun

type Ae <T> = T
type Be = A<string>

// type Ce <T extends string> = T //Bu type extends orqali stringa o'zgardi bu boshqa typega o'zgartirib bo'lmashligi uchun shart berish kerak
type Ce <T> = T extends string ? string : never //Bu type extends orqali stringa o'zgardi bu boshqa typega o'zgartirilsa neverga teng bo'ladi
type Ve =Ce<string>
type De =Ce<number>


function myfunc <T extends {name:string}>(person: T):void{ // Generic type {name propertiga ega OBJECTga} tenglashtirildi}
    console.log(person.name);
}
myfunc({name:"abc"})

//=========functionda interfase ishlatish
interface Inter {
    name:string
}

function myfunc2 <T extends Inter >(person: T):void{ 
    // console.log(person.name);
}
myfunc2({name:"abc"})

// intrfasening  faqat keylarini olish

 interface Ikey{
    a: number
    b: string
    c: boolean
 } 

type InterKey = keyof Ikey  

function gerProperty<ObjType,ObjKey extends keyof ObjType>(obj:ObjType, key:ObjKey){ // Bu function object typeni chiqaradi
    return obj[key] 
}

const resalt = gerProperty({name:"abs",age:12},'age')
// console.log(resalt);


//============================= 15/3715-dars | Generics #4(extends, infer, ternar) | ===================================

//Arreylarda gerict type ishlatish


let arrG = [1,"str",true]

 type Arr<T> = T extends (infer C) [] ? C : never;

 type BG = typeof arrG
type Cg = A<BG> // Cg string | number | boolean  dan tashkil topgan arrayga teng 


//======== Objectda gereict ishlatish 
// Object typeni o'zlashtirib olish

let person = {name: 'John', age:12}

type Ab<T> = T extends { [key: string]:infer U } ? U : never
type Bt = typeof person
type Bc = A<Bt> //Bc bu person Objektning typeni oldi o'ziga o'zlashtirib --  string va number ni





















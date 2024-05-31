//===================== 16-dars | Utils (Partial, Required, NonNullable, Record) | ===========================================
// Partial =  Bu o'pshinl qilib beradi  string | undefined == malumot kelmasa | undefined 
// Required = Bu bo'ishi shart 
// NonNullable = Bu faqat rost bolgan qiymatlarni qaytarib beradi == null| undefined olmaydi  String |number ni oladi
//Record = Bu propertilari bir xil typega ega bo'gan  Object yaratib beradi


// Partial
type Person0 = { name: string, age: number }
type Person01 = Partial<Person0>  // Person01 optiom xolatga otdi 
// type Person01 = {
//     name?: string | undefined;
//     age?: number | undefined;
// }

type MyPerson<T> = { [P in keyof T]?: T[P] };
type MyPerson1 = MyPerson<Person0>
// type MyPerson1 = {                  // shunga teng   
//     name?: string | undefined;
//     age?: number | undefined;
// }


// Required 
type Required1 = { name?: string, age: number }
type Required2 = Required<Required1>     // Opshinlni olib tashlaydi
// type Required2 = {
//     name: string;
//     age: number;
// }
type MyRequired<T> = { [P in keyof T]-?: T[P] }; // qo'lda opshimnl xolaga keltirilgani  = -? opshinl emas degani
type MyRequired1 = MyRequired<Required1>

// NonNullable

type Color = string | number | boolean | null | undefined
type Color1 = NonNullable<Color>  // Bu faqat rost bolgan qiymatlarni qaytarib beradi == null| undefined olmaydi

type MyColor<T> = T extends null | undefined ? never : T  // Bu NonNullable ni qo'lda Yaratilgani 
type MyColor1 = MyColor<Color>


//Record

type Record0 = { width: number, height: number }

type Record01 = Record<"width" | "heght", number> // Bu propertilari bir xil typega ega bo'gan  Object yaratib beradi
// type Record01 = {
//     width: number;
//     heght: number;
// }

type MyRecord<K extends string | number | symbol, T> = { [P in K]: T } //Bu record founktionning qo'lda yaratilgani 
type MyRecord1 = MyRecord<"width" | "heght", number>

//================================ 18-dars | Utils #3 (Pick, Extract, Exclude, Omit) |=============================

//Pick == Bu bizga katta Objekt ichidan faqat bizga kerakt bo'lgan propertilarini qaytarib beradi
//omit == Bu bizga katta Objekt ichidan faqat bizga kerakt bo'lmagan propertilarini olib tashlab yangi object qaytarib beradi
//Extract == bu bizga ikkta bir xil typelar bolsa ikkalasida hamm bor bo'lgan typelarni qaytaradi
//Exclude == bu bizga ikkta bir xil typelar bolsa ikkalasida ham yo'q bo'lgan typelarni qaytaradi

type Vetor = { name: string, age: number, wegiht: number }
type Vetor2 = Pick<Vetor, "name" | "wegiht">
// type Vetor2 = {        // Bizga shunday Object qaytaradi
//     name: string;
//     wegiht: number;
// }

type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
type MyPick2 = MyPick<Vetor, "name" | "wegiht">   // qolda yasalishi pickning
//========
//omit

type omit = Omit<Vetor, "name" | "age">
// type omit = {              //omit pick ning teskarisi Objektdan kerak emas bo'lgan narsalani olib tashlaydi   
//     wegiht: number;
// }


type MyOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] } // qo'lda qilingani
type MyOmit2 = MyOmit<Vetor, "name" | "age">
// type MyOmit2 = {      natijasi
//     wegiht: number;
// }
//=== Extract

type AE = string | number | boolean
type BE = string | number
type extrakt = Extract<AE, BE>
// type extrakt = string | number   ikkalasida ham bor bolgan typelarini qaytaradi

type MyExtract<T, U> = T extends U ? T : never  // bu qolda qilingani 
type MyExtract2 = MyExtract<AE, BE>
// type MyExtract2 = string | number



//== Exclude
type exclude = Exclude<AE, BE>
// type exclude = boolean ikkalasida ham yog'ini qaytaradi

type MyExcludet<T, U> = T extends U ? never : T  // bu qolda qilingani 
type MyExclude2 = MyExcludet<AE, BE>
// type MyExclude2 = boolean


//============================= 19-dars | Utils #4 Parameters, ConstructorParameters, ReturnType, InstanceType |===================================

//Parameters = bu function qanday parametr qabulqilishini xo'rsatadi
//ConstructorParameters == Bu Class Canstructuri qanday parametr qabulqilishini ko'rsatadi
//ReturnType == Bu Function qanday parametr qaytarishini ko'rsatadi
//InstanceType == Bu Class qanday parametr qabulqilishini ko'rsatadi

//Parameters
function MyFunc(x: string, y: number): boolean {
    return x.length > y.toString().length;
}
type MyFunc1 = typeof MyFunc

type MyParametrs = Parameters<MyFunc1>
// type MyParametrs = [x: string, y: number] // FUnction qanday parametr qaytarishini tapleda qaytaradi

type ExmParams<T extends (...arg: any) => any> = T extends (...arg: infer U) => any ? U : never   // bu qolda qilingani
type ExmParams1 = ExmParams<MyFunc1>

//ConstructorParameters

class MyClass {
    x: string
    y: number
    constructor(x: string, y: number) {
        this.x = x,
            this.y = y
    }
}
type MyClass1 = typeof MyClass
type MyConstructorParameters = ConstructorParameters<MyClass1>  // type MyConstructorParameters = [x: string, y: number]

type ExmConstructorParameters<T extends new (...arg: any) => any> = T extends new (...arg: infer U) => any ? U : never // bu qolda qilingani
type ExmConstructorParameters1 = ExmConstructorParameters<MyClass1>



//ReturnType

type myReturnType = ReturnType<MyFunc1> // Function qanday type qaytarishini ko'rsatadi
type ExmReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer U ? U : never // qo'lda yasalgani
type myReturnType2 = ExmReturnType<MyFunc1>

//InstanceType

type myInstanceType = InstanceType<MyClass1> // Class qanday type qaytarishini ko'rsatadi
type ExmInstanceType<T extends new (...arg: any) => any> = T extends new (...arg: any) => infer U ? U : never // qo'lda yasalgani
type myInstanceType2 = ExmInstanceType<MyClass1>

//=============================== 20-dars | Utils #5 (Uppercase, Lowercase, Capitalize, Uncapitalize) |========================================


type SIZE = "small" | "medium" | "large"

type U = Uppercase<SIZE>   //"SMALL" | "MEDIUM" | "LARGE"  barchasini katta xarfga o'zgartiradi
type L = Lowercase<U>      // "small" | "medium" | "large" barchasini kichik xarfga o'zgart
type C1 = Capitalize<L>     // "Small" | "Medium" | "Large" barchasining bosh xarfini katta xarfga o'zgart
type CU = Uncapitalize<U>  //"sMALL" | "mEDIUM" | "lARGE"   barchasining bosh xarfini kichik xarfga o'zgart

//=================== Mustahkamlash ===================



abstract class Abst {            // Abstrakt class lar  abstrakt metodlar hamm oladi
    abstract name: string
    abstract age: number
    abstract set(value: number): void
    abstract get(): number
    abstract show(): void

}
 class MyAbst extends Abst {
    name: string
    age: number
    constructor(name: string, age: number) {
        super()
        this.name = name
        this.age = age
    }
    set(value: number) {
        this.age = value
    }
    get() {
        return this.age
    }
    show() {
        console.log(this.name, this.age)
    }
 }
// namecpase && module  2 si hamm bir xil ishlaydi module eski versia xisoblanadi
//namecpase  ishlatish tacsia qilinadi

namespace myClassName {
   export class MyClasss{}
}

module MyModule{
    export class MyClasss1{}
}
















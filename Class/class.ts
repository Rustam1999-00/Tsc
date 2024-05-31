//===================== Claslar  6-darst  ================================================================

//Class bu birxil qiymatlarga ega bo'lgan  Objectlar yaratishga  kerakt bo'ladi
//Bir Classda bitta Canistruktur bo'ladi bir nechta netodlar bo'lishi mumkun

class myClas {
    _name: string = "Rustam"
    _age: number
    constructor(name: string, age: number) {
        this._name = name,
            this._age = age
    }
    //method birnechta bo'lishi mumkun
    info(value: number): string {
        return `${this._name}-${this._age + value}`
    }

    //Statik Bu faqat Ota Classga tegishli bo'ladi 
    //Undan meros olib bo'lmaydi
    static isFling = false
    static description(): string {
        return `${this.name}`
    }

    //get bu Class propertilarini to'g'ridan to'g'ri chiqarib beradi
    get name(): string {
        return this.name
    }
    //Set BU Class qiymatlarini tashqaridan to'g'ridan to'g'ri o'zgartirib beradi
    set name(value: string) {
        this._name = value
    }
}

const Diyor: myClas = new myClas("To'lqin", 15);
const ibrohim: myClas = new myClas("Rustam", 25)
// console.log(Diyor);
// console.log(ibrohim.info(10));
ibrohim.name = "ibrohim"
// console.log(ibrohim._name);

//======= Ininstensoft bu qaysi Clasdan ininstent olganligini aniqlaydi

if (ibrohim instanceof myClas) {
    // console.log("Tegishli");

} else {
    // console.log("Tegishli emas");

}

//============================================= Inhertince Voristlik olishson Extent =========================================


class Person {
    _name: string
    _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    seyHello(): string {

        return `Hello ${this._name}`
    }
}

const Ibrohim: Person = new Person("Ibrohim", 12)
// console.log(Ibrohim.seyHello());

class Student extends Person {
    _group: number
    _course: number
    constructor(name: string, age: number, group: number, course: number) {
        super(name, age)
        this._group = group
        this._course = course
    }

    //Birxil nomdagi metodni boshqa extend olgan clasda ham ishlatsa bo'ladi
    //Birxil methodlarni chaqirganda o'ziga tegishli bolgan methodlaring sharti bajariladi
    seyHello(): string {

        return `Hello Mening ismim ${this._name}-${this._course}-kursdada ${this._group}- guruhda o'qiyman`
    }
}

const Akbar: Student = new Student("Akbar", 15, 26, 3,)
// console.log(Akbar.seyHello());



class Teacher extends Person {
    _fanlar: string[]

    constructor(name: string, age: number, fanlar: string[]) {
        super(name, age)
        this._fanlar = fanlar
    }

}

const Umidjon: Teacher = new Teacher("Umidjon", 24, ["React", "JS"])
// console.log(Umidjon.seyHello());


// ================================= Interface implaments - ===========================

//Interface bu classlarga typelarini ko'rsatadi yani ichidagi strukturasini ko'rsatadi
//Interface va class farqi --- Bir class bitta clasdan extend oladi imterface esa biirnechtasidan oladan extend olaveradi
// Interface va type farqi --- Bir xil nom bn 2ta type yaratib bo'lmaydi Interfaseda bo'lsa birnechta yaratsa bo'ladi natija--
// keyingisiga yigilib boraveradi

interface IPerson {
    _name: string

    seyHello(): string
    info: () => string  // signature function for
}
// Birxil nomdayaratsa bo'ladi
interface IPerson1 {
    _name: string
    _age: number

    seyHello(): string
    info: () => string  // signature function for
}
// BIRnechta interfacedan extent olsa bo'ladi
interface IPerson2 extends IPerson, IPerson1 {
    _name: string
    _age: number

    seyHello(): string
    info: () => string  // signature function for
}

//typelarni birlashtirish =================================================================

type TPerson1 = {
    _name: string
}
type TPerson2 = {
    _age: number
}
type twoType = TPerson1 & TPerson2

//implements orqali clasga type va interfaceni ko'rsatib qo'yiladi
class Person1 implements twoType {
    _name: string
    _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    seyHello(): string {
        return this._name
    }
    info(): string {
        return `${this._name}-${this._age}`
    }
}

const Ibrohim1: Person1 = new Person1("Ibrohim", 12)
// console.log(Ibrohim);

// ========================================= 10-dars | Abstrakt Class ========================

//Abstrct Claslardan Yangi Objekt yaratib Bo'lmaydi
//Undan faqat Exstend olish uchun ishlatiladi
//Abstract Clasda abstract method yaratilgan bo'lsa  extend olingan Clasda O'sh method ishlatilish kerakt 

abstract class Abstract {
    _name: string
    _age: number
    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }
    abstract info():number
}
class Abstract1 extends Abstract {
    _group: number
    _corse: number
    constructor(name: string, age: number, group: number, corse: number) {
        super(name, age)
        this._group = group
        this._corse = corse
    }
    info(): number {
        return this._group
    }
}
const Ibrohim2: Abstract1 = new Abstract1("Ibrohim", 12, 26, 3)
// console.log(Ibrohim2.info());


//============================== 10-dars | Access modifiers (public private protected readonly )==============================================
//public ochiq codlar
//private Bu yashirin code hisoblanadi uni boshqa joyda ishlatib bo'lmaydi
//protected Bundan extend olsa bo'ladi leki Objektda ishlatib bo'lmaydi chaqirib bo'lmaydi
// Redonlu bu faqat o'qish uchun Objektda uni qayta nomlab o'zgartirtib bo'lmaydi faqan ko'rish uchun 


class PersonP {
    readonly _id: number
    private _name: string
    protected _age: number

    constructor(id:number, name: string, age: number) {
        this._id = id
        this._name = name
        this._age = age
    }

    seyHello(): string {

        return `Hello ${this._name}`
    }
}

const IbrohimP: PersonP = new PersonP(1,"Ibrohim", 12)
// IbrohimP._id=2 bo'lmaydi u redonly faqt o'qish uchun 
// IbrohimP.age  U ko'rinmaydi protected undan extend olsa bo'ladi faqat
// console.log(Ibrohim.seyHello());




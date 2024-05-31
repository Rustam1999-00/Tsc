//============================== 11-dars | namespace, module (nomlar fazosi) ==================================
// nameSpace Bu nom berilgan guruxlar xisoblanadi u orqali codeni tartiblsh mumkun 
//undagi class functionlarni tashqarida ishlatish uchun export orqali ishlatishimiz mumkun 
// uni birxil nom bn 2ta namcpaseni yaratish  mumkun 
// ichma ich  namecpase yaratish ham mumkun 


namespace Utils {
    export function log(text: string, color: string, fontSize?: string): void {
        if (fontSize) {
            console.log(`%c${text} `, `color:${color},fontSize:${fontSize}`);
        } else {
            console.log(`%c${text} `, `color:${color}`)
        }
    }
}
Utils.log("Salom", "red", "24px")

namespace Utils {
    export abstract class Animals {
        private name: string  // nomi yopiq
        constructor(name: string) {
            this.name = name
        }
        abstract say(): void
    }
}
// 2 ta birxil nom bn hamm yaratsa bo'ladi
namespace Utils {
    export class Tiger extends Utils.Animals {
        protected sound: string  // Ovozini o'zgartirib bo'lmasligi uchun

        constructor(name: string, sound: string) {
            super(name)
            this.sound = sound
        }
        say(): void {
            Utils.log(`${this.say}`, "red", "22px")
        }
    }
}

const tiger = new Utils.Tiger("sher", "RRRR")
console.log(tiger);



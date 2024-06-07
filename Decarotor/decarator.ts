// Decarator -- bu Metadastur yaratishga yordam beradi u orqali Class ni uning parametrlarini gettes setterlari Methodlarini o'zgartirishga va (uni qayta ishlashga )yordan beradi

interface IUser {
    user: number;
    getuser(): number
}

class User implements IUser {
    user: number = 1000

    getuser(): number {
        return this.user

    }
}

function serverUser(obj: IUser): IUser {
    obj.user = 7

    return obj;
}
function loggerUser(obj: IUser): IUser {
    console.log("User count", obj.user);
    return obj;
}

console.log(new User().getuser());

console.log(serverUser(new User()).getuser());
console.log(serverUser(loggerUser(new User())).getuser());

// =============================================================================================

// Decarator -- bu Metadastur yaratishga yordam beradi u orqali Class ni uning parametrlarini gettes setterlari Methodlarini o'zgartirishga va (uni qayta ishlashga )yordan beradi

// interface IUser {
//     user: number;
//     getuser(): number
// }
// @serverUser
// @nullUserAdvence
// class User implements IUser {
//     user: number

//     getuser(): number {
//         return this.user

//     }
// }

// // @ts-ignore
// function serverUser(target: Function) {
//     target.prototype.user = 7


// }

// function nullUserAdvence<T extends { new(...arg: any[]): {} }>(constructors: T) {
//     return class extends constructors {
//         user = 10
//         getuser(): number {
//             return this.user + 10

//         }
//     }
// }

// // console.log(typeof User);

// console.log(new User().getuser());

// //===========================36-dars | Decorator - factories |
// //Factories -Decorator -bu Danimeck Decarator yaratish uchun ishlatiladi M: Decaratorga bergan qiymat orqali Clasimizni o'zgartirsak bo'ladi

// @nullUserAdvenceDay(30)
// // @serverUserDay(50)
// class User1 implements IUser {
//     user: number

//     getuser(): number {
//         return this.user

//     }
// }
// function serverUserDay(user: number) {

//     return (target: Function) => {
//         target.prototype.user = user
//     }

// }


// function nullUserAdvenceDay(user: number) {

//     return <T extends { new(...arg: any[]): {} }>(constructors: T) => {


//         return class extends constructors {
//             user = user
//             getuser(): number {
//                 return this.user + 10

//             }
//         }

//     }
// }
// console.log(new User1().getuser());



// //============================= 37-dars | Decorator - Topshiriq | =================================================================

// @createdAt
// class AddUser implements IUser{
//     user: number;
//     getuser(): number {
//         return this.user;
//     }
// }

// function createdAt<T extends {new (...args:any[]):{}}>(constructor:T){
//     return class extends constructor{
//         user=12
//         createdAt = new Date().valueOf();
//     }
// }
// interface IAddIntenbilise extends IUser{
//     createdAt: number;
// }

// console.log((new AddUser() as IAddIntenbilise));













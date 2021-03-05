// command + shift + . : hiển thị thư mục ẩn
// view : 
//     + Hidden item
//     + File name

// Hello

// 1 : Khai báo

// Sự khong chặt chẽ
// re - create : Bị khởi tạo lại
// let a = 10
// let a = 11

// scope : pham vi ({})

// if (true){
//     var a = 10
// }

// hoisting : Khi dùng var việc khai báo sẽ đặt trước đoạn
// kiểm tra giá tri

// console.log(a)
// let a = 10

// const a = 10

// a = 11
// console.log(a)

// immutable (Kiểu vùng nhớ) , mutable

// 2 : Kiểu dữ liệu (Kiểu tuỳ chon)

// null : Khi và chỉ khi người ta cố tình gán
// true , false 
// 6 th là false = 0 , null , undefined , "", false , NaN
// let a = 0
// if(""){
//     console.log("Trường hợp true")
// }else{
//     console.log("Trường hợp false")
// }
// undefined 
// Th1 : Khai 1 biến mà không có giá trị
// let a
// console.log(a)
// Th2 : Gọi thuộc tính không tồn tại
// Th3 : Function không return hoặc chỉ có từ khoá return



// 3 : Object
// const teo = {
//     name : "Nguyễn Văn Tèo",
//     age : 10
// }

// console.log(teo.name)
// console.log(teo['name'])

// 4 : Array
// const arrNumbers = [10,11,21,5,2]

// console.log(arrNumbers[0])

// 5 : Toán tử
// độ ưu tiên 1 : ++ , --
// độ ưu tiên 2 : * / 
// độ ưu tiên 3 : + -

// let a = 5
// let b = 10

// let result = a++
// console.log(result)
// console.log(a)

// 6 : phương thức

// function showName(name){
//     console.log(name)
//     return
// }

// console.log(showName("phat"))

// 7 : Object method
// const teo = {
//     name : "Nguyễn Văn Tèo",
//     age : 10,
//     showInfo : function (){
//         console.log(this.name)
//     }
// }

// 8 : So sánh
// let a = 
// let b = "5"

// let a = undefined
// let b = null
// console.log(a + b)

// 9 : Vòng lặp

const arrNames = ["Tèo","Tí","Hoa","Tuấn"]

const teo = {
    name : "Nguyễn Văn Tèo",
    age : 10,
}

// for (const name of arrNames) {
//     console.log(name)
// }

// for (const key in arrNames) {
//    console.log(key)
// }

// for of 
// function multiply(arr){
//     let result = 1
//     for (const value of arr){
//         result *= value
//     }
//     return result
// }

// console.log(multiply([2,3,4]))

// for in
const apartment = {
    bedroom: {
        area : 20,
        bed: {
            type : 'twin bed',
            price : 10
        }
    }
}

function getKey(obj){
    for (const key in obj){
        console.log(key)
        for (const keyBedRoom in obj[key]){
            console.log(keyBedRoom)
            for (const keyBed in obj[key][keyBedRoom]){
                console.log(keyBed)
            }
        }
    }
}
// cách 2 : đê qụi
// Nên chọn cách tường minh
// function getKey(obj){
//     for (const key in obj){
//         console.log(key)
//         if (typeof obj[key] === "object"){
//             getKey(obj[key])
//         }
//     }
// }
getKey(apartment)

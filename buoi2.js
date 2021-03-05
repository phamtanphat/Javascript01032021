// 13 : Array method
// const arrNums = [1,2,3,4,5]

// Thêm dữ liệu ở cuối mảng
// arrNums.push(6)
// Xoá ở cuối
// arrNums.pop()
// Thêm ở đầu
// arrNums.unshift(0)
// Xoá ở đầu
// arrNums.shift()
// Xoá ở giữa
// arrNums.splice(1,1)
// Thêm ở giữa
// arrNums.splice(1,0,6,7,8,9,10)
// arrNums.splice(-2,1)

// console.log(arrNums)

// 14 : Higher order function : phương thức sẽ nhận giá trị là phương

// function tinhTong(arr , fn){
//     let result = 0
//     for (const value of arr) {
//         result += value
//     }
//     fn(result)
// }

// tinhTong([1,2,3,4],function(result) {
//     console.log(result)
// })

//15 : Hàm map (transform mảng)
// 1 - Thay đổi giá trị của phần tử, không thay đổi kích thươc mảng
// 2 - Không gắn sự thay đổi vào mảng cũ, gắn sự thay đổi vào mảng mới
// const arrNums = [1,2,3,4,5,6,7,8,9,10]

// const newArrNums = arrNums.map(function(number , index) {
//     return number*2
// })

// console.log(arrNums)
// console.log(newArrNums)

// function namesOnly(arr) {
//     const newArr = arr.map(function(person) {
//         return person.name
//     })
//     console.log(newArr)
// }

// namesOnly([
//     {
//         name:"Teo",
//         age : 20
//     },
//     {
//         name:"Ti",
//         age : 5
//     },
//     {
//         name:"Tun",
//         age : 8
//     },
//     {
//         name:"Tuan",
//         age : 10
//     },
// ])

// const arrNums = [1,2,3,4,5,6,7,8,9,10]

// Array.prototype.myMap = function(fn) {
//     let newArr = []
//     for (const value of this) {
//         newArr.push(fn(value))
//     }
//     return newArr
// }

// const newArrNums = arrNums.map(function(number) {
//     return number*2
// })
// console.log(newArrNums)


// 16 : Hàm filter
// 1 - Thay đổi kích thước , không thay đổi giá trị
// 2 - Không gắn sự thay đổi vào mảng cũ, gắn sự thay đổi vào mảng mới

// const arrNames = ["Hao" ,"Tuan" ,"Loan", "Hau"]

// const newArrNames = arrNames.filter(function(name){
//     if(name.length > 3 ){
//         return false
//     }
//     return true
// })

// console.log(newArrNames)


// Array.prototype.myFilter = function(fn) {
//     let newArr = []
//     for (const value of this) {
//         const dk = fn(value)
//         if (dk) {
//             newArr.push(value)
//         }
//     }
//     return newArr
// }

// const arrNames = ["Hao" ,"Tuan" ,"Loan", "Hau"]

// const newArrNames = arrNames.myFilter(function(name){
//     if(name.length > 3 ){
//         return false
//     }
//     return true
// })
// console.log(newArrNames)


const teo = {
    name : "Nguyen Van Teo",
    age : 10
}

delete teo.age
console.log(teo)
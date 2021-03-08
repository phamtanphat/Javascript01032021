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


// const teo = {
//     name : "Nguyen Van Teo",
//     age : 10
// }

// delete teo.age
// console.log(teo)


// const listProducts = [
//     {id : 1 , category : 1 , name : 'Ti vi '},
//     {id : 2 , category : 1 , name : 'Tủ lạnh '},
//     {id : 3 , category : 3 , name : 'Chén bát'},
//     {id : 4 , category : 2 , name : 'Máy giặt'},
// ]

// // strict equal
// function getProduct(category , listProducts){
//     const newListProducts = listProducts.filter(function(product){
//         if (product.category === category){
//             return true
//         }
//         return false
//     }).map(function(product){
//         delete product.category
//         return product
//     })
//     console.log(newListProducts)
// }
// getProduct(3,listProducts)

// 17 : Hàm reduce
// const arrNums = [1,2,3,4,5]

// 1 : Tính toán để trả về kết qua theo yêu cầu
// 2 : Không ảnh hưởng tới mảng cũ

// const result = arrNums.reduce(function(accumulator , currentValue) {
    // Vòng lặp 1 : 
    // accumulator = init
    // current = 1 (Phần tử đầu tiên trong mảng)

    // Vòng lặp 2 :
    // accumulator = kết quả mà vòng lặp thứ 1 trả về
    // console.log(accumulator, currentValue)
//     return accumulator + currentValue;
// },0)

// console.log(result)

// Bai tap ví dụ

// const voters = [
//     {name : 'Teo' , age : 30 , voted : true},
//     {name : 'Ti' , age : 32 , voted : false},
//     {name : 'Tun' , age : 33 , voted : true},
//     {name : 'Hoa' , age : 31 , voted : false},
//     {name : 'Lan' , age : 35 , voted : false},
//     {name : 'Hue' , age : 36 , voted : true},
// ]
// type script : Dự án lớn nên biết typescript

// function totalVotes(arr) {
//     const total = arr.reduce(function (accumulator, voter){
//             if(voter.voted){
//                 accumulator += 1
//             }
//             return accumulator
//     },0)
//     console.log(total)
// }

// totalVotes(voters)

// Bai tap kiem tra gia trị trùng : {a : 3 , b : 2 , c:1}

// const words = ["a", "b" , "c" ,"a" ,"b" ,"a"]

// const object = words.reduce(function(accumulator , word){
//     // Kiểm tra key đã tồn tại trong object hay chưa
//     if(word in accumulator){
//         // Đã tồn tại trong object
//         accumulator[word] += 1
//     }else{
//         // Lần đầu xuất hiện
//         accumulator[word] = 1
//     }
//     return accumulator
// },{})

// console.log(object)

// const teo = {}

// teo["name"] = "Nguyen Van Teo"
// console.log(teo)


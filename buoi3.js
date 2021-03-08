// 18 : Prototype
// Class (Lớp đối tượng)

// function Person(name , age) {
//     this.name = name;
//     this.age = age
// }

// static

// Person.prototype.showName = function() {
//     console.log(this.name)
// }

// const teo = new Person("Teo",10)
// const ti = new Person("Ti",5)
// console.log(Person.prototype.constructor == Person)

// 19 : Function scope () ==> {}

// let a = 10

// function doSth(){
//     a = 5
//     console.log(a + 1)
// }
// doSth() // 6
// console.log(a) // 10

// 20 : Function context

// const teo = {
//     name : "Teo",
//     age : 10,
//     showName : function() {
//         console.log(this.name)
//     }
// }
// bind dung để định nghĩa các phương thức có từ khoá this
// bind chỉ dụng cho định nghĩa chứ không thực thi phương thức
// const copy = teo.showName.bind(teo)
// copy()


// function run(cb){
//     console.log('run...')
//     cb()
// }
  
//   const mouse = {
//     name : 'Mickey',
//     run : function() {
//         console.log(this.name + ' is running')
//     }
//   }
  
//   run(mouse.run.bind(mouse))
  // 'run...'
  // 'Mickey is runn'

// 21 : A row function (Phương thức 1 dòng)

// const arr = [1,2,3]

// const newArr = arr.map(function(num) {
//     return num * 2
// })

// const newArr2 = arr.map((num) => {
//     return num * 2
// })

// console.log(newArr , newArr2)

const teo = {
    name : "Teo",
    age : 10,
    showName : function () {
        let fn = () => {
            
            let fn2 = () => {
                console.log(this.name)
            }
            fn2()
        }
        fn()
    }
}
teo.showName()


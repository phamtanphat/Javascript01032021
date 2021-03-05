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

function tinhTong(arr , fn){
    let result = 0
    for (const value of arr) {
        result += value
    }
    fn(result)
}

tinhTong([1,2,3,4],function() {
    console.log()
})






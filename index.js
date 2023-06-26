//Tạo mảng rỗng để cho người dùng nhập
let numArray = []
// Thêm số vào mảng
function themSo(){
    let num = +document.getElementById("input-num").value

    if(!isNaN(num)){
        numArray.push(num)
    }
    
    document.getElementById("display").innerHTML = "Số được thêm 👉 " + numArray
}
//1. Tổng số dương
function totalNum(){
    let total = 0
    for(let i = 0; i < numArray.length; i++){
        total += numArray[i]
    }
    document.getElementById("tongSoduong").innerHTML = "👉 " + total
}
//2. Đếm có bao nhiêu số dương trong mảng
function countNum(){
    let count = numArray.filter((value) => {
        return value >= 0
    })
    
    document.getElementById("soduongTrongmang").innerHTML = "👉 " + count
}
//3. Tìm số nhỏ nhất trong mảng
function minNums(){
    let minNums = Math.min(...numArray)
    document.getElementById("soNhonhat").innerHTML = "👉 " + minNums
}
//4. Tìm số dương nhỏ nhất
function minPositivesNums(){
    let positiveNums = numArray.filter((value) =>{
        return value > 0
    })
    let minPositivesNums = Math.min(...positiveNums)
    document.getElementById("soDuongnhonhat").innerHTML = "👉 " + minPositivesNums
}
// 5. Tìm số chẵn cuối cùng
function lastevenNums(){
    let evenNums = numArray.filter((value) => {
        return value % 2 == 0
    })
    
    let lastEven;
  if (evenNums.length > 0) {
    lastEven = evenNums.pop();
  } else {
    lastEven = -1;
  }
    document.getElementById("soChancuoicung").innerHTML = "👉 " + lastEven
}
//6. Đổi chỗ
function swapPosition(){
    let position1 = +document.getElementById("position-1").value
    let position2 = +document.getElementById("position-2").value
    // Kiểm tra hợp lệ 2 vị trí
    if( Number.isInteger(position1) &&
    Number.isInteger(position2) &&
    position1 >= 0 &&
    position1 < numArray.length &&
    position2 >= 0 &&
    position2 < numArray.length){
        //Đổi giá trị của 2 vị trí trong mảng
        let temp = numArray[position1];
        numArray[position1] = numArray[position2];
        numArray[position2] = temp;
        document.getElementById("daDoi").innerHTML = "👉 " + numArray
    } else{
        document.getElementById("daDoi").innerHTML = "Vui lòng nhập vị trí hợp lệ"
    }
}
// 7. Sắp xếp tăng dần
function sortUp(){
    let numSortup = numArray.sort(function (a, b){
        return a - b
    });

document.getElementById("sapxepTangdan").innerHTML = "👉 " + numSortup
}
// 8. Tìm số nguyên tố đầu tiên
function isPrime(n){
    if(n < 2){
        return false
    }
    if(n === 2){
        return true
    }
    if(n % 2 === 0){
        return false
    }
    for(let i = 2; i <= Math.sqrt; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
function findfirstPrime(){
    let findfirstPrime = numArray.find(isPrime)
    document.getElementById("soNguyento").innerHTML = "👉 " + findfirstPrime
}
//9. Đếm số nguyên
let integerArray = []
function addInteger(){
    let addNums = +document.getElementById("nhapSo").value
    if(!isNaN(addNums)){
        integerArray.push(addNums)
    }
    document.getElementById("soThem").innerHTML = "Số được thêm 👉 " + integerArray
}
function isInteger(num){
    return Number.isInteger(num)
}
function findInteger(){
    let countInteger = 0
    for(let i = 0; i < integerArray.length; i++){
        if(isInteger(integerArray[i])){
            countInteger++
        }
    }
    document.getElementById("soNguyen").innerHTML = "👉 " + countInteger
}
//10. So sánh số lượng số âm và số dương
let negativeNum = 0
let positiveNum = 0
function compareNum(){
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            positiveNum++
        } else if(numArray[i] < 0){
            negativeNum++
        }
    }
    if(negativeNum < positiveNum){
        document.getElementById("ketQua").innerHTML = "Số dương > Số âm"
    } else if(negativeNum > positiveNum){
        document.getElementById("ketQua").innerHTML = "Số dương < Số âm"
    } else{
        document.getElementById("ketQua").innerHTML = "Số dương = Số âm"
    }

}

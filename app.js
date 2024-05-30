//Task 1
for(i=1 ; i<=100 ; i++){
    console.log(i);
}

//Task 2
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5];
sumArray(arr);

//Task 3
function isEven(int) {
    if (int % 2 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(isEven(1000));

//Task 5
let str = "Hello World";

let reverse = str.split('').reverse().join('');
console.log(reverse);

//Task 7

function add(){
var one =document.getElementById(num1).value;
var two = document.getElementById('num2').value;
 var res = Number (one) + Number (two); 
 document.getElementById('ans').innerHTML = res;
}
function subtract(){
 var one = document.getElementById('num1').value;
 var two = document.getElementById('num2').value;
 var res = Number (one) - Number (two);
 document.getElementById('ans').innerHTML = res;
}
function multiply(){
    var one = document.getElementById('num1').value;
    var two = document.getElementById('num2').value;
    var res = Number (one) * Number (two);
    document.getElementById('ans').innerHTML = res;
   }
   function divide(){
    var one = document.getElementById('num1').value;
    var two = document.getElementById('num2').value;
    var res = Number (one) / Number (two);
    document.getElementById('ans').innerHTML = res;
   }


   //Task 8
   document.getElementById("minusBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
   }

   document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
   }

   document.getElementById("plusBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
   }
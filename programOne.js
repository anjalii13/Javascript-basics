// Assignment-1
function add(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result= n1 + n2
document.getElementById("result").innerHTML= "Addition is : " +result
}
function sub(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result= n1 - n2
document.getElementById("result").innerHTML= "Substraction is : " +result
}
function mul(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result= n1 * n2
document.getElementById("result").innerHTML= "Multiplication is : " +result

}
function div(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result= n1 / n2
document.getElementById("result").innerHTML= "Division is : " +result
}
function mod(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result= n1 % n2
document.getElementById("result").innerHTML= "Modulus is : " +result
}
// Assignment-2
function compare(){
let n1=Number(document.getElementById("num1").value)
let n2=Number(document.getElementById("num2").value)
let result = ""

if(n1>n2){
  result= " First number is greater"
}
if(n1<n2){
  result= " Second number is greater"
}
if(n1==n2){
   result = "Both numbers are same"
}
document.getElementById("result").innerHTML= "Modulus is : " +result

}
// Assigment-3
let math= Number(prompt("enter math score"))
let sci= Number(prompt("enter science score"))
if((math>=90) && (sci>=85)){
console.log("Scholorship Eligibility:Eligible " )

}
else{
console.log("Scholorship Eligibility:Not Eligible " )

}
// Assignment-4
let x=10
x=x+5
console.log("After adding 5",x)
x=x*3
console.log("After multiplying by 3 ",x)
x=x-10
console.log("After subtraccting 10",x)
x=x/2
console.log("After dividing by 2 ",x)
x=x%3
console.log("Modulus with 3",x)



// Assignment-6

let length=Number(prompt("Enter length:"))
let width=Number(prompt("Enter width:"))
let perimeter=2*(length + width);
let area=length *width;
console.log("Perimeter:",perimeter)
console.log("Area",area)
console.log("Is perimeter greater than area?",perimeter>area)

// Assignment-7

let age= prompt("Enter age:")
let isCitizen=prompt("Are you a citizen (true/false)?")==="true"
let canVote=(age>=18)&& isCitizen
console.log("Eligible to vote:",canVote)

// Assignment-9
let num=Number(prompt("Enter number:"))

if(num%2===0){
   console.log("Number is even.")

}else{
   console.log("Number is odd")
}
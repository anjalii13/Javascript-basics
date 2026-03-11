// Assignment-1
let num1=Number(prompt("Enter a number"))
if(num1>0){
    console.log("Number is positive")
}else if(num1<0){
    console.log("Number is negative")
}else if(num1 ==0) {
    console.log("Number is 0")
}else{
    console.log("Invalid Number ")
}
// Assignment-2
for(let i=0;i<=10;i++){
    console.log("Table of number is "+num1*i)
}
// Assignment-3
let systemGenerateNumber= Math.floor(Math.random()*10)+1;
console.log(systemGenerateNumber)
do{
    userNumber = prompt("Enter a Number")
    console.log(userNumber) 
    if(userNumber<systemGenerateNumber){
        console.log("Too low!! Try again")
    }else if(   userNumber>systemGenerateNumber){
        console.log("Too High!!Try again")}
}
while(){

}
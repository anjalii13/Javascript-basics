let inputString = document.getElementById("stringInput").value;

function toUppercase(){
    let inputString = document.getElementById("stringInput").value;
    let result = inputString.toUpperCase();
    document.getElementById("result").value = result;
}
function toLowercase(){
    let inputString = document.getElementById("stringInput").value;
    let result = inputString.toLowerCase();
    document.getElementById("result").value = result;
}
function reverseString(){
    let inputString = document.getElementById("stringInput").value;
    let result = inputString.split("").reverse().join("");
    document.getElementById("result").value = result;
}
function countVowels(){
    let inputString = document.getElementById("stringInput").value;
    let count = 0;
    for(let i=0; i<inputString.length; i++){
        if("aeiouAEIOU".includes(inputString[i])){
            count++;
        }
    }
    document.getElementById("result").value = "Number of vowels: " + count;
}
function countWords(){
    let inputString = document.getElementById("stringInput").value;
    let words = inputString.trim().split(/\s+/);
    document.getElementById("result").value = "Number of words: " + words.length;
}
function palindromeCheck(){
    let inputString = document.getElementById("stringInput").value;
    let cleanedString = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedString = cleanedString.split("").reverse().join("");
    if(cleanedString === reversedString){
        document.getElementById("result").value = "The string is a palindrome.";
    } else {
        document.getElementById("result").value = "The string is not a palindrome.";
    }}
// filteritems=['board','chair','table','lamp','sofa','shelf','desk','stool','couch','cabinet','Bench','Bed','SofA']

// let startswithB=filteritems.filter(n =>n.toLowerCase().startsWith('b'))
// let includesA=filteritems.filter(n=>n.toLowerCase().includes('a'))


// console.log(startswithB)
// console.log(includesA)


filterNumber=[]
function addNumber(){
    let number=document.getElementById("inputNumber").value
    filterNumber.push(parseInt(number))
    console.log(filterNumber)
      document.getElementById("result").innerHTML = filterNumber;

}
function evenNum(){
 let evenNumber=filterNumber.filter(n=>n%2==0)
 console.log(evenNumber)
 document.getElementById("result").innerHTML="Even numbers are :" + evenNumber
}

function oddNum(){
    let oddNumber=filterNumber.filter(n=>n%2!=0)
    console.log(oddNumber)
    document.getElementById("result").innerHTML="Odd numbers are :" + oddNumber
}
function clearAll(){
    filterNumber=[]
    console.log(filterNumber)
      document.getElementById("inputNumber").value = "";
       document.getElementById("result").textContent = "";
}
inputAssignMarksELMNT=document.querySelector("#inputAssignMarks");
function addMarks(){
    inputMarks=inputAssignMarksELMNT.value;
    marks=[]
    inputNum=parseInt(inputMarks);
    if(isNaN(inputNum)){
        alert("Please enter a valid number");
        
    }
    else{
        marks.push(inputNum);
        console.log(marks);
    }
inputAssignMarksELMNT.value="";
}
function reset(){
    marks=[];
}
function calculate(){
    
}
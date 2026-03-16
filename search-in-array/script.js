FoodArrayy=["Pizza","Burger","Pasta","Sushi","Tacos"];

function searchFood(){
    const foodInput=document.getElementById("inputFood").value;
    if(FoodArrayy.includes(foodInput)){
        document.getElementById("result").innerHTML="Food found: " + foodInput;
    } else {
        document.getElementById("result").innerHTML="Food not found: " + foodInput;
    }
}



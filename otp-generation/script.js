
// const inputs = document.querySelectorAll(".otp-input");

// inputs.forEach((input, index) => {

//     input.addEventListener("input", () => {
//         if (input.value.length === 1 && index < inputs.length - 1) {
//             inputs[index + 1].focus();
//         }
//     });

//     input.addEventListener("keydown", (e) => {
//         if (e.key === "Backspace" && input.value === "" && index > 0) {
//             inputs[index - 1].focus();
//         }
//     });

// });


function generateOTP() {
    otp=1000+Math.random()*9000+1
    otp=String(Math.floor(otp))
    alert("Your OTP is: " + otp);
}

function verifyOTP() {
input1=document.getElementById("otp1")
input2=document.getElementById("otp2")
input3=document.getElementById("otp3")
input4=document.getElementById("otp4")

userOTP=input1.value+input2.value+input3.value+input4.value

    if (userOTP === otp) {
        alert("OTP verified successfully!");
    } else {
        alert("Invalid OTP. Please try again.");
    }



input1=document.getElementById("otp1").value=''
input2=document.getElementById("otp2").value=''
input3=document.getElementById("otp3").value=''
input4=document.getElementById("otp4").value=''
}

function moveToNext(nextFieldId) {
    document.getElementById(nextFieldId).focus();
}
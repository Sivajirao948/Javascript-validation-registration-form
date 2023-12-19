// trim
// charAT
// slice
// forEach


const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');


// error msg function

function errorMsg(input,msg){
    const form_control = input.parentElement;
    // console.log(form_control);
    form_control.className = "form-control error";
    const small = form_control.querySelector("small");
    //console.log(small);
    small.innerText = msg;
}

// success function
function successMsg(input){
    const form_control = input.parentElement;
    form_control.className = "Fform-control success";
}

// Email function 

function emailCheck(input){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(input.value.trim())){
        successMsg(input);
    }
    else{
        errorMsg(input, "email is not valid");
    }
}

// function to validate all fields

function validateAll(inputArr){
    inputArr.forEach(function (input){
        // console.log(input);
        // error msg for all input field
        if (input.value.trim() === ""){
            errorMsg(input, `${upperCaseLetter(input)}is required`);
        }
        else{
            successMsg(input);
        }
    });
}

function upperCaseLetter(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// check length

function checkLength(input, min, max){
    if (input.value.length < min){
        errorMsg(
            input,
            `${upperCaseLetter(input)}must be atleast $ {min}characters`
        );

    }
    else if (input.value.length > max){
        errorMsg(
            input,
            `${upperCaseLetter(input)} must be less then ${max}characters`
        );
    }
    else {
        successMsg(input);
    }
}


// password match

function checkPassword(password1,password2){
    if (password1.value !== password2.value){
        errorMsg(password2, "password do no match")
    }
}

 function sss(){
    alert("Registration form successfully")
 }


// event listener

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // function to validate all fields
    validateAll([username, email, password, cpassword]);
    checkLength(username, 4, 20);
    checkLength(password, 4, 20);
    emailCheck(email);
    checkPassword(password, cpassword);
});
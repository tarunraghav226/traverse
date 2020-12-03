//selectors
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass1 = document.getElementById("password")
const pass2 = document.getElementById("cnfrm-pass");


//error div selectors
const userNameError = document.getElementsByClassName("username-err")[0];
const emailError = document.getElementsByClassName("email-err")[0];
const pass1Error = document.getElementsByClassName("pass-err")[0];
const pass2Error = document.getElementsByClassName("cnfrm-pass-err")[0];

const button = document.getElementsByTagName("button")[0];

button.onclick = function(e){
    e.preventDefault();

    validateUserName(username,userNameError);
    validateEmail(email, emailError);
    validatePassword(pass1, pass1Error);
    checkPassword(pass1, pass2, pass1Error);
}

function validateUserName(username, err){
    if(username.value == ""){
        err.innerText = "Enter Usename";

        username
            .nextElementSibling
                .style.display = "inline";
        username
            .nextElementSibling
                .style.color = "red";

        username
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
    }
    else{
        err.innerText = "";

        username
            .nextElementSibling
                .style.display = "none";

        username
            .nextElementSibling
                .nextElementSibling
                    .style.display = "inline";
        username
            .nextElementSibling
                .nextElementSibling
                    .style.color = "green";
    }
}

function validateEmail(email, err){
    if(email.value == ""){
        err.innerText = "Enter Email";

        email
            .nextElementSibling
                .style.display = "inline";

        email
            .nextElementSibling
                .style.color = "red";

        email
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
    }
    else if((new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")).test(email.value)){
        err.innerText = "";

        email
            .nextElementSibling
                .style.display = "none";

        email
            .nextElementSibling
                .nextElementSibling
                    .style.display = "inline";

        email
            .nextElementSibling
                .nextElementSibling
                    .style.color = "green";
    }
    else{
        err.innerText = "Email must be of the format xyz@abc.pqr";

        email
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";

        email
            .nextElementSibling
                .style.display = "inline";

        email
            .nextElementSibling
                .style.color = "red";
    }
}

function checkPassword(pass1, pass2, err){
    if(pass1.value != pass2.value){
        err.innerText = "Password and confirm password must be same.";

        pass1
            .nextElementSibling
                .style.display = "inline";
        
        pass1
            .nextElementSibling
                .style.color = "red";

        pass2
            .nextElementSibling
                .style.display = "inline";
        
        pass2
            .nextElementSibling
                .style.color = "red";

        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
        
        pass2
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
    }
    else{
        err.innerText = "";

        pass1
            .nextElementSibling
                .style.display = "none";
        
        pass2
            .nextElementSibling
                .style.display = "none";

        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.display = "inline";
        
        pass2
            .nextElementSibling
                .nextElementSibling
                    .style.display = "inline";

        pass1   
            .nextElementSibling
                .nextElementSibling
                    .style.color = "green";

        pass2   
            .nextElementSibling
                .nextElementSibling
                    .style.color = "green";

    }
}

function validatePassword(pass1, err){
    if(pass1.value == ""){
        err.innerText = "Password must not be empty."
        
        pass1
            .nextElementSibling
                .style.display = "inline";
        
        pass1
            .nextElementSibling
                .style.color = "red";

        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
    }
    else if((new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/gm)).test(pass1.value)){
        err.innerText = "";

        pass1
            .nextElementSibling
                .style.display = "none";

        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.display = "inline";
        
        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.color = "green";
    }
    else{
        err.innerText = "Password must contain 1 uppercase character, 1 lowercase character, 1 number and 1 special symbol. Password length must be greater than 8 and less than 32."
        
        pass1
            .nextElementSibling
                .style.display = "inline";
        
        pass1
            .nextElementSibling
                .style.color = "red";

        pass1
            .nextElementSibling
                .nextElementSibling
                    .style.display = "none";
    }
}

let generateBtn = document.getElementById("generate-btn");

function generate(){
    let password = document.getElementById("password");
    let length = document.getElementById("length").value;
    let lower = document.getElementById("lowercase");
    let upper = document.getElementById("uppercase");
    let number = document.getElementById("numbers");
    let symbol = document.getElementById("symbols");
    let passwordText = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    if(lower.checked){
        characters = characters.replace("abcdefghijklmnopqrstuvwxyz", "");
    }
    if(upper.checked){
        characters = characters.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    }
    if(number.checked){
        characters = characters.replace("0123456789", "");
    }
    if(symbol.checked){
        characters = characters.replace("!@#$%^&*()_+", "");
    }

    for(let i = 0; i < length; i++){
        passwordText += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    password.value = passwordText;

}
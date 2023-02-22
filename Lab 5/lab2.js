"use strict";
var form = document.forms.form;
var output = document.getElementById("output");

function form_validate() {
    var input__name = form.username__field;
    var input__password = form.userpassword__field;
    var usename__red_bg = document.querySelector("#usename_field");
    var password__red_bg = document.querySelector("#password_field");

    if (input__name.value === "") {
        input__name.focus();
        usename__red_bg.classList.add("login__txt_error");
        return false;
    }
    if (input__password.value === "") {
        input__password.focus();
        input__password.type = "password";
        password__red_bg.classList.add("login__txt_error");
        return false;
    }
    output.style.display = "block";
    output.classList.add("output__text");
    document.getElementById("useName").innerHTML = input__name.value;
    document.getElementById("passWord").innerHTML = input__password.value;
    return false;

}
form.onsubmit = form_validate;

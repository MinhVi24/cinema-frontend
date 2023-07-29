const submit = document.getElementById("submit");
const password = document.getElementById("password");
const email = document.getElementById("email");

const togglePassword = document.querySelector('#togglePassword');
const lookPassword = document.querySelector('#fa-solid fa-eye-slash');


submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Đã đăng nhập thành công');
        window.location.href = "homelogin.html";
    } else {
        return;
    }
});

function validateForm() {
    let check = [];
    let flag = true;
    check.push(checkemail(email));
    check.push(checkpassword(password));
    check.forEach(element => {
        console.log(element);
        if (element == false) {
            flag = false;
        }
    });
    return flag;
}

function checkemail(object) {
 
    let value = object.value;
    let id = object.id + "E";
    
    if (value === "intern@gmail.com") {
        document.getElementById(id).style.display = "none";
        return true;
    }
    
    document.getElementById(id).style.display = "block";
    return false;
}

function checkpassword(object) {
 
    let value = object.value;
    let id = object.id + "E";
    
    if (value === "@1helloworlD") {
        document.getElementById(id).style.display = "none";
        return true;
    }
    
    document.getElementById(id).style.display = "block";
    return false;
}




const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
});
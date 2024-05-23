let passwordBox = document.getElementById('password');
let length = 12;

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let number = '0123456789';
let symbol = '!@#$%^&*()_+-=[]{}|;:<>,./?';
let allChars = uppercase + lowercase + number + symbol;

function generatePassword() {
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    // Swal.fire({
    //     icon: "success",
    //     title: "Copied Password",
    //     showConfirmButton: false,
    //     timer: 1000
    //   });
    let showMessage = document.getElementById('showMessage');
    showMessage.innerText = 'Copied Password';
    setTimeout (() => {
    showMessage.innerText = '';
    },1000);
}

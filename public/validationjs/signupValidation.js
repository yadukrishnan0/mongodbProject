

const email=document.getElementById('email')
const password=document.getElementById('password')


const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
const checkemail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const labemail=document.querySelector(".labemail")
const labpass=document.querySelector(".labpassword")


password.onblur = () => {
    if (checkPass.test(password.value)) {
        labpass.innerHTML = 'password';
        labpass.classList.remove('redlabel');
    } else {
        labpass.innerHTML = 'Invalid password format';
        labpass.classList.add('redlabel');
    }
};
email.onblur = () => {
    if (checkemail.test(email.value)) {
        labemail.innerHTML = 'Email';
        labemail.classList.remove('redlabel');
    } else {
        labemail.innerHTML = 'Invalid email ';
        labemail.classList.add('redlabel');
    }
};
const formEl = document.querySelector(".login-form");

const submitForm = (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
   
    
    if (!email.value || !password.value) {
        return alert("Всі поля повинні бути заповнені!");
    } else {
        const info = {
        email: email.value,
        password: password.value,
    };
        console.log(info);
        event.currentTarget.reset();
    }
} 

formEl.addEventListener("submit", submitForm);
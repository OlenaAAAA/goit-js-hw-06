const inputEl = document.querySelector("#validation-input");


const changeBorderColorIfValid = (event) => {


    if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');

    }
};

inputEl.addEventListener("blur", changeBorderColorIfValid);







const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const spanText = (event) => {
    if (event.currentTarget.value !== "") {
        spanEl.textContent = event.currentTarget.value;
    } else {
        spanEl.textContent = "Anonymous";
    }
}

inputEl.addEventListener("input", spanText);
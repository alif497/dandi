const toggle= document.querySelector("#theme-toggle");

toggle.addEventListener("click",() => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        toggle.textContent = "Mode Terang"
    } else {
        toggle.textContent = "Mode Terang"
    }
});
let inputText1 = document.getElementById("input-text1");
let placeholder1 = document.getElementById("placeholder1");
inputText1.addEventListener('input', () => {
    if (inputText1.value.length === 0)
        placeholder1.style.top = "9px";
    else
        placeholder1.style.top = 0;
});
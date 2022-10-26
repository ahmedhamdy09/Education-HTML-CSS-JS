let subEl = document.getElementById("sub-btn")
let inputEl = document.getElementById("input-el")
let msgElement =document.getElementById("Msg");

subEl.addEventListener("click", function() {
//    let subBtn = subEl.value
//    console.log(subBtn)
let inputValue = inputEl.value;
    console.log(inputValue);

    //put input value into p
    msgElement.innerHTML = inputValue;

    // empty input Value
    inputEl.value = "";

})
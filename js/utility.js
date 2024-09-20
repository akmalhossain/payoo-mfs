// input field value return
function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const valueToNum = parseFloat(inputValue);
    return valueToNum;
}
// text field value return
function getInnerTextValueById(id){
    const innerTextValue = document.getElementById(id).innerText;
    const valueToNum = parseFloat(innerTextValue);
    return valueToNum;
}
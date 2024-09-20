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

// toggle
function showSectionById(id){
    // hide all sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
// console.log('connected');
// Show hide sections
function showHideSectionById(id){
document.getElementById('add-money-form').classList.add('hidden');
document.getElementById('cash-out-form').classList.add('hidden');
document.getElementById('latest-payment').classList.add('hidden');
document.getElementById('transfer-money-form').classList.add('hidden');
document.getElementById('get-bonus-form').classList.add('hidden');
document.getElementById('pay-bills-form').classList.add('hidden');

document.getElementById(id).classList.remove('hidden');

}

// function for get vales from input fields 
function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// function for get string value from input fields
function getInputStrValueById(id){
    const inputStrValue = document.getElementById(id).value;
    return inputStrValue;
}
// function for get vales from text fields
function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText)
    return textValue
}

// function for change current balance
function changeCurrentBalance(id){
    document.getElementById(id).innerText = newBalance.toFixed(1);
}

function closeButton(id){
    document.getElementById(id).style.display = 'none';
}
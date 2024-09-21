// console.log('add money connected')
let newBalance;
document.getElementById('btn-calculate-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const amountToAdd = getInputValueById('amount-to-add');
        const pinNumber = getInputValueById('add-money-pin-no');
        const currentBalance = getTextFieldValueById('current-balance');
        if(pinNumber === 123){
            newBalance = currentBalance + amountToAdd;
            console.log(newBalance);
            changeCurrentBalance('current-balance');
            
        }
        else{
            alert('Please check Details')
        }
    })
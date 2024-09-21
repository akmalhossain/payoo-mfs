// console.log('cash out connected')
document.getElementById('btn-calculate-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        const withdrawAmount = getInputValueById('withdraw-amount');
        const pinNumber = getInputValueById('cash-out-pin-no');
        const currentBalance = getTextFieldValueById('current-balance');
        if(pinNumber === 123){
            newBalance = currentBalance - withdrawAmount;
            console.log(withdrawAmount);
            console.log(currentBalance);
            console.log(newBalance);
            changeCurrentBalance('current-balance');
        }
        else{
            alert('please provide correct details!!')
        }
    })
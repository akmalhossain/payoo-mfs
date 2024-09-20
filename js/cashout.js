document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getInputValueById('cash-out-amount');
    const pinNumber = getInputValueById('input-cash-out-pin');
    if(pinNumber === 123){
        const currentBalance = getInnerTextValueById('current-balance');
        newBalance = currentBalance- cashOutAmount;
        document.getElementById('current-balance').innerText = newBalance;
    }
})
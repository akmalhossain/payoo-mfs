// console.log('transfer connected')
document.getElementById('btn-claculate-transfer-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const transferMoneyAmount = getInputValueById('transfer-money-amount');
        const currentBalance = getTextFieldValueById('current-balance');
        if(getInputValueById('transfer-money-pin-no')===123){
            console.log('pin varified')
            const transferCharge = transferMoneyAmount*.005;
            // deduct transfer charge 5%
            newBalance = currentBalance - (transferMoneyAmount + transferCharge);
            changeCurrentBalance('current-balance');
        }
        else{
            alert('Please give right Information!!')
        }
    })
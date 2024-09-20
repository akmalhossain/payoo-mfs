
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addMoneyAmount = getInputValueById('add-money-amount');
        const pinNumber = getInputValueById('input-pin-number');

        // 
        if (pinNumber === 123) {
            const currentBalance = getInnerTextValueById('current-balance');
            const newBalance = currentBalance + addMoneyAmount;
            document.getElementById('current-balance').innerText = newBalance;
            return newBalance;
        }
        else {
            alert('Wrong pin number')
        }
    })

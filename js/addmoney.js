
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
            // add to transaction history
            const p = document.createElement('p');
            p.innerText = `Added: ${addMoneyAmount} tk. New Balance: ${newBalance}`;
            document.getElementById('transaction-container').appendChild(p);
            // return newBalance;
        }
        else {
            alert('Wrong pin number')
        }

    })

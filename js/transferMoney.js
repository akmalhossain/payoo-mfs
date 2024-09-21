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

            const div = document.createElement('div');
            div.setAttribute('id', 'closeSection');
            div.innerHTML = `
             <div class="flex justify-between items-center mt-4 bg-white px-4 py-3 rounded-2xl border-title2">
                        <div class="flex justify-center gap-2">
                            <img src="./image/addmoney.svg" alt="" class="bg-gray-200 rounded-full py-2 px-3">
                            <div>
                                <h4 class="text-title3 font-semibold text-lg">Money transfer</h4>
                                <p class="text-title3 text-[12px]">Transfer Amount:${transferMoneyAmount} Total Balance: ${newBalance}</p>
                                
                            </div>
                        </div>
                        <div onclick="closeButton('closeSection')" class="disappear"><img src="./image/3dots.svg" alt=""></div>
                    </div>
            `
            
            document.getElementById('cards').insertBefore(div, document.getElementById('card-1'));
        }
        else{
            alert('Please give right Information!!')
        }
    })
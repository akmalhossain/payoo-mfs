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
            const div = document.createElement('div');
            div.setAttribute('id', 'closeSection');
            div.innerHTML = `
             <div class="flex justify-between items-center mt-4 bg-white px-4 py-3 rounded-2xl border-title2">
                        <div class="flex justify-center gap-2">
                            <img src="./image/addmoney.svg" alt="" class="bg-gray-200 rounded-full py-2 px-3">
                            <div>
                                <h4 class="text-title3 font-semibold text-lg">Cash Out</h4>
                                <p class="text-title3 text-[12px]">Money added:${withdrawAmount} Total Balance: ${newBalance}</p>
                                
                            </div>
                        </div>
                        <div onclick="closeButton('closeSection')" class="disappear"><img src="./image/3dots.svg" alt=""></div>
                    </div>
            `
            
            document.getElementById('cards').insertBefore(div, document.getElementById('card-1'));

        
        }
        else{
            alert('please provide correct details!!')
        }
    })
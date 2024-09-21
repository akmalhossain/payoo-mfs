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

            // create new transaction history and insert in to transaction list
            const div = document.createElement('div');
            div.setAttribute('id', 'closeSection');
            div.innerHTML = `
            <div class="flex justify-between items-center mt-4 bg-white px-4 py-3 rounded-2xl border-title2">
                        <div class="flex justify-center gap-2">
                            <img src="./image/addmoney.svg" alt="" class="bg-gray-200 rounded-full py-2 px-3">
                            <div>
                                <h4 class="text-title3 font-semibold text-lg">Add Money</h4>
                                <p class="text-title3 text-[12px]">Money added:${amountToAdd} Total Balance: ${newBalance}</p>
                                
                            </div>
                        </div>
                        <div onclick="closeButton('closeSection')" class="disappear"><img src="./image/3dots.svg" alt=""></div>
                    </div>
            `
            console.log(div);
            // inserting element in the last position.
            // document.getElementById('cards').appendChild(div);

            // inserting element in the first position.
            document.getElementById('cards').insertBefore(div, document.getElementById('card-1'))
        }
        else{
            alert('Please check Details')
        }
    })
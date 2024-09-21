// console.log('get Bonus')
document.getElementById('btn-calculate-get-bonus')
    .addEventListener('click', function(event){
        event.preventDefault();
        const couponCode = getInputStrValueById('coupon-code');
        console.log(couponCode);
        const currentBalance  = (getTextFieldValueById('current-balance'));
        if(couponCode === ('NEW100')){
            newBalance = currentBalance + 100;
            changeCurrentBalance('current-balance');

            const div = document.createElement('div');
            div.setAttribute('id', 'closeSection');
            div.innerHTML = `
             <div class="flex justify-between items-center mt-4 bg-white px-4 py-3 rounded-2xl border-title2">
                        <div class="flex justify-center gap-2">
                            <img src="./image/addmoney.svg" alt="" class="bg-gray-200 rounded-full py-2 px-3">
                            <div>
                                <h4 class="text-title3 font-semibold text-lg">Coupon NEW100</h4>
                                <p class="text-title3 text-[12px]">Money added:100 Total Balance: ${newBalance}</p>
                                
                            </div>
                        </div>
                        <div onclick="closeButton('closeSection')" class="disappear"><img src="./image/3dots.svg" alt=""></div>
                    </div>
            `
            
            document.getElementById('cards').insertBefore(div, document.getElementById('card-1'));
        }
        else{
            alert('Wrong Coupon Code!!')
        }
    })
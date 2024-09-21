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
        }
        else{
            alert('Wrong Coupon Code!!')
        }
    })
// console.log('feature connected')
// hide all sections and show add money section
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        showHideSectionById('add-money-form');
    })

// hide all sections and show add cash out section
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    showHideSectionById('cash-out-form')
})

// hide all sections and show add transfer money section
document.getElementById('btn-transfer-money')
.addEventListener('click', function(event){
    showHideSectionById('transfer-money-form');
})
// hide all sections and show add get bonus section
document.getElementById('btn-get-bonus')
.addEventListener('click', function(){
    showHideSectionById('get-bonus-form')
})
// hide all sections and show add pay bills section
document.getElementById('btn-pay-bills')
.addEventListener('click', function(){
    showHideSectionById('pay-bills-form');
})
// hide all sections and show add latest payment section
document.getElementById('btn-transactions')
    .addEventListener('click', function(){
        showHideSectionById('latest-payment');
    })

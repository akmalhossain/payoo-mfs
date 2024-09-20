document.getElementById('show-add-money-form')
.addEventListener('click', function(event){
    showSectionById('add-money-form');
    // console.log('add');
})

document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(event){
        showSectionById('cash-out-form');
    })
document.getElementById('btn-transaction')
    .addEventListener('click', function(){
        showSectionById('transaction');
    })
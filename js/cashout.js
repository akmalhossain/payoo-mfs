document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getInputValueById('cash-out-amount');
    const pinNumber = getInputValueById('input-cash-out-pin');
    if(pinNumber === 123){
        const currentBalance = getInnerTextValueById('current-balance');
        newBalance = currentBalance- cashOutAmount;
        document.getElementById('current-balance').innerText = newBalance;
        //add 

        // add to transaction history 
        const div = document.createElement('div');
        div.classList.add('bg-gray-900');
        div.innerHTML=`
        <h4 class = "text-2xl font-bold">Cash Out</h4>
        <p> ${cashOutAmount} Money withdraw . nwe balance ${newBalance} </p>
        ` 
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('DGM')
    }
})
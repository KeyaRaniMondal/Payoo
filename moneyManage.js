// step1:
// Add event handelar to the add money button inside the Form
// prevent reloading

document.getElementById('btn-addMoney').addEventListener('click', function (event) {
    // Prevent reloading
    event.preventDefault();

    // step2:
    // Get money to the aacount balance  and pin number after adding
    const addMoney = document.getElementById('input-addMoney').value
    console.log(addMoney)
    const pinNum = document.getElementById('input-pin').value
    console.log(pinNum)

    // step3:
    // verify pin Number
    if (pinNum === '1100') {
        console.log('Adding money to your Account');
        const Account_balance = document.getElementById('balance').innerText
        console.log(Account_balance)
            // step4:
    // get the Corrent balance
        let newBalance=parseFloat(addMoney)+parseFloat(Account_balance)
        console.log(newBalance)

        // step5:
        // update the balance in UI or DOM
        document.getElementById('balance').innerText=newBalance
    }
    else
        alert('failed to add money')


})


// Cash OUT


document.getElementById('btn-reduceMoney').addEventListener('click', function (event) {
    // Prevent reloading
    event.preventDefault();

    // step2:
    // Get money to the aacount balance  and pin number after adding
    const outMoney = document.getElementById('input-cashOut').value
    console.log(outMoney)
    const pin_num = document.getElementById('output-pin').value
    console.log(pin_num)

    // step3:
    // verify pin Number
    if (pin_num === '22**') {
        console.log('coash out money from your Account');
        const Current_balance = document.getElementById('balance').innerText
        console.log(Current_balance)
            // step4:
    // get the Corrent balance
        let new_balance=parseFloat(Current_balance)-parseFloat(outMoney)
        console.log(new_balance)

        // step5:
        // update the balance in UI or DOM
        document.getElementById('balance').innerText=new_balance
    }
    else
        alert('failed to cash out')


})
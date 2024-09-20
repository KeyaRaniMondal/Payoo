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
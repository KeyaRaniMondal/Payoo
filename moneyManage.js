// step1:
// Add event handelar to the add money button inside the Form
// prevent reloading

document.getElementById('btn-addMoney').addEventListener('click',function(event){
    // Prevent reloading
    event.preventDefault();

    // step2:
    // Get money to the aacount balance after adding
    const addMoney=document.getElementById('input-addMoney').value
    console.log(addMoney)
    // const pinNum=document.getElementById('input-pin').value
    // console.log(pinNum)
})
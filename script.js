// step1:
// set Event handeler
document.getElementById('btn-login').addEventListener('click', function (event) {

    // prevent default behavior(Prevent reloading bowser)
    event.preventDefault();
    console.log("login button clicked")

    // step3:
    // get the phone Number
    const phone=document.getElementById('phone-number').value
    console.log(phone)
})
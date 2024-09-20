// step1:
// set Event handeler
// document.getElementById('btn-login').addEventListener('click', function (event) {

    // prevent default behavior(Prevent reloading bowser)
    // event.preventDefault();
    // console.log("login button clicked")

    // step3:
    // get the phone Number
//     const phone=document.getElementById('phone-number').value
//     const pin=document.getElementById('pin-num').value
//     console.log(phone,pin)
// })


document.getElementById('btn-login').addEventListener('click',function(event){
event.preventDefault();
const phonehonenum=document.getElementById('phone-number').value
const pinnum=document.getElementById('pin-num').value

// wrong way to validate
if(phonehonenum==='5' && pinnum==='..2*'){
    console.log('login successful');
    window.location.href='./homePage.html';
}
else
alert('check your number or pin')
})

const btn = showTicket('btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8');
function showTicket(id1, id2, id3, id4, id5, id6, id7, id8) {
    let element1 = document.getElementById(id1);
    element1.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element2 = document.getElementById(id2);
    element2.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element3 = document.getElementById(id3);
    element3.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element4 = document.getElementById(id4);
    element4.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element5 = document.getElementById(id5);
    element5.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element6 = document.getElementById(id6);
    element6.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element7 = document.getElementById(id7);
    element7.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
    let element8 = document.getElementById(id8);
    element8.addEventListener('click', function () {
        availableTicket();
        disableButtons()
        updateClickCount()
        getTotal();
    })
}






// info form area btn disable
const input1 = document.getElementById('name');
const input2 = document.getElementById('phone');
const myButton = document.getElementById('next');
input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);
function checkInputs() {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();


    if (value1 !== '' && value2 !== '') {
        myButton.removeAttribute('disabled');
    } else {
        myButton.setAttribute('disabled', 'disabled');
    }
}


// modal
function modal() {
    let modal = document.getElementById('my-modal');
    modal.classList.remove('hidden');
    let btn = document.getElementById('modal-btn');
    btn.removeAttribute('disabled');
}
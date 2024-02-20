// ticketDetail showing function
const tickets = ticketDetail('btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8');
function ticketDetail(id1, id2, id3, id4, id5, id6, id7, id8) {
    let element1 = document.getElementById(id1);
    element1.addEventListener('click', function () {
        let ticket1 = document.getElementById('t-details-1')
        ticket1.classList.remove('hidden');
    })
    let element2 = document.getElementById(id2);
    element2.addEventListener('click', function () {
        let ticket2 = document.getElementById('t-details-2')
        ticket2.classList.remove('hidden');
    })
    let element3 = document.getElementById(id3);
    element3.addEventListener('click', function () {
        let ticket3 = document.getElementById('t-details-3')
        ticket3.classList.remove('hidden');
    })
    let element4 = document.getElementById(id4);
    element4.addEventListener('click', function () {
        let ticket4 = document.getElementById('t-details-4')
        ticket4.classList.remove('hidden');
    })
    let element5 = document.getElementById(id5);
    element5.addEventListener('click', function () {
        let ticket5 = document.getElementById('t-details-5')
        ticket5.classList.remove('hidden');
    })
    let element6 = document.getElementById(id6);
    element6.addEventListener('click', function () {
        let ticket6 = document.getElementById('t-details-6')
        ticket6.classList.remove('hidden');
    })
    let element7 = document.getElementById(id7);
    element7.addEventListener('click', function () {
        let ticket7 = document.getElementById('t-details-7')
        ticket7.classList.remove('hidden');
    })
    let element8 = document.getElementById(id8);
    element8.addEventListener('click', function () {
        let ticket8 = document.getElementById('t-details-8')
        ticket8.classList.remove('hidden');
    })
}

// ticket quantity
function availableTicket() {
    const element = document.getElementById('available');
    let elementNum = parseInt(element.innerText);

    if (elementNum > 0) {
        elementNum--;
        element.innerText = elementNum;
    }
    return elementNum;
}

// seat counter
let clickCounter = 0;
function updateClickCount() {
    clickCounter++;
    document.getElementById('total').textContent = clickCounter;
    if (clickCounter == 4) {
        alert('Four buttons have been clicked!');
    }
    return clickCounter;
}

// get total
function getTotal() {
    const total = document.getElementById('total').innerHTML;
    let totalSeat = parseInt(total);
    const totalBill = document.getElementById('total-bill').innerHTML;
    let totalSeatBill = parseInt(totalBill);
    if (totalSeat > 0) {
        let allTotal = totalSeatBill + 550;
        let result = document.getElementById('total-bill').innerHTML = allTotal;
        return result;
    }
}


// grand total
function grandTotal() {
    const firstCoupon = 'NEW15';
    const lastCoupon = 'Couple 20';
    const totalBill = document.getElementById('total-bill').innerHTML;
    let totalSeatBill = parseInt(totalBill);
    let allTotal = totalSeatBill;
    const total = document.getElementById('total').innerHTML;
    let totalSeat = parseInt(total);
    let coupon = document.getElementById('coupon').value;

    if (totalSeat === 4 && coupon === firstCoupon) {
        let discount = allTotal / 100 * 15;
        let grand = totalSeatBill - discount;
        let grandTotal = Math.round(grand)
        let result = document.getElementById('grand').innerHTML = grandTotal;
        return result;
    }
    if (totalSeat === 4 && coupon === lastCoupon) {
        let discount = allTotal / 100 * 20;
        let grand = totalSeatBill - discount;
        let result = document.getElementById('grand').innerHTML = grand;
        return result;
    }
}


// remove input
function couponInput(id) {
    const firstCoupon = 'NEW15';
    const lastCoupon = 'Couple 20';
    let coupon = document.getElementById('coupon').value;
    let inputBtn = document.getElementById(id);
    inputBtn.addEventListener('click', function () {
        if (coupon === firstCoupon && coupon === lastCoupon) {
            const inputField = document.getElementById('parent');
            inputField.classList.add('hidden');
        }
    })
}
let input = couponInput('coupon-btn');


// disable btn
function disableButtons() {
    let clickedButtons = document.querySelectorAll('button:disabled').length;

    if (clickedButtons == 3) {
        var buttons = document.querySelectorAll('button:not(:disabled)');
        buttons.forEach(function (button) {
            button.disabled = true;
        });
        var inputElement = document.getElementById('coupon-input');
        inputElement.style.display = "block";
    }
}


// Button color change and each disable
const buttons = buttonsFunction('btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8');
function buttonsFunction(id1, id2, id3, id4, id5, id6, id7, id8) {
    let myButton = document.getElementById(id1);
    myButton.addEventListener('click', function () {
        myButton.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton);
        // Check if the button has no color specified
        if (!myButton.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton.style.backgroundColor = '#1dd100';
            myButton.style.color = '#ffffff';
        }
    });
    let myButton2 = document.getElementById(id2);
    myButton2.addEventListener('click', function () {
        myButton2.classList.add('btn-success');
        myButton2.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton2);
        // Check if the button has no color specified
        if (!myButton2.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton2.style.backgroundColor = '#1dd100';
            myButton2.style.color = '#ffffff';
        }
    });
    let myButton3 = document.getElementById(id3);
    myButton3.addEventListener('click', function () {
        myButton3.classList.add('btn-success');
        myButton3.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton3);
        // Check if the button has no color specified
        if (!myButton3.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton3.style.backgroundColor = '#1dd100';
            myButton3.style.color = '#ffffff';
        }
    });
    let myButton4 = document.getElementById(id4);
    myButton4.addEventListener('click', function () {
        myButton4.classList.add('btn-success');
        myButton4.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton4);
        // Check if the button has no color specified
        if (!myButton4.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton4.style.backgroundColor = '#1dd100';
            myButton4.style.color = '#ffffff';
        }
    });
    let myButton5 = document.getElementById(id5);
    myButton5.addEventListener('click', function () {
        myButton5.classList.add('btn-success');
        myButton5.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton5);
        // Check if the button has no color specified
        if (!myButton5.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton5.style.backgroundColor = '#1dd100';
            myButton5.style.color = '#ffffff';
        }
    });
    let myButton6 = document.getElementById(id6);
    myButton6.addEventListener('click', function () {
        myButton6.classList.add('btn-success');
        myButton6.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton6);
        // Check if the button has no color specified
        if (!myButton6.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton6.style.backgroundColor = '#1dd100';
            myButton6.style.color = '#ffffff';
        }
    });
    let myButton7 = document.getElementById(id7);
    myButton7.addEventListener('click', function () {
        myButton7.classList.add('btn-success');
        myButton7.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton7);
        // Check if the button has no color specified
        if (!myButton7.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton7.style.backgroundColor = '#1dd100';
            myButton7.style.color = '#ffffff';
        }
    });
    let myButton8 = document.getElementById(id8);
    myButton8.addEventListener('click', function () {
        myButton8.classList.add('btn-success');
        myButton8.disabled = true;
        const buttonStyle = window.getComputedStyle(myButton8);
        // Check if the button has no color specified
        if (!myButton8.style.backgroundColor || buttonStyle.getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)' || buttonStyle.getPropertyValue('background-color') === 'transparent') {
            // If the button has no color, set its color to green
            myButton8.style.backgroundColor = '#1dd100';
            myButton8.style.color = '#ffffff';
        }
    });
}





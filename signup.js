document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.getElementsByName('payment');
    const cardDetails = document.getElementById('card-details');
    const upiDetails = document.getElementById('upi-details');

    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'card') {
                cardDetails.style.display = 'block';
                upiDetails.style.display = 'none';
            } else if (method.value === 'upi') {
                upiDetails.style.display = 'block';
                cardDetails.style.display = 'none';
            } else {
                cardDetails.style.display = 'none';
                upiDetails.style.display = 'none';
            }
        });
    });
});

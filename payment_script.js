document.addEventListener('DOMContentLoaded', () => {
    const paymentSelect = document.getElementById('paymentSelect');
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    paymentSelect.addEventListener('change', (e) => {
        if (e.target.value === 'card') {
            div1.style.display = 'block';
            div2.style.display = 'none';
        } else {
            div1.style.display = 'none';
            div2.style.display = 'block';
        }
    });
});

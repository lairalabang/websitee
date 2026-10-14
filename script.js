  const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to LUMA Fashion Store!');
            form.reset();
        });
    }

    // Interactive button hover logs / handlers
    const bagButtons = document.querySelectorAll('.product-card button');
    bagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Item added to your shopping bag.');
        });
    });

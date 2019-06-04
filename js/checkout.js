$(document).ready(function() {
    let parent = $('div.checkout-item');
    let data = getDB();
    let cart = data['cart'];
    let total = 0;
    if (cart !== null) {
        for (const [key, value] of Object.entries(cart)) {
            let template = `<p class="checkout-prompt" style="margin-bottom:0.5em">${key}<br>Quantity: ${value[1]}<br>${'$' + parseInt(value[0].replace('$', '')) * parseInt(value[1]) + ".00"}</p>`;
            parent.prepend(template.toString());
            total += parseInt(value[0].replace('$', '')) * parseInt(value[1])
        }
    }
    $('p.final-price').append('Total: $' + total + ".00");

    $('div.checkout-button').click(function() {
       $('div.hidden').show();
    });
});

function getDB() {
    return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
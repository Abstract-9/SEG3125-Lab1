$(document).ready(function() {

    let parent = $('div.menu');
    let data = getDB();
    let cart = data['cart'];
    if (cart !== null) {
        for (const [key, value] of Object.entries(cart)) {
            let template = `
            <div class="menu-item">
                <p class="food-text">
                ${key}
                <br>
                ${value[0]}
                </p>
            <p class="order-info">
                Quantity: ${value[1]}
            <br>
                Total Price: ${'$' + parseInt(value[0].replace('$', '')) * parseInt(value[1]) + ".00"}
            </p>
            <div class="add-button remove-button"><a href="#"><b>Remove From Cart</b></a></div>
            </div>
            `;

            parent.prepend(template.toString());
        }
    }

    parent.prepend(`
                    <div class="TitleofPage">
                        <b>
                            Shopping Cart
                        </b>
                    </div>`);

    $("div.remove-button").click(function(eventObj) {
        let target = eventObj.target;
        let item = $(target).parent().parent().parent().find('p.food-text').text();
        let name = item.trim().split('\n')[0];
        if (name){
            let data = getDB();
            delete data['cart'][name];
            setDB(data);
            location.reload()
        }
    })
});





function getDB() {
    return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
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
                <div>
                <p class="order-info">
                    Quantity:
                </p>
      
                <select class="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            <br>
            <p>
                Total Price: ${'$' + parseInt(value[0].replace('$', '')) * parseInt(value[1]) + ".00"}
            </p>
            <div class="add-button remove-button"><a href="#"><b>Remove From Cart</b></a></div>
            </div>
            `;

            parent.prepend(template.toString());
            $(parent.children()[0]).find('select').val(value[1]);
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
        let item = $(target).parent().parent().parent().parent().find('p.food-text').text();
        let name = item.trim().split('\n')[0];
        if (name){
            let data = getDB();
            delete data['cart'][name];
            setDB(data);
            location.reload();
        }
    });

    $("select.quantity").change(function(eventObj) {
        let name = $(eventObj.target).parent().parent().find('p.food-text').text().trim().split('\n')[0];
        let total = $(eventObj.target).parent().children()[3];
        if (name) {
            let data = getDB();
            data['cart'][name] = [data['cart'][name][0], $(eventObj.target).children('option:selected').val()];
            setDB(data);
            $(total).text("Total Price: $" + parseInt(data['cart'][name][0].replace('$', '')*parseInt(data['cart'][name][1])) + ".00");
        }
    })
});





function getDB() {
    return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
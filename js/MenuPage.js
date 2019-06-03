$(document).ready( function() {

    $('.add-button a').click(function(event) {
        let target = event.target;
        let parent = $(target).parent().parent().parent();
        let child = $(parent).find('.food-text');
        let quantity = $(target).parent().find('select').children('option:selected').val();
        let menuItem = child.text();

        let strang = menuItem.trim().split('\n');
        let name = strang[0];
        let price = strang[2].trim();


        let data = getDB();
        let cart = data['cart'];
        if (cart == null) cart = [];
        cart[name] = price;
        data['cart'] = cart;
        data['cart'] = quantity;
        setDB(data);
    }
    );
}
);

function getDB() {
    data = JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
    if (data != null) return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
    else return [];

}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
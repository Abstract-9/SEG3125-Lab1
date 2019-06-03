$(document).ready(function() {

    let parent = $('.checkout-item');
    let data = getDB();
    let total = 0;
    for (const [key, value] of Object.entries(data['cart'])){

    }
});



function getDB() {
    return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
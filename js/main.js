$(document).ready( function() {

    $('div#search-icon').click(function() {
        let content = $('#search').text();
        // Do some next level search ;)
        $(location).attr('href', 'restaurantList.html')
    });
});

function getDB() {
    return JSON.parse(localStorage.getItem('2148a562ad895344c8d2db6f6ac89f54'));
}

function setDB(data) {
    localStorage.setItem('2148a562ad895344c8d2db6f6ac89f54', JSON.stringify(data))
}
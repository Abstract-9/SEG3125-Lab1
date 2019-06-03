$(document).ready( function() {

    $('div#search-icon').click(function() {
        let content = $('#search').text();
        // Do some next level search ;)
        $(location).attr('href', 'restaurantList.html')
    })
});


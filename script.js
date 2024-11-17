$(document).ready(function() {
    $('nav ul li a').hover(function() {
        $(this).css('color', '#FFD700');
    }, function() {
        $(this).css('color', 'white');
    });
});

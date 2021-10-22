$('button').click(function(){
    $('#advice').text('select your favourite colour among the colours');
    $('#sel').text('your favourite colours in order');
    $('#img1').attr('src', 'Red.jpg');
    $('#img2').attr('src', 'Blue.jpg');
    $('#img3').attr('src', 'Yellow.jpg');
});

$('img').each(function(){
    $(this).attr('src', $(this).data('color') + 'jpg');

});

$('img').click(function (){
    $('ul').append('<li>' + $(this).data('color') + '</li>');
    $(this).hide();
});
// Choosing Grid Size
$('#sizePicker').on('submit', function(e) {
    const grid_height = $('#input_height').val();
    const grid_width = $('#input_width').val();
    e.preventDefault();
    makeGrid();

    function makeGrid() {
        $('#pixel_canvas').empty();
        for (let i = 0; i < grid_height; i++) {
            $('#pixel_canvas').append('<tr></tr>');
        }
        if (grid_height > 18) {
            alert('The maximum height is 18');
            $('#input_height').val('');
            $('#pixel_canvas').empty();
        }
        for (let j = 0; j < grid_width; j++) {
            $('tr').append('<td></td>');
        }
        if (grid_width > 60) {
            alert('The maximum width is 60');
            $('#input_width').val('');
            $('#pixel_canvas').empty();
        }
    }
})

//Design Canvas
let clicked;

$('table').on('click', 'td', function() {
    $(this).css('backgroundColor', $('#colorPicker').val());
    clicked = true;
});

$('table').on('dblclick', 'td', function() {
    clicked = false;
});

$('table').on('mouseover', 'td', function() {
    if (clicked) {
        $(this).css('backgroundColor', $('#colorPicker').val());
    }
});


//Refresh
$('#refresh_grid').click(function() {
    $('table td').css('backgroundColor', "");
});

//Delete
$('#delete_grid').click(function() {
    $('table').empty();
    $('#input_height').val('');
    $('#input_width').val('');
});


//Refresh
$('#refresh_grid').click(function() {
  $('table td').css('backgroundColor', "");
});

//Delete
$('#delete_grid').click(function() {
  $('table').empty();
  $('#input_height').val('');
  $('#input_width').val('');
});

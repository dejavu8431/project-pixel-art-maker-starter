
// Select color input
// Select size input
var height, width, color

$('#sizePicker').submit(function (event){
    event.preventDefault();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();

// When size is submitted by the user, call makeGrid()

    makeGrid(height, width);
    console.log("height is: " + height + " & width is: " + width);
});


function makeGrid(x, y) {
    $('tr').remove();

    // Your code goes here!
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + 1 + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('table' + 1).append('<td></td>');
        }
    } 

    // add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } 
        else 
        {
            $(this).attr('style', 'background-color' + color);
        }
    }};




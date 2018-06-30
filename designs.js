// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



'use strict';

// Defining function used to make grid
function makeGrid() {
  // Removing previous grid if it exists
  $('tr').remove();
  // Setting variables for width and height
  const canvasWidth = $('#input_width').val();
  const canvasHeight = $('#input_height').val();
  // Conditional for checking correct input
  // NOT NEEDED ANYMORE

  // if (((canvasWidth < 1) || (canvasWidth > 50) || (canvasHeight < 1) || (canvasHeight > 50))) {
  //   $('.warning p').css('visibility', 'visible');
  //   $('.warning p').fadeOut(7000, function() {
  //     $(this).css('display', 'block');
  //     $(this).css('visibility', 'hidden');
  //   });
  // } else {

  // Actual function making all hard work :)
  for (let i = 0; i < canvasHeight; i++) {
    $('#pixel_canvas').append('<tr></tr>');
    for (let i = 0; i < canvasWidth; i++) {
      $('tr:last-of-type').append('<td></td>');
    };
  };
}

// Defining function for rgb() to hex color conversion
function searchRGB() {
  let i = colorPicked;
  let rgbValues = i.split("(")[1].split(")")[0].split(", ");
  return rgbValues;
}

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Calling the function makeGrid()
$('#sizePicker').submit(function(evt) {
  evt.preventDefault();
  makeGrid();
})

// Select color input
let colorPicked = $('#colorPicker').val();
$('#colorPicker').on('change', function() {
  colorPicked = $('#colorPicker').val();
});
$('.predefined-colors').on('click', function(evt) {
  colorPicked = $(evt.target).css("background-color");
  $('#colorPicker').val(rgbToHex(searchRGB()[0], searchRGB()[1], searchRGB()[2]));
});

// Drawing on the canvas stuff (old version)
// $('#pixel_canvas').on('click', 'td', function(evt) {
//   $(evt.target).css('background-color', colorPicked);
// });

// Drawing on the canvas stuff (WIP)
let isDrawing = false;
$('#pixel_canvas').on('mousedown', 'td', function(evt) {
  evt.preventDefault();
  isDrawing = true;
  if (isDrawing) {
    $(evt.target).css('background-color', colorPicked);
  };
});
$('#pixel_canvas').on('mouseenter', 'td', function(evt) {
  if (isDrawing) {
    $(evt.target).css('background-color', colorPicked);
  }
});
$('#pixel_canvas').on('mouseup', 'td', function(evt) {
  isDrawing = false;
});
$('#pixel_canvas').on('mouseleave', function(evt) {
  isDrawing = false;
});'use strict';

// Defining function used to make grid
function makeGrid() {
  // Removing previous grid if it exists
  $('tr').remove();
  // Setting variables for width and height
  const canvasWidth = $('#input_width').val();
  const canvasHeight = $('#input_height').val();
  // Conditional for checking correct input
  // NOT NEEDED ANYMORE

  // if (((canvasWidth < 1) || (canvasWidth > 50) || (canvasHeight < 1) || (canvasHeight > 50))) {
  //   $('.warning p').css('visibility', 'visible');
  //   $('.warning p').fadeOut(7000, function() {
  //     $(this).css('display', 'block');
  //     $(this).css('visibility', 'hidden');
  //   });
  // } else {

  // Actual function making all hard work :)
  for (let i = 0; i < canvasHeight; i++) {
    $('#pixel_canvas').append('<tr></tr>');
    for (let i = 0; i < canvasWidth; i++) {
      $('tr:last-of-type').append('<td></td>');
    };
  };
}

// Defining function for rgb() to hex color conversion
function searchRGB() {
  let i = colorPicked;
  let rgbValues = i.split("(")[1].split(")")[0].split(", ");
  return rgbValues;
}

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Calling the function makeGrid()
$('#sizePicker').submit(function(evt) {
  evt.preventDefault();
  makeGrid();
})

// Select color input
let colorPicked = $('#colorPicker').val();
$('#colorPicker').on('change', function() {
  colorPicked = $('#colorPicker').val();
});
$('.predefined-colors').on('click', function(evt) {
  colorPicked = $(evt.target).css("background-color");
  $('#colorPicker').val(rgbToHex(searchRGB()[0], searchRGB()[1], searchRGB()[2]));
});

// Drawing on the canvas stuff (old version)
// $('#pixel_canvas').on('click', 'td', function(evt) {
//   $(evt.target).css('background-color', colorPicked);
// });

// Drawing on the canvas stuff (WIP)
let isDrawing = false;
$('#pixel_canvas').on('mousedown', 'td', function(evt) {
  evt.preventDefault();
  isDrawing = true;
  if (isDrawing) {
    $(evt.target).css('background-color', colorPicked);
  };
});
$('#pixel_canvas').on('mouseenter', 'td', function(evt) {
  if (isDrawing) {
    $(evt.target).css('background-color', colorPicked);
  }
});
$('#pixel_canvas').on('mouseup', 'td', function(evt) {
  isDrawing = false;
});
$('#pixel_canvas').on('mouseleave', function(evt) {
  isDrawing = false;
});// Your code goes here!

}

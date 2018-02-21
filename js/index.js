$(function() {
  // FUNCTIONS
 function makeGrid() {
    clearGrid();
    getInputValue();
    
  // nested loop to build grid and append it to table
   for (let r = 0; r < rows; r++) {
     $('#pixel_canvas').append("<tr></tr>");
     for (let c = 0; c < cols; c++) {
       $('#pixel_canvas').children().last().append("<td></td>");
     }
   }
 }

  function fillSquare() {
    $(this).css('background-color', $('#colorPicker').val())
  }
   // EVENT LISTENERS
  // btn 'input[type="submit"]' of the form sizePicker calls makeGrid function 
  // clicking the submit button on form builds the grid
  $('#sizePicker').on('submit',function(e) {
    //prevent page refresh
    e.preventDefault();
    makeGrid();
  });

  // clicking a grid square changes the background color
  $('#pixel_canvas').on('click', 'td', fillSquare);
  
  function clearGrid(){
    // clear the previous grid
    $('#pixel_canvas').children().remove();
  }
  
  function getInputValue(){
    // get input values for width and height
 let rows = $('#input_Height').val();
 let cols = $('#input_Width').val();
  }

});
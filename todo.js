$(document).ready(function () {



  // Select the li in box
  $('.box').on("click", "li", function () {
    $(this).toggleClass('completed');
  });


  // Remove the li when click on span in box class.
  $('.box').on("click", " span", function (event) {
    //Target parent of span, li, then fadeout and remove li.
    $(this).parent().fadeOut(500, function () {
      $(this).remove();
    });
    event.stopPropagation();
  });

  // listen for the keypress on the input
  $('.box').on( "keypress", "input[type=text]", function (event) {
    if ( event.which === 13 ) {
      // save this value
      var todoText = $(this).val();
      $(this).val("")
      $('.box ul').append('<li><span><i class="fa fa-trash"></i></span>'+' '+todoText+'</li>')
    }
  });

  // Just do it shia
  $('.box').on('click', '.fa-plus', function () {
    $('.justdoit img').toggle();
  })




});






  
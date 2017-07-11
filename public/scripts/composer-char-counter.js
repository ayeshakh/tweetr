// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// let char = 140;



const maxChar = 140;
let remainingChar = maxChar;

function countingChar(totalChar){
  return maxChar - totalChar;
}

$(document).ready(function(){
  $("textarea").keyup(function(){
    // count remaining characters
    remainingChar = countingChar($(this).val().length);
    let counter = $(this).siblings(".counter");
    counter.text(remainingChar);

      if (remainingChar < 0){
        counter.addClass("overLimit"); //checking if the counter is going negative add another class. change color in new-tweet
                                        // can use debugger to check what value to use in if statement
      }
      else{
        counter.removeClass("overLimit"); // change class back if counter goes back
      }
  })
})








// $( document ).ready(function() {
//   $("textarea").keyup(function() {
//     var length = $(this).val().Length
//     console.log("Length = " + length);
//   })

// });

// $("textarea").change(function(event) {
//   console.log(event);
// });

// $( document ).ready(function() {
//   $("textarea").keyup(function() {
//     console.log("Handler for .keyup() called.");
//   })
// });

// $( document ).ready(function() {
//   $("textarea").keydown(function() {
//     console.log("Handler for .keydown() called.");
//   })
// });

// $(document).ready(function () {
//     $('textarea').bind('blur', function () {
//       console.log("Handler for .keydown() called.");
// });
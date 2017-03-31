//Back-end Logic
var numbers = ["3", "5", "14", "15", "1", "2", "3"];



numbers.forEach(function(number) {
  if ((number % 3) === 0 && (number % 5) === 0) {
      number = "ping-pong";
  } else if ((number % 3)=== 0) {
    number = "ping";
  }  else if ((number % 5) === 0) {
    number = "pong";
  }  alert(number);
});



// var pingPong = function(input){
// var numbers = parseInt(pingPong);
// var updated = numbers -1;
//
//
// return updated;
// }

  //the code I want
  // for(var i=1; i <= input; i++) {
  //   number = i;
    // if ((number % 3)=== 0) {
    //   number = "ping";
    //   alert(numbers);
    // } else if ((number % 5) === 0) {
    //   number = "pong";
    // } else if ((number % 3)=== 0 && (number % 5) === 0) {
    //   number = "ping-pong";
  //   }

//Front-end Logic
$(document).ready(function(){
  $("#form").submit(function(event) {

    event.preventDefault();
    var input = $("#numberInput").val();
    $("#output").text(input);
    });

  });
// });

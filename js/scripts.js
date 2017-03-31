//////////////
//Back-end Logic
//////////////


var output = [];
function pingPong () {
  var numberInput = parseInt($("#numberInput").val());
    for (var number = 1; number <= numberInput; number += 1){
      if ((number % 3) === 0 && (number % 5) === 0) {
         output.push("ping-pong");
      } else if ((number % 3)=== 0) {
         output.push("ping");
      } else if ((number % 5) === 0) {
         output.push("pong");
      } else {
        output.push(number);
      }
    };
  };



//////////////
//Front-end Logic
//////////////


$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var finalLoop = pingPong();
    output.forEach(function(finalLoop) {
    $("#finalOutput").append( "<li>" + finalLoop + "</li>");
      });
  });
});

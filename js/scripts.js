//Back-end Logic

var output = [];
// var numberInput = [];
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


//Front-end Logic
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
  var test = pingPong();
    output.forEach(function(test) {
    $("#finalOutput").append("<li>" + test + "</li>");
      });
    });
  });

  // var numberInput = parseInt($("#numberInput").val());

  // };
  // numberInput.forEach(function(number) {   // working code
  //     if ((number % 3) === 0 && (number % 5) === 0) {
  //       number = "ping-pong";
  //     } else if ((number % 3)=== 0) {
  //       number = "ping";
  //     }  else if ((number % 5) === 0) {
  //       number = "pong";
  //     }  alert(number);
  //   });

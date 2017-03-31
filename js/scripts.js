//Back-end Logic
// var numbers = [];
// var numbers = ["15", "1", "2", "3"]; // this is my test, now I have to make it so the form input goes here.
// var numberOutput = []; // need new array with all numbers less than that but greater than 0

// var numbers = function(numberInput){

var output = [];
// var numberInput = [];
function pingPong () {
var numberInput = parseInt($("#numberInput").val());
for (var number = 1; number <= numberInput; number += 1){
    if ((number % 3) === 0 && (number % 5) === 0) {
       output.push("ping-pong");
    }
    // else if ((number % 3)=== 0) {
    //    output.push("ping");
    // }  else if ((number % 5) === 0) {
    //    output.push("pong");
    // }
     else {
      output.push(number);
    }
  };
  };
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


//Front-end Logic
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
      var test = pingPong();
    // var numberInput = parseInt($("#numberInput").val());
    output.forEach(function(test) {
    $("#finalOutput").append("<li>" + test + "</li>");
      });
    });
  });

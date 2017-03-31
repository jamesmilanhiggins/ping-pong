//Back-end Logic


var pingPong = function(input){
  return input;
}






//Front-end Logic
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    $("#results").text(input);
  });
});

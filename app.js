// JavaScript eller jQuery
var setButton = document.createElement("button");
setButton.setAttribute("class", "loginButton");
var buttonText = document.createTextNode("Login");
setButton.appendChild(buttonText);
document.body.appendChild(setButton);
$("button").css({
  "width": "70px",
  "height": "30px",
  "font-size": "16px",
  "border-radius": "5px"
});

document.querySelector(".loginButton").addEventListener("click", loginFunction);

function loginFunction() {
  $(".loginButton").after("<div>");
  $("div").css({
    "background-color":"#eee",
    "margin-top": "20px",
    "width": "500px",
    "height": "400px"
  });
  $("div").prepend("<h1>");
  $("h1").prepend("Login").css({
    "text-align":"center",
    "padding-top": "10px"
  });
  $("div").append("<input type='text' class='username'>");

  $("input").css({
    "width": "494px",
    "height": "22px",
    "margin-top": "100px",
    "margin-bottom": "10px"
  });
  $("div").append("<input type='password' class='password'>");

  $("input").css({
    "width": "494px",
    "height": "22px",
  });
  $("div").append("<input type='submit' class='submitButton'/>");
  $(".submitButton").css({
    "width":"100%",
    "height":"22px",
    "margin-top": "10px"
  });

  $(".submitButton").click(function(){
    var username = $(".username")[0].value;
    var password = $(".password")[0].value;
    if (username == "steve" && password == 123) {
      jsonPlaceholder();
      alert("Välkommen! Din email hämtas från servern.");
    }
    else {
      alert("oops, try again!");
    }
  });

}


function jsonPlaceholder() {
  $("div").after("<h2>");
  $("h2").append("Email: ");
  $.get("https://jsonplaceholder.typicode.com/users/1", function (data) {
    $("h2").after("<h3>");
    $("h3").append(data.email);
  });
}











//END

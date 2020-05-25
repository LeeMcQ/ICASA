var password = prompt ("Please provide password to unlock the site?")
var password = password.toLowerCase();
var word = "high";
if (password == word) {alert("You logged in!");
}
else{alert("wrong Password");
document.querySelector("body").classList.toggle("invisible");
}

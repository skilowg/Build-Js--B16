window.onload = function () {
  document.getElementById("prompt").onclick = function buttonClick() {
    var name = prompt("what is your name");
    if (name == "dale" || name == "Dale" ) {
      alert ("Sorry, Greedo shot first. Lol!");
    }
    else if (name.length > 5) {
      alert ("Your name is too fucking long, change it!");
    }
    else {
      alert ("Nice and to the point");
    }
  };
};

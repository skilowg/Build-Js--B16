window.onload = function () {
  document.getElementById("prompt").onclick = function buttonClick() {
    var name = prompt("what is your name");
    document.getElementById("message").innerHTML = name;
  };
};

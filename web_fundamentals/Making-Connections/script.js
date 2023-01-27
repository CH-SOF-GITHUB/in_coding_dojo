function editprofile(id) {
  document.getElementById(id).innerText = "Philipes Toke";
}

function increase(id) {
  //   var cont = "#" + id;
  document.getElementById(id).innerText++;
  document.querySelector("#nb-your-connections").innerText++;
}

function decreaseAndRemove(id) {
  //   var nbs = "#" + id;
  document.getElementById(id).remove();
  document.querySelector("#nb-connections").innerText--;
}

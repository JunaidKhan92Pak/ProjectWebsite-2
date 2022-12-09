
let Register = document.querySelector("#register")

//function for close and open registeation form
function closeRegister() {
  Register.style.display = "none"
}
function openRegister() {
  Register.style.display = "flex"
}

// Function For openNav and close navbar
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// function successMessage() {
//   alert("Your message has been Captured  ");
// }

function validateContact_Us() {
  var fname = document.forms["form_name"]["Name"].value;
  var femail = document.forms["form_name"]["Email"].value;
  if (fname.trim() == "") {
    alert("Name field is required");
    document.forms["form_name"]["Name"].value = "";
    document.forms["form_name"]["Name"].focus();
    return false;
  } else if (femail.trim() == "") {
    alert("Email is required");
    document.forms["form_name"]["Email"].value = "";
    document.forms["form_name"]["Email"].focus();
    return false;
  }
}

// function scrollfunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("mainNav").style.padding = "0px 10px";
//     document.getElementById("logo").style.fontSize = "30px";
//   } else {
//     document.getElementById("navbar").style.padding = "35px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   }
// }
// window.onscroll = function () {
//   scrollfunction();
// };

window.addEventListener("scroll", function () {
  var he = document.querySelector("nav");
  he.classList.toggle("", window.scrollY > 0);
});

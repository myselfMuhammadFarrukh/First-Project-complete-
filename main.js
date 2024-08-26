let loader = document.querySelector(".loader");
let hidden = document.querySelector(".hidden");

window.onload = function () {
  setTimeout(function () {
    loader.style.display = "none";
    hidden.style.display = "block";
  }, 1000);
};
// for images slide
let images = document.querySelectorAll(".slider ul img");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let imgNo = 0;
images[imgNo].style.display = "block";
previous.addEventListener("click", function (event) {
  event.preventDefault();
  images[imgNo].style.display = "none";
  if (imgNo > 0) {
    imgNo--;
  } else {
    imgNo = images.length - 1;
  }
  images[imgNo].style.display = "block";
});
next.addEventListener("click", function (event) {
  event.preventDefault();
  images[imgNo].style.display = "none";
  if (imgNo < images.length - 1) {
    imgNo++;
  } else {
    imgNo = 0;
  }
  images[imgNo].style.display = "block";
});

// javascript for contact page
let submitMessage = document.querySelector(".submitMessage");
let inputValues = document.querySelectorAll("input");
console.log(inputValues.length);
// submitMessage.addEventListener("click", () => {
//   let n = 0;
//   for (let i = 0; i < inputValues.length; i++) {
//     if (inputValues[i].value !== "") {
//       n++;
//     }
//   }
//   if (n === inputValues.length) {
//     alert("Details submitted successfully.");
//   } else {
//     alert("Kindly enter complete details first.");
//   }
// });
// responsive menu
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".sidebar .cross");
menu.addEventListener("click", function () {
  console.log("hi");

  sidebar.style.display = "flex";
  menu.style.display = "none";
});
close.addEventListener("click", function () {
  console.log("hi");

  sidebar.style.display = "none";
  menu.style.display = "block";
});

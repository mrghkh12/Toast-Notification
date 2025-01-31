const $ = document;

const notifBox = $.querySelector("#notifBox");

let successMsg =
  '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

function showNotif(msg) {
  let notifElem = $.createElement("div");
  notifElem.classList.add("toastNotif");
  notifElem.innerHTML = msg;

  msg.includes("error") && notifElem.classList.add("error");
  msg.includes("Invalid") && notifElem.classList.add("invalid");

  notifBox.appendChild(notifElem);

  setTimeout(() => notifElem.remove(), 5000);
}

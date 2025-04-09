const cta_btn = document.querySelector("#cta_btn");
cta_btn.addEventListener("click", openDialog);

function openDialog() {
    console.log("Test fucn")
    document.querySelector("#test_dialog").showModal();
}


// Code for example 2
// const ex2_openBtn = document.querySelector("#ex2_openBtn");
// ex2_openBtn.addEventListener("click", openDialog);
// function openDialog() {
//   document.querySelector("#dialog-2").showModal();
// }
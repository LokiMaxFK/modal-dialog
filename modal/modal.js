const openModal = document.querySelector("[data-id='abrir-modal']");
const closeModal = document.querySelector("[data-id='cerrar-modal']");
const dialog = document.querySelector(".modal");



openModal.addEventListener("click", ()=>{
    dialog.showModal();
});

closeModal.addEventListener("click", ()=>{
    dialog.setAttribute("close", "");

    dialog.addEventListener("animationend", ()=>{
        console.log("Animation");
        dialog.removeAttribute("close");
        dialog.close();

    }, {once:true})


});
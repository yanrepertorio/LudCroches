document.addEventListener("DOMContentLoaded",()=>{
    const btnPopup = 
    document.getElementById("btn-popup");
    const popupCard = document.getElementById("popup-card");
    const btnClose = document.getElementById("btnClose");

    btnPopup.addEventListener("click", () => {
        popupCard.classList.add("ativo");
    });

     btnClose.addEventListener("click", () => {
        popupCard.classList.remove("ativo");
    });

})
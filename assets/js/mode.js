// const skillsContent = document.getElementsByClassName("skills_content"),
//       skillsHeader = document.querySelectorAll(".skills_header");

// function toggleSkills() {
//     let itemClass = this.parentNode.getElementsByClassName;

//     for (i = 0; i < skillsContent.length; i++) {
//         skillsContent[i].className = "skills_content skills_close";
//     }
//     if (itemClass === "skills_content skills_close") {
//         this.parentNode.className = "skills_content skills_open";
//     }
// }

const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn,i) =>{
    modalBtn.addEventListener("click",() =>{
        modal(i)
    })
})


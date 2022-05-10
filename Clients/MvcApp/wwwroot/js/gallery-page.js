'use strict';
// Hämta html element som vi skall manipulera
const modalDialog = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const loadImages = () => {
    const images = document.querySelectorAll('.gallery-card img');
    console.log(images);

    images.forEach((image)=> {
        let src = image.getAttribute('src');
        image.addEventListener('click',() => {
        openModal(src); 
    })
 })
};

const openModal=(imagesrc) =>{
    const placeholder = modalDialog.querySelector('.modal-container');
    placeholder.innerHTML = `<img src =${imagesrc}" alt =En Bil"/> 
    <a href="#" class="btn"> Mer info <i class= "fa-solid fa-circle-info"></i></a>`; 

    /*-----------------------

    Här skall det skapas mer info knapp dvs hämta en bil efter id informationen
    -----------------------*/

   
   modalDialog.classList.remove('hidden');  
   overlay.classList.remove('hidden');

};
const closeModal = () => {
    modalDialog.classList.add('hidden');
    overlay.classList.add('hidden'); 
}
//hanterar händelser i Javascript

closeModalButton.addEventListener('click',closeModal );
document.addEventListener('keyup', (e) => {
    if(e.key === 'Escape'){
        if (!modalDialog.classList.contains('hidden'))
        {
            closeModal();
        }
    }
})

loadImages();
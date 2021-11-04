// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.classList.add('opened');
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.classList.remove('opened');
// }

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (currentModal && event.target == currentModal) {
        closeModal();
    }
}

let currentModal;
function closeModal() {
    currentModal?.classList.remove('opened');
    currentModal = undefined;
}
function openModal(modal) {
    currentModal = modal;
    modal.classList.add('opened');
}

for (const item of document.querySelectorAll('.item')) {
    const modal = item.querySelector('.modal');
    if (!modal) continue;
    const closeBtn = modal.querySelector('.close');
    const openBtn = item.querySelector('.modal-button');
    if(!openBtn) continue;
    if(!closeBtn) continue;

    closeBtn.onclick = closeModal;
    openBtn.onclick = () => openModal(modal);
}
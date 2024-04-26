document.addEventListener('DOMContentLoaded', function() {
    const showPopups = document.querySelectorAll('.show-popup');
    const closeBtns = document.querySelectorAll('.close-btn');

    showPopups.forEach((showPopup, index) => {
        showPopup.onclick = () => {
            const popupContainer = document.querySelectorAll('.popup-container')[index];
            if (popupContainer) {
                popupContainer.classList.add('active');
            }
        };
    });

    closeBtns.forEach((closeBtn, index) => {
        closeBtn.onclick = () => {
            const popupContainer = document.querySelectorAll('.popup-container')[index];
            if (popupContainer) {
                popupContainer.classList.remove('active');
            }
        };
    });
});

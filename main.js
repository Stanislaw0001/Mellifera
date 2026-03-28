
/***********************************************************************  OPEN CHAT *************************************************************************/

const chat = document.querySelector('.chat-container');
const openBtn = document.querySelector('.button-chat');
const closeBtn = document.querySelector('.close-chat-btn');
const overlay = document.querySelector('.chat-overlay');

openBtn.addEventListener('click', () => {
    chat.classList.add('active');
    overlay.classList.add('active');
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chat.classList.remove('active');
    overlay.classList.remove('active');
    openBtn.style.display = 'flex';
});

overlay.addEventListener('click', () => {
    chat.classList.remove('active');
    overlay.classList.remove('active');
    openBtn.style.display = 'flex';
});

/***************************************************************************  HEADER BUTTON DROPDOWN **********************************************************/

const dropdown = document.querySelector('.list-dropdown');
const button = document.querySelector('.list-button-wrapper');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});
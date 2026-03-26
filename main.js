const chat = document.querySelector('.chat-container');
const openBtn = document.querySelector('.button-chat');
const closeBtn = document.querySelector('.close-chat-btn');

openBtn.addEventListener('click', () => {
    chat.classList.add('active');
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chat.classList.remove('active');
    openBtn.style.display = 'flex';
});
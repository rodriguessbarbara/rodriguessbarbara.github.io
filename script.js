const themeMode = document.querySelector('.switch *');

function callback() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        console.log('funfou');
}

themeMode.addEventListener('click', callback);
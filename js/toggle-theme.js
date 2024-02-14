let darkMode = true;
const btnToggle = document.querySelector('#toggle-mode');
const spanText = document.querySelector('#toggle-text')

btnToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    const mode = darkMode ? 'light' : 'dark';
    
    spanText.textContent = `${mode} mode ativado!`;

    darkMode = !darkMode; 
});
let darkMode = true;
const btnToggle = document.querySelectorAll('.toggle-mode');
const spanText = document.querySelector('#toggle-text');

btnToggle.forEach(element => {
    element.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        
        const mode = darkMode ? 'Light' : 'Dark';
    
        spanText.textContent = `${mode} mode ativado!`;
    
        darkMode = !darkMode;
    }); 
});
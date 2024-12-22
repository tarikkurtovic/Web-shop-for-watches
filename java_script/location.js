document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none'; 
            } else {
                content.style.display = 'block'; 
            }
        });
    });
});

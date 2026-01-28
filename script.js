document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeBtn = document.getElementById('mode-toggle');

    modeBtn.addEventListener('click', () => {
        const lightMode = !body.classList.contains('dark-mode');
        if (lightMode) {
            body.style.background = '#1f1f1f';
            body.style.color = '#e9e6e2';
            document.querySelectorAll('h1, h2').forEach((el) => {
                el.style.color = '#ffeb5a';
            });
            body.classList.add('dark-mode');
        } else {
            body.style.background = '';
            body.style.color = '';
            document.querySelectorAll('h1, h2').forEach((el) => {
                el.style.color = '';
            });
            body.classList.remove('dark-mode');
        }
    });

    const ingredientsList = document.getElementById('ingredients-list');
    const ingredientsItems = Array.from(ingredientsList.querySelectorAll('li'));

    ingredientsItems.forEach((li) => {
        li.addEventListener('click', () => {
            const struck = li.style.textDecoration === 'line-through';
            if (struck) {
                li.style.textDecoration = '';
                li.style.opacity = '';
            } else {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.75';
            }
        });
    });
});
export default function createDefaultCat(todo) {
    let display = document.getElementById('display');
    
    if (display.childElementCount > 0) {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        category.appendChild(todo);
        display.appendChild(category);
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);
    }
}
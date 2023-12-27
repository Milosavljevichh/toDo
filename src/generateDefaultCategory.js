export default function createDefaultCat() {
    let display = document.getElementById('display');
    
    let category = document.createElement('div');
    category.id = 'overall';
    let title = document.createElement('h2');
    title.innerHTML = 'Overall';
    category.appendChild(title);
    display.appendChild(category);
}
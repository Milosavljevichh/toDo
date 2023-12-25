export default function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority) {
    let display = document.getElementById('display');

    let category = document.createElement('div');
    category.id = 'category';

    let title = document.createElement('h2');
    title.innerHTML = 'Category';

    category.appendChild(title);
    display.appendChild(category);
};
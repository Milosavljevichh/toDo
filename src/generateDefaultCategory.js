import loadSavedCategories from "./loadSavedCategories";
import loadSavedTodo from "./loadSavedTodo";

export default function createDefaultCat(todo) {
    let display = document.getElementById('display');

    if (!todo) {
    loadSavedCategories();
}
    
    if (display.childElementCount > 0) {
        if (todo) {
            let category = document.createElement('div');
            category.id = 'overall';
            let title = document.createElement('h2');
            title.innerHTML = 'Overall';
            category.appendChild(title);
            category.appendChild(todo);
            localStorage.setItem('_category_'+category.id,  JSON.stringify(category.id));
            display.appendChild(category);
        }
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);
    }
    
    if (!todo) {
    Object.keys(localStorage).forEach(item => {
        if (item.includes('_todo_')) {
            loadSavedTodo(JSON.parse(localStorage.getItem(item)));
        }
    })};
}
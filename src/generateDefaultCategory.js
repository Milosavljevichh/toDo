import loadSavedCategories from "./loadSavedCategories";
import loadSavedTodo from "./loadSavedTodo";

export default function createDefaultCat(todo) {
    let display = document.getElementById('display');

    Object.keys(localStorage).forEach(item => {
        if (item.includes('_category_')) {
            loadSavedCategories(JSON.parse(localStorage.getItem(item)));
            
        } 
    });

    
    
    
    if (display.childElementCount > 0) {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        if (todo) {
            category.appendChild(todo);
        }
        display.appendChild(category);
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);
    }
    
    Object.keys(localStorage).forEach(item => {
        if (item.includes('_todo_')) {
            loadSavedTodo(JSON.parse(localStorage.getItem(item)));
        }
    });
}
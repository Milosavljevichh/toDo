import createTodo from "./todo-generator";

export default function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle) {

    let display = document.getElementById('display');
    let todo = createTodo(todoTitle, todoDescription, todoDueDate, todoPriority);
    let existingCategory = document.getElementById(categoryTitle);

    if (display.childElementCount === 0) {
        let category = document.createElement('div');
        category.id = 'overall';
    
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
    
        category.appendChild(title);
        display.appendChild(category);
    } else if (display.childElementCount > 0) {

        if (existingCategory) {

            existingCategory.appendChild(todo);
            console.log('works');

        } else {

            let category = document.createElement('div');
            category.id = categoryTitle;

            let title = document.createElement('h2');
            title.innerHTML = categoryTitle;

            if (categoryTitle.length === 0) {
                let overall = document.getElementById('overall');
                overall.appendChild(todo);
            } else {
                category.appendChild(title);
                category.appendChild(todo);
                display.appendChild(category);
            }

            
        }
    }
};
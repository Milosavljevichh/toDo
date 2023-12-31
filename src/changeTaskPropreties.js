import createCategory from "./category-generator";
import checkChildren from "./checkCategoryChildren";

export default function changeTaskPropreties(newTitle, newDesc, newDate, newPriority, newCat, oldTitle) {
    let titleElement = document.getElementById('title');
    let parentElement = titleElement.parentElement;

    class Todo {
        constructor (title, description, dueDate, priority, inCategory) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.inCategory = inCategory;
        }
    };

    const newTodo = new Todo(newTitle, newDesc, newDate, newPriority, newCat);

    let descrElement = parentElement.querySelector('#description');
    let dueEelemnt = parentElement.querySelector('.todo-footer').querySelector('p');
    let catTitle = parentElement.parentElement.querySelector('h2').innerHTML;
    if (titleElement.innerHTML === oldTitle){
        titleElement.innerHTML = newTodo.title;
        descrElement.innerHTML = newTodo.description;
        dueEelemnt.innerHTML = newTodo.dueDate;
        createCategory(newTitle, newDesc, newDate, newPriority, newCat);
        if (parentElement.parentElement.children === 1) {
            console.log('delete')
        }
        if (newTitle !== oldTitle) {
            parentElement.parentElement.remove();
            localStorage.removeItem('_category_'+catTitle);
        }
        parentElement.remove();
        localStorage.removeItem('_todo_'+oldTitle);
        console.log(catTitle)
        localStorage.setItem('_todo_'+newTitle, JSON.stringify(newTodo));
    }
}
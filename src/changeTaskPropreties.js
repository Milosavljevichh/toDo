import createCategory from "./category-generator";

export default function changeTaskPropreties(newTitle, newDesc, newDate, newPriority, newCat, oldTitle) {
    let titleElement = document.getElementById('title');
    let parentElement = titleElement.parentElement;

    let descrElement = parentElement.querySelector('#description');
    let dueEelemnt = parentElement.querySelector('.todo-footer').querySelector('p');
    if (titleElement.innerHTML === oldTitle){
        titleElement.innerHTML = newTitle;
        descrElement.innerHTML = newDesc;
        dueEelemnt.innerHTML = newDate;
        createCategory(newTitle, newDesc, newDate, newPriority, newCat);
        parentElement.remove();
        localStorage.removeItem('_todo_'+oldTitle);
    }
}
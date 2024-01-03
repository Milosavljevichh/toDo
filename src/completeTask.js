import checkChildren from "./checkCategoryChildren";
import checkCatDisplay from "./checkCategorysDisplay";

export default function completeTask(task, title) {
    task.classList.add('completed');
    localStorage.removeItem('_todo_'+title);
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        checkChildren(category);
        // checkCatDisplay();
    });
};
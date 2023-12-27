import checkChildren from "./checkCategoryChildren";

export default function completeTask(task) {
    task.classList.add('completed');
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        checkChildren(category);
    });
};
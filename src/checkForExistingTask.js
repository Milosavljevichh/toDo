export default function checkIfTaskExists(titleValue, titleInput) {
    let bool = true;
    Object.keys(localStorage).forEach(item => {
        if ('_todo_'+titleValue === item) {
            titleInput.classList.add('warning');
            titleInput.value = '';
            titleInput.placeholder = "Task already exists";
            bool = false;
        }
        
    })
    return bool;
}
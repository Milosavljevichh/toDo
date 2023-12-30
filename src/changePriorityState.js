export default function changePriorityState(priorityLevel, selected) {

    let todosList = document.querySelectorAll('.todo');

    switch (priorityLevel) {
        case 'None':
            if (selected === true) {
                todosList.forEach((todo)=>{
                    if (todo.classList.contains('None')) {
                        todo.classList.add('selected');
                    }
                });
            } else if (selected === false) {
                todosList.forEach((todo)=>{
                    if (todo.classList.contains('None')) {
                        todo.classList.remove('selected');
                    }
                });
            }
            break;

            case 'Low':
                if (selected === true) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('Low')) {
                            todo.classList.add('selected');
                        }
                    });
                } else if (selected === false) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('Low')) {
                            todo.classList.remove('selected');
                        }
                    });
                }
            
            break;
            case 'Mid':
                if (selected === true) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('Mid')) {
                            todo.classList.add('selected');
                        }
                    });
                } else if (selected === false) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('Mid')) {
                            todo.classList.remove('selected');
                        }
                    });
                }
            
            break;
            case 'High':
                if (selected === true) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('High')) {
                            todo.classList.add('selected');
                        }
                    });
                } else if (selected === false) {
                    todosList.forEach((todo)=>{
                        if (todo.classList.contains('High')) {
                            todo.classList.remove('selected');
                        }
                    });
                }
            break;

        default:
            //code
    };

    let selectedTodos = document.querySelectorAll('.selected');
    todosList.forEach((todo)=> {
        if (selectedTodos.length !== 0) {
            if (todo.classList.contains('selected')) {
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
        } else {
            todo.style.display = 'flex';
        }
    })
}
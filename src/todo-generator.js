import completeTask from "./completeTask";
import editTask from "./editTask";

export default function createTodo(classTitle, classDesc, classDate, classPriority, categoryTitle) {
    
    class Todo {
        constructor (title, description, dueDate, priority, inCategory) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.inCategory = inCategory;
        }
    }
    
    let nonEmptyCategory = '';

    if (categoryTitle === '') {
        nonEmptyCategory = 'overall';
    } else {
        nonEmptyCategory = categoryTitle;
    }

    const newTodo = new Todo(classTitle, classDesc, classDate, classPriority, nonEmptyCategory);

    if (classTitle) {
        localStorage.setItem('_todo_'+classTitle, JSON.stringify(newTodo));
    }

    //DOM manipulation
    let article = document.createElement('article');
    article.classList.add('todo');
    article.classList.add(newTodo.priority);

    let todoTitle = document.createElement('h3');
    todoTitle.innerHTML = newTodo.title;
    todoTitle.id = 'title';
    let footer = document.createElement('div');
    footer.classList.add('todo-footer');

    let todoDescription = document.createElement('p');
    todoDescription.innerHTML = newTodo.description;
    todoDescription.id = 'description';

    let displayDate = document.createElement('p');
    displayDate.innerHTML = newTodo.dueDate;

    let iconContainer = document.createElement('div');
    iconContainer.classList.add('todo-icons');

    let completeBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    editBtn.id = 'editBtn';
    completeBtn.id = 'completeBtn';

    let completeIco = document.createElement('img');
    completeIco.src = 'imgs/complete.png';

    let editIco = document.createElement('img');
    editIco.src = 'imgs/edit.png';

    
    completeBtn.addEventListener('click', ()=>{
        completeTask(article, classTitle);
    });

    editBtn.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'block');
        if (classTitle) {
            let editableTodo = JSON.parse(localStorage.getItem('_todo_'+classTitle));
            editTask(editableTodo);
        } else {
            let todoNameThroughH3 = editBtn.parentElement.parentElement.parentElement.querySelector('h3').innerHTML;
            let editableTodo = JSON.parse(localStorage.getItem('_todo_'+todoNameThroughH3));
            editTask(editableTodo);
        };
    });

    editBtn.appendChild(editIco);
    completeBtn.appendChild(completeIco);
    iconContainer.append(completeBtn, editBtn);
    footer.append(displayDate, iconContainer);
    article.append(todoTitle, todoDescription, footer);
    

    return article;
};
import completeTask from "./completeTask";

export default function loadSavedTodo(item) {
    
           let newTodo = item;

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
                completeTask(article, newTodo.title);
            })

            editBtn.appendChild(editIco);
            completeBtn.appendChild(completeIco);
            iconContainer.append(completeBtn, editBtn);
            footer.append(displayDate, iconContainer);
            article.append(todoTitle, todoDescription, footer);
            let category = document.getElementById(newTodo.inCategory);
            if (category){
                category.append(article);
            } 
        }
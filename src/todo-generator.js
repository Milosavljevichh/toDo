export default function createTodo(title, description, dueDate, priority) {
    let article = document.createElement('article');
    article.classList.add('todo');
    article.classList.add(priority);

    let todoTitle = document.createElement('h3');
    todoTitle.innerHTML = title;
    todoTitle.id = 'title';
    let footer = document.createElement('div');
    footer.classList.add('todo-footer');

    let displayDate = document.createElement('p');
    displayDate.innerHTML = dueDate;

    let iconContainer = document.createElement('div');
    iconContainer.classList.add('todo-icons');

    let tempIco = document.createElement('div');
    let tempIco2 = document.createElement('div');
    tempIco.id = 'ico';
    tempIco2.id = 'ico';

    iconContainer.append(tempIco, tempIco2);
    footer.append(displayDate, iconContainer);
    article.append(todoTitle, footer);

    return article;
};
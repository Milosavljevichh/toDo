import promptValidation from "./promptValidation";
import createCategory from "./category-generator";
import checkIfTaskExists from "./checkForExistingTask";
import { isPast } from "date-fns";

export default function generatePrompt() {
    let wrapper = document.getElementById('wrapper');

    let prompt = document.createElement('div');
    prompt.id = 'prompt';

    let form = document.createElement('form');
    // creating inputs and labels
    // title
    let titleDiv = document.createElement('div');
    let titleLabel = document.createElement('p');
    let titleInput = document.createElement('input');

    titleInput.type = 'text';
    titleInput.id = 'titleInput';
    titleInput.name = 'titleInput';
    titleInput.placeholder = 'Input title...'
    titleInput.maxLength = 40;
    titleLabel.innerHTML = "Task's title:";
    //appending title
    titleDiv.append(titleLabel, titleInput);
    
    //description
    let descriptionDiv = document.createElement('div');
    let descriptionLabel = document.createElement('p');
    let descriptionInput = document.createElement('input');
    
    descriptionInput.type = 'text';
    descriptionInput.id = 'descriptionInput';
    descriptionInput.name = 'descriptionInput';
    descriptionInput.placeholder = 'Input description...'
    descriptionInput.maxLength = 60;
    descriptionLabel.innerHTML = "Short description:";
    //appending description
    descriptionDiv.append(descriptionLabel, descriptionInput);
    
    //due date
    let dueDatenDiv = document.createElement('div');
    let dueDateLabel = document.createElement('p');
    let dueDateInput = document.createElement('input');
    
    dueDateInput.type = 'date';
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';

    dueDateLabel.innerHTML = "Due date:";
    dueDatenDiv.append(dueDateLabel, dueDateInput);
    //category
    let categoryDiv = document.createElement('div');
    let categoryLabel = document.createElement('p');
    let categoryInput = document.createElement('input');
    
    categoryInput.id = 'categorySelect';
    categoryInput.placeholder = 'Category name';
    categoryInput.type = 'text';
    categoryInput.setAttribute('list', 'categoryList');
    categoryInput.autocomplete = 'off';
    //making category datalist
    let catList = document.createElement('datalist');
    catList.id = 'categoryList';

    let display = document.getElementById('display');
    let categories = display.childNodes;
    categories.forEach(category => {
        let categoryOption = document.createElement('option');
        categoryOption.value = category.id;
        categoryOption.innerHTML = category.id;
        catList.appendChild(categoryOption);
    });

    categoryInput.appendChild(catList);

    
    categoryLabel.innerHTML = "Input category:";
    
    categoryDiv.append(categoryLabel, categoryInput);
    //priority
    let priorityDiv = document.createElement('div');
    let priorityLabel = document.createElement('p');
    let prioritySelect = document.createElement('select');

    prioritySelect.id = 'prioritySelect';
    let none = document.createElement("option");
    none.text = "None";
    let low = document.createElement("option");
    low.text = "Low";
    let medium = document.createElement("option");
    medium.text = "Mid";
    let high = document.createElement("option");
    high.text = "High";

    prioritySelect.add(none);
    prioritySelect.add(low);
    prioritySelect.add(medium);
    prioritySelect.add(high);

    priorityLabel.innerHTML = "Select priority:";

    priorityDiv.append(priorityLabel, prioritySelect);
    //button
    let btnDiv = document.createElement('div');

    let confirm = document.createElement('button');
    confirm.id = 'confirmBtn';
    confirm.innerHTML = "Create";
    confirm.type = 'button';
    confirm.addEventListener('click', () => {
        //saving form data
        let titleValue = titleInput.value;
        let descriptionValue = descriptionInput.value;
        let dueDateValue = dueDateInput.value;
        let priorityValue = prioritySelect.value;
        let categoryValue = categoryInput.value;
        //logic
        if (!titleValue || isPast(dueDateInput.value)) {
            promptValidation(titleValue, descriptionValue, titleInput, descriptionInput, dueDateInput, dueDateLabel);
        }  else {
            let doesNotExist = checkIfTaskExists(titleValue,titleInput);
            console.log(doesNotExist)
           
            if (doesNotExist === true) {
            createCategory(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue);
            
            //removing background overlay
            let root = document.querySelector(':root');
            root.style.setProperty('--wrapper-display', 'none');
            //passing args to the create category func
            wrapper.removeChild(prompt);
        }
    }});

     let cancel = document.createElement('button');
    cancel.id = 'cancelBtn';
    cancel.type = 'button';
    cancel.innerHTML = "Cancel";
    cancel.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'none');
        wrapper.removeChild(prompt);
    });

    btnDiv.append(cancel,confirm);

    //appending to form
    form.append(titleDiv, descriptionDiv, categoryDiv, dueDatenDiv, priorityDiv, btnDiv);

    prompt.appendChild(form);
    wrapper.appendChild(prompt);
};
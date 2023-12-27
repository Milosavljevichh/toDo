import createTodo from "./todo-generator";
import createDefaultCat from "./generateDefaultCategory";

export default function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle) {

    //declaring variables
    let display = document.getElementById('display');
    let todo = createTodo(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle);
    let existingCategory = document.getElementById(categoryTitle);


    //if display has no categories, create an 'overall' category
    if (display.childElementCount === 0) {

        createDefaultCat();

    //if display has an 'overall' category, handle creating new category
    } else if (display.childElementCount > 0) {

        //if user selected an existing category, add new to-do to that category
        if (existingCategory) {

            existingCategory.appendChild(todo);

        //if user made a new category, add new to-do to that category and assign
        //it to the display element
        } else {

            let category = document.createElement('div');
            category.id = categoryTitle;

            let title = document.createElement('h2');
            title.innerHTML = categoryTitle;

            
            // localStorage.setItem('categoris', categories);

            //if no category is chosen, assign to-do to 'overall' category
            if (categoryTitle.length === 0) {
                if (document.getElementById('overall')) {
                    let overall = document.getElementById('overall');
                    overall.appendChild(todo);
                } else {
                    createDefaultCat(todo);
                }
            } else {
                let overall = document.getElementById('overall');
                if (overall && overall.childElementCount === 1) {
                    overall.remove();
                }
                category.appendChild(title);
                category.appendChild(todo);
                localStorage.setItem('_category_'+title.innerHTML,  JSON.stringify(title.innerHTML));
                display.appendChild(category);
            }
        }
    }
};
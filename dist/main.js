/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateHeader)
/* harmony export */ });
/* harmony import */ var _toDo_creation_prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function generateHeader() {
    let wrapper = document.getElementById('wrapper');

    let header = document.createElement('header');

    let leftSide = document.createElement('div');
    let rightSide = document.createElement('div');
    let logo = document.createElement('a');
    let logoImg = document.createElement('img');

    let appTitle = document.createElement('h1');

    let addBtn = document.createElement('button');
    let addIco = document.createElement('img');

    let smallTitle = document.createElement('h3');

    let titleDiv = document.createElement('div');

    leftSide.id = 'left-header';
    rightSide.id = 'right-header';

    logo.href = '#';
    logoImg.src = "imgs/to-do-list.png";
    logoImg.alt = 'logo';

    appTitle.innerHTML = 'Cyclone check';
    smallTitle.innerHTML = 'Blow away all your tasks';

    addBtn.id = 'addBtn'; 

    addIco.src = 'imgs/addIcon.png';

    addBtn.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'block');
        (0,_toDo_creation_prompt__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    logo.appendChild(logoImg);

    titleDiv.append(appTitle,  smallTitle);

    leftSide.append(logo, titleDiv);

    addBtn.appendChild(addIco);

    rightSide.append(addBtn);

    header.append(leftSide, rightSide);
    wrapper.appendChild(header);
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generatePrompt)
/* harmony export */ });
/* harmony import */ var _promptValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _checkForExistingTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





function generatePrompt() {
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
    //priority
    let categoryDiv = document.createElement('div');
    let categoryLabel = document.createElement('p');
    let categoryInput = document.createElement('input');

    categoryInput.id = 'categorySelect';
    categoryInput.placeholder = 'Category name';
    categoryInput.type = 'text';

    categoryLabel.innerHTML = "Input category:";

    categoryDiv.append(categoryLabel, categoryInput);
    //category
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
        if (!titleValue || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isPast)(dueDateInput.value)) {
            (0,_promptValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(titleValue, descriptionValue, titleInput, descriptionInput, dueDateInput, dueDateLabel);
        }  else {
            let doesNotExist = (0,_checkForExistingTask__WEBPACK_IMPORTED_MODULE_2__["default"])(titleValue,titleInput);
            console.log(doesNotExist)
           
            if (doesNotExist === true) {
            (0,_category_generator__WEBPACK_IMPORTED_MODULE_1__["default"])(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue);
            
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

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ promptValidation)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function promptValidation(titleValue, descriptionValue, titleInput, descriptionInput, dueDateInput, dueDateLabel) {
    if (titleValue.length === 0) {
        titleInput.classList.add('warning');
        titleInput.placeholder = "Can't be left empty";
        // if (descriptionValue.length === 0) {
        //     descriptionInput.classList.add('warning');
        //     descriptionInput.placeholder = "Can't be left empty";
        // }
    } else if (titleValue) {
        
    }
    // else if (descriptionValue.length === 0) {
    //     descriptionInput.classList.add('warning');
    //     descriptionInput.placeholder = "Can't be left empty";
    // }


    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.isPast)(dueDateInput.value)) {
        dueDateLabel.innerHTML = 'Please select a valid date';
        dueDateLabel.classList.add('warning-label');
        dueDateInput.classList.add('warning');
    }
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isPast: () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(date) {
  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date) < Date.now();
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPast);


/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCategory)
/* harmony export */ });
/* harmony import */ var _todo_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _generateDefaultCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle) {

    //declaring variables
    let display = document.getElementById('display');
    let todo = (0,_todo_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle);
    let existingCategory = document.getElementById(categoryTitle);


    //if display has no categories, create an 'overall' category
    if (display.childElementCount === 0) {

        (0,_generateDefaultCategory__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
                    localStorage.setItem('_category_'+overall.id,  JSON.stringify(overall.id));
                    overall.appendChild(todo);
                } else {
                    (0,_generateDefaultCategory__WEBPACK_IMPORTED_MODULE_1__["default"])(todo);
                }
            } else {
                let overall = document.getElementById('overall');
                if (overall && overall.childElementCount === 1) {
                    overall.remove();
                }
                category.appendChild(title);
                localStorage.setItem('_category_'+title.innerHTML,  JSON.stringify(title.innerHTML));
                category.appendChild(todo);
                display.appendChild(category);
            }
        }
    }
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



function createTodo(classTitle, classDesc, classDate, classPriority, categoryTitle) {
    
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
        (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])(article, classTitle);
    });

    editBtn.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'block');
        (0,_editTask__WEBPACK_IMPORTED_MODULE_1__["default"])(newTodo);
    });

    editBtn.appendChild(editIco);
    completeBtn.appendChild(completeIco);
    iconContainer.append(completeBtn, editBtn);
    footer.append(displayDate, iconContainer);
    article.append(todoTitle, todoDescription, footer);
    

    return article;
};

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ completeTask)
/* harmony export */ });
/* harmony import */ var _checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);


function completeTask(task, title) {
    task.classList.add('completed');
    localStorage.removeItem('_todo_'+title);
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        (0,_checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(category);
    });
};

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkChildren)
/* harmony export */ });
/* harmony import */ var _generateDefaultCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


function checkChildren(category) {
    let display = document.getElementById('display');

    if (category.children.length === 1) {
        localStorage.removeItem('_category_'+category.id);
        console.log(category.id);
        category.remove();
    }

    if (display.children.length === 0) {
        (0,_generateDefaultCategory__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
};

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefaultCat)
/* harmony export */ });
/* harmony import */ var _loadSavedCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _loadSavedTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



function createDefaultCat(todo) {
    let display = document.getElementById('display');

    if (!todo) {
    (0,_loadSavedCategories__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
    
    if (display.childElementCount > 0) {
        if (todo) {
            let category = document.createElement('div');
            category.id = 'overall';
            let title = document.createElement('h2');
            title.innerHTML = 'Overall';
            category.appendChild(title);
            category.appendChild(todo);
            localStorage.setItem('_category_'+category.id,  JSON.stringify(category.id));
            display.appendChild(category);
        }
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);
    }
    
    if (!todo) {
    Object.keys(localStorage).forEach(item => {
        if (item.includes('_todo_')) {
            (0,_loadSavedTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.parse(localStorage.getItem(item)));
        }
    })};
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSavedCategories)
/* harmony export */ });
/* harmony import */ var _DOM_for_loaded_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


function loadSavedCategories() {

    Object.keys(localStorage).forEach(item => {
        if (item.includes('_category_')) {
            (0,_DOM_for_loaded_category__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.parse(localStorage.getItem(item)));
            
        } 
    });
            
    
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateCategoriesDom)
/* harmony export */ });
function generateCategoriesDom(key) {
    let display = document.getElementById('display');
    
    let category = document.createElement('div');
    
    category.id = key;
    
    let title = document.createElement('h2');
    title.innerHTML = key;
    
    category.appendChild(title);
            
    display.appendChild(category);
};

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSavedTodo)
/* harmony export */ });
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


function loadSavedTodo(item) {
    
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
                (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])(article, newTodo.title);
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

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _promptValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _changeTaskPropreties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _checkForExistingTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





function editTask(todo) {
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
    titleInput.placeholder = 'Input title...';
    titleInput.maxLength = 40;
    titleInput.value = todo.title;
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
    descriptionInput.placeholder = 'Input description...';
    descriptionInput.maxLength = 60;
    if (todo.description) {
        descriptionInput.value = todo.description;
    };
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
    if (todo.dueDate) {
        dueDateInput.value = todo.dueDate;
    };

    dueDateLabel.innerHTML = "Due date:";
    dueDatenDiv.append(dueDateLabel, dueDateInput);
    //priority
    let categoryDiv = document.createElement('div');
    let categoryLabel = document.createElement('p');
    let categoryInput = document.createElement('input');

    categoryInput.id = 'categorySelect';
    categoryInput.placeholder = 'Category name';
    categoryInput.type = 'text';
    categoryInput.value = todo.inCategory;

    categoryLabel.innerHTML = "Input category:";

    categoryDiv.append(categoryLabel, categoryInput);
    //category
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
    console.log(todo.priority)
    switch(todo.priority) {
        case 'None':
            console.log('done')
            none.setAttribute('selected', 'selected');
            break;
        
        case 'Low':
            low.setAttribute('selected', 'selected');
            break;
        
        case 'Mid':
            medium.selected = 'selected';
            break;
        
        case 'High':
            high.setAttribute('selected', 'selected');
            break;
        default:
            //code
    }

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
        if (!titleValue || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isPast)(dueDateInput.value)) {
            (0,_promptValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(titleValue, descriptionValue, titleInput, descriptionInput, dueDateInput, dueDateLabel);
        }  else {
           
            
            (0,_changeTaskPropreties__WEBPACK_IMPORTED_MODULE_1__["default"])(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue, todo.title);
            
            //removing background overlay
            let root = document.querySelector(':root');
            root.style.setProperty('--wrapper-display', 'none');
            //passing args to the create category func
            wrapper.removeChild(prompt);
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

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeTaskPropreties)
/* harmony export */ });
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


function changeTaskPropreties(newTitle, newDesc, newDate, newPriority, newCat, oldTitle) {
    let titleElement = document.getElementById('title');
    let parentElement = titleElement.parentElement;

    let descrElement = parentElement.querySelector('#description');
    let dueEelemnt = parentElement.querySelector('.todo-footer').querySelector('p');
    if (titleElement.innerHTML === oldTitle){
        titleElement.innerHTML = newTitle;
        descrElement.innerHTML = newDesc;
        dueEelemnt.innerHTML = newDate;
        (0,_category_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(newTitle, newDesc, newDate, newPriority, newCat);
        parentElement.remove();
        localStorage.removeItem('_todo_'+oldTitle);
    }
}

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkIfTaskExists)
/* harmony export */ });
function checkIfTaskExists(titleValue, titleInput) {
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

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




function generateMain() {
    let wrapper = document.getElementById('wrapper');

    let main = document.createElement('main');
    main.id = 'main';
    wrapper.appendChild(main);
    (0,_aside_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_display_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_category_generator__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAside)
/* harmony export */ });
/* harmony import */ var _changePriorityState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



function generateAside() {
    let main = document.getElementById('main');

    let aside = document.createElement('aside');

    let prioritySection = document.createElement('div');
    prioritySection.classList.add('asideSection');

    let sectionTitle = document.createElement('h2');
    sectionTitle.innerHTML = 'Priority';


    //Creating filters that will display to-dos
    //by their priority
    let noPriority = document.createElement('div');
    let lowPriority = document.createElement('div');
    let mediumPriority = document.createElement('div');
    let highPriority = document.createElement('div');

    //assigning classes
    noPriority.classList.add('menu-item');
    lowPriority.classList.add('menu-item');
    mediumPriority.classList.add('menu-item');
    highPriority.classList.add('menu-item');

    //creating icons
    let noPriorityIco = document.createElement('img');
    let lowPriorityIco = document.createElement('img');
    let mediumPriorityIco = document.createElement('img');
    let highPriorityIco = document.createElement('img');

    noPriorityIco.src = 'imgs/noPriority.png';
    lowPriorityIco.src = 'imgs/lowPriority.png';
    mediumPriorityIco.src = 'imgs/mediumPriority.png';
    highPriorityIco.src = 'imgs/highPriority.png';

    //creating titles
    let noPriorityTitle = document.createElement('h3');
    let lowPriorityTitle = document.createElement('h3');
    let mediumPriorityTitle = document.createElement('h3');
    let highPriorityTitle = document.createElement('h3');

    noPriorityTitle.innerHTML = 'None';
    lowPriorityTitle.innerHTML = 'Low';
    mediumPriorityTitle.innerHTML = 'Mid';
    highPriorityTitle.innerHTML = 'High';

    //adding functions to divs
    let noneSelected = false;
    let lowSelected = false;
    let midSelected = false;
    let highSelected = false;

    noPriority.addEventListener('click', ()=>{
        if (!noneSelected) {
            noneSelected = true;
        } else {
            noneSelected = false;
        };
        (0,_changePriorityState__WEBPACK_IMPORTED_MODULE_0__["default"])(noPriorityTitle.innerHTML, noneSelected);
        (0,_checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    lowPriority.addEventListener('click', ()=>{
        if (!lowSelected) {
            lowSelected = true;
        } else {
            lowSelected = false;
        };
        (0,_changePriorityState__WEBPACK_IMPORTED_MODULE_0__["default"])(lowPriorityTitle.innerHTML, lowSelected);
        (0,_checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    mediumPriority.addEventListener('click', ()=>{
        if (!midSelected) {
            midSelected = true;
        } else {
            midSelected = false;
        };
        (0,_changePriorityState__WEBPACK_IMPORTED_MODULE_0__["default"])(mediumPriorityTitle.innerHTML, midSelected);
        (0,_checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    highPriority.addEventListener('click', ()=>{
        if (!highSelected) {
            highSelected = true;
        } else {
            highSelected = false;
        };
        (0,_changePriorityState__WEBPACK_IMPORTED_MODULE_0__["default"])(highPriorityTitle.innerHTML, highSelected);
        (0,_checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    //appending children
    noPriority.append(noPriorityIco, noPriorityTitle);
    lowPriority.append(lowPriorityIco,lowPriorityTitle);
    mediumPriority.append(mediumPriorityIco,mediumPriorityTitle);
    highPriority.append(highPriorityIco,highPriorityTitle);


    prioritySection.append(sectionTitle,noPriority,lowPriority,mediumPriority,highPriority);

    aside.appendChild(prioritySection);

    main.appendChild(aside);
};

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changePriorityState)
/* harmony export */ });
function changePriorityState(priorityLevel, selected) {

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

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkCatDisplay)
/* harmony export */ });
function checkCatDisplay() {
    let display = document.getElementById('display');
    let allCategories = display.querySelectorAll('div');
    
    
    allCategories.forEach((category)=>{
        let allTodos = category.querySelectorAll('article[style="display: none;"]');
        if (category.querySelectorAll('article').length === allTodos.length) {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    })
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateDisplay)
/* harmony export */ });
function generateDisplay() {
    let main = document.getElementById('main');

    let sectionDisplay = document.createElement('section');
    sectionDisplay.id = 'display';

    let categories = localStorage.getItem('categories');
    if (categories){
        for (let i=0;i<categories.length;i++){
            sectionDisplay.appendChild(categories[i]);
        }
    }

    main.appendChild(sectionDisplay);
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDcEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JEa0Q7QUFDQTtBQUNLO0FBQ3JCO0FBQ2xDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQU07QUFDakMsWUFBWSw2REFBZ0I7QUFDNUIsV0FBVztBQUNYLCtCQUErQixpRUFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hJa0M7QUFDbEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsVUFBVSxtREFBTTtBQUNoQjs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDM0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3pEb0I7QUFDZTtBQUN6RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFnQjtBQUN4QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CLG9FQUFnQjtBQUNwQztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFEMEM7QUFDUjtBQUNsQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pGb0Q7QUFDcEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFhO0FBQ3JCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNWeUQ7QUFDekQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWdCO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2R3RDtBQUNaO0FBQzVDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBYTtBQUN6QjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7QUNwQzhEO0FBQzlEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFxQjtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYjBDO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQVk7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRrRDtBQUNRO0FBQ0g7QUFDckI7QUFDbEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQU07QUFDakMsWUFBWSw2REFBZ0I7QUFDNUIsV0FBVztBQUNYO0FBQ0E7QUFDQSxZQUFZLGlFQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsS2tEO0FBQ2xEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEJlO0FBQ2Y7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Q0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDSjtBQUM1QztBQUNBLDZEQUFjO0FBQ2QsMkRBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaGVhZGVyLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvRG8tY3JlYXRpb24tcHJvbXB0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvbXB0VmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzUGFzdC5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2F0ZWdvcnktZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wbGV0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jaGVja0NhdGVnb3J5Q2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvYWRTYXZlZENhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET00tZm9yLWxvYWRlZC1jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvYWRTYXZlZFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoYW5nZVRhc2tQcm9wcmV0aWVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tGb3JFeGlzdGluZ1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tYWluLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FzaWRlLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoYW5nZVByaW9yaXR5U3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jaGVja0NhdGVnb3J5c0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVQcm9tcHQgZnJvbSBcIi4vdG9Eby1jcmVhdGlvbi1wcm9tcHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICBsZXQgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGV0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCBhZGRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgc21hbGxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGVmdFNpZGUuaWQgPSAnbGVmdC1oZWFkZXInO1xyXG4gICAgcmlnaHRTaWRlLmlkID0gJ3JpZ2h0LWhlYWRlcic7XHJcblxyXG4gICAgbG9nby5ocmVmID0gJyMnO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBcImltZ3MvdG8tZG8tbGlzdC5wbmdcIjtcclxuICAgIGxvZ29JbWcuYWx0ID0gJ2xvZ28nO1xyXG5cclxuICAgIGFwcFRpdGxlLmlubmVySFRNTCA9ICdDeWNsb25lIGNoZWNrJztcclxuICAgIHNtYWxsVGl0bGUuaW5uZXJIVE1MID0gJ0Jsb3cgYXdheSBhbGwgeW91ciB0YXNrcyc7XHJcblxyXG4gICAgYWRkQnRuLmlkID0gJ2FkZEJ0bic7IFxyXG5cclxuICAgIGFkZEljby5zcmMgPSAnaW1ncy9hZGRJY29uLnBuZyc7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGdlbmVyYXRlUHJvbXB0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG5cclxuICAgIHRpdGxlRGl2LmFwcGVuZChhcHBUaXRsZSwgIHNtYWxsVGl0bGUpO1xyXG5cclxuICAgIGxlZnRTaWRlLmFwcGVuZChsb2dvLCB0aXRsZURpdik7XHJcblxyXG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKGFkZEljbyk7XHJcblxyXG4gICAgcmlnaHRTaWRlLmFwcGVuZChhZGRCdG4pO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmQobGVmdFNpZGUsIHJpZ2h0U2lkZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07IiwiaW1wb3J0IHByb21wdFZhbGlkYXRpb24gZnJvbSBcIi4vcHJvbXB0VmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnktZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBjaGVja0lmVGFza0V4aXN0cyBmcm9tIFwiLi9jaGVja0ZvckV4aXN0aW5nVGFza1wiO1xyXG5pbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb21wdC5pZCA9ICdwcm9tcHQnO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gY3JlYXRpbmcgaW5wdXRzIGFuZCBsYWJlbHNcclxuICAgIC8vIHRpdGxlXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IHRpdGxlLi4uJ1xyXG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA0MDtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgdGl0bGU6XCI7XHJcbiAgICAvL2FwcGVuZGluZyB0aXRsZVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCBkZXNjcmlwdGlvbi4uLidcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gNjA7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IFwiU2hvcnQgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuXHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgZGF0ZTpcIjtcclxuICAgIGR1ZURhdGVuRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XHJcbiAgICAvL3ByaW9yaXR5XHJcbiAgICBsZXQgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIGNhdGVnb3J5SW5wdXQuaWQgPSAnY2F0ZWdvcnlTZWxlY3QnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXRlZ29yeSBuYW1lJztcclxuICAgIGNhdGVnb3J5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9IFwiSW5wdXQgY2F0ZWdvcnk6XCI7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgLy9jYXRlZ29yeVxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcclxuICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG5vbmUudGV4dCA9IFwiTm9uZVwiO1xyXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBsb3cudGV4dCA9IFwiTG93XCI7XHJcbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG1lZGl1bS50ZXh0ID0gXCJNaWRcIjtcclxuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGhpZ2gudGV4dCA9IFwiSGlnaFwiO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChub25lKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChsb3cpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG1lZGl1bSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQoaGlnaCk7XHJcblxyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcclxuXHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgLy9idXR0b25cclxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybS5pZCA9ICdjb25maXJtQnRuJztcclxuICAgIGNvbmZpcm0uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcclxuICAgIGNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL3NhdmluZyBmb3JtIGRhdGFcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlWYWx1ZSA9IGNhdGVnb3J5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy9sb2dpY1xyXG4gICAgICAgIGlmICghdGl0bGVWYWx1ZSB8fCBpc1Bhc3QoZHVlRGF0ZUlucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgZHVlRGF0ZUxhYmVsKTtcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRvZXNOb3RFeGlzdCA9IGNoZWNrSWZUYXNrRXhpc3RzKHRpdGxlVmFsdWUsdGl0bGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvZXNOb3RFeGlzdClcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRvZXNOb3RFeGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjcmVhdGVDYXRlZ29yeSh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIGNhdGVnb3J5VmFsdWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9yZW1vdmluZyBiYWNrZ3JvdW5kIG92ZXJsYXlcclxuICAgICAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vcGFzc2luZyBhcmdzIHRvIHRoZSBjcmVhdGUgY2F0ZWdvcnkgZnVuY1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHByb21wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfX0pO1xyXG5cclxuICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsQnRuJztcclxuICAgIGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkRpdi5hcHBlbmQoY2FuY2VsLGNvbmZpcm0pO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgY2F0ZWdvcnlEaXYsIGR1ZURhdGVuRGl2LCBwcmlvcml0eURpdiwgYnRuRGl2KTtcclxuXHJcbiAgICBwcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn07IiwiaW1wb3J0IHsgaXNQYXN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgZHVlRGF0ZUxhYmVsKSB7XHJcbiAgICBpZiAodGl0bGVWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBsZWZ0IGVtcHR5XCI7XHJcbiAgICAgICAgLy8gaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIC8vICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBsZWZ0IGVtcHR5XCI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIGlmICh0aXRsZVZhbHVlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIGlmIChkZXNjcmlwdGlvblZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgaWYgKGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgZGF0ZSc7XHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmctbGFiZWwnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXN0KGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPCBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzUGFzdDtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENhdCBmcm9tIFwiLi9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGNhdGVnb3J5VGl0bGUpIHtcclxuXHJcbiAgICAvL2RlY2xhcmluZyB2YXJpYWJsZXNcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSk7XHJcbiAgICBsZXQgZXhpc3RpbmdDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhdGVnb3J5VGl0bGUpO1xyXG5cclxuXHJcbiAgICAvL2lmIGRpc3BsYXkgaGFzIG5vIGNhdGVnb3JpZXMsIGNyZWF0ZSBhbiAnb3ZlcmFsbCcgY2F0ZWdvcnlcclxuICAgIGlmIChkaXNwbGF5LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGNyZWF0ZURlZmF1bHRDYXQoKTtcclxuXHJcbiAgICAvL2lmIGRpc3BsYXkgaGFzIGFuICdvdmVyYWxsJyBjYXRlZ29yeSwgaGFuZGxlIGNyZWF0aW5nIG5ldyBjYXRlZ29yeVxyXG4gICAgfSBlbHNlIGlmIChkaXNwbGF5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG5cclxuICAgICAgICAvL2lmIHVzZXIgc2VsZWN0ZWQgYW4gZXhpc3RpbmcgY2F0ZWdvcnksIGFkZCBuZXcgdG8tZG8gdG8gdGhhdCBjYXRlZ29yeVxyXG4gICAgICAgIGlmIChleGlzdGluZ0NhdGVnb3J5KSB7XHJcblxyXG4gICAgICAgICAgICBleGlzdGluZ0NhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG8pO1xyXG5cclxuICAgICAgICAvL2lmIHVzZXIgbWFkZSBhIG5ldyBjYXRlZ29yeSwgYWRkIG5ldyB0by1kbyB0byB0aGF0IGNhdGVnb3J5IGFuZCBhc3NpZ25cclxuICAgICAgICAvL2l0IHRvIHRoZSBkaXNwbGF5IGVsZW1lbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmlkID0gY2F0ZWdvcnlUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNhdGVnb3J5VGl0bGU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpcycsIGNhdGVnb3JpZXMpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiBubyBjYXRlZ29yeSBpcyBjaG9zZW4sIGFzc2lnbiB0by1kbyB0byAnb3ZlcmFsbCcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5VGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmVyYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX2NhdGVnb3J5Xycrb3ZlcmFsbC5pZCwgIEpTT04uc3RyaW5naWZ5KG92ZXJhbGwuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyYWxsLmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJhbGwgJiYgb3ZlcmFsbC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJhbGwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX2NhdGVnb3J5XycrdGl0bGUuaW5uZXJIVE1MLCAgSlNPTi5zdHJpbmdpZnkodGl0bGUuaW5uZXJIVE1MKSk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCBjb21wbGV0ZVRhc2sgZnJvbSBcIi4vY29tcGxldGVUYXNrXCI7XHJcbmltcG9ydCBlZGl0VGFzayBmcm9tIFwiLi9lZGl0VGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyhjbGFzc1RpdGxlLCBjbGFzc0Rlc2MsIGNsYXNzRGF0ZSwgY2xhc3NQcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSkge1xyXG4gICAgXHJcbiAgICBjbGFzcyBUb2RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmluQ2F0ZWdvcnkgPSBpbkNhdGVnb3J5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG5vbkVtcHR5Q2F0ZWdvcnkgPSAnJztcclxuXHJcbiAgICBpZiAoY2F0ZWdvcnlUaXRsZSA9PT0gJycpIHtcclxuICAgICAgICBub25FbXB0eUNhdGVnb3J5ID0gJ292ZXJhbGwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub25FbXB0eUNhdGVnb3J5ID0gY2F0ZWdvcnlUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oY2xhc3NUaXRsZSwgY2xhc3NEZXNjLCBjbGFzc0RhdGUsIGNsYXNzUHJpb3JpdHksIG5vbkVtcHR5Q2F0ZWdvcnkpO1xyXG5cclxuICAgIGlmIChjbGFzc1RpdGxlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ190b2RvXycrY2xhc3NUaXRsZSwgSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRE9NIG1hbmlwdWxhdGlvblxyXG4gICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZChuZXdUb2RvLnByaW9yaXR5KTtcclxuXHJcbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRvZG9UaXRsZS5pbm5lckhUTUwgPSBuZXdUb2RvLnRpdGxlO1xyXG4gICAgdG9kb1RpdGxlLmlkID0gJ3RpdGxlJztcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvb3RlcicpO1xyXG5cclxuICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbmV3VG9kby5kZXNjcmlwdGlvbjtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcblxyXG4gICAgbGV0IGRpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGlzcGxheURhdGUuaW5uZXJIVE1MID0gbmV3VG9kby5kdWVEYXRlO1xyXG5cclxuICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbnMnKTtcclxuXHJcbiAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgZWRpdEJ0bi5pZCA9ICdlZGl0QnRuJztcclxuICAgIGNvbXBsZXRlQnRuLmlkID0gJ2NvbXBsZXRlQnRuJztcclxuXHJcbiAgICBsZXQgY29tcGxldGVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbXBsZXRlSWNvLnNyYyA9ICdpbWdzL2NvbXBsZXRlLnBuZyc7XHJcblxyXG4gICAgbGV0IGVkaXRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGVkaXRJY28uc3JjID0gJ2ltZ3MvZWRpdC5wbmcnO1xyXG5cclxuICAgIFxyXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGNvbXBsZXRlVGFzayhhcnRpY2xlLCBjbGFzc1RpdGxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZWRpdFRhc2sobmV3VG9kbyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY28pO1xyXG4gICAgY29tcGxldGVCdG4uYXBwZW5kQ2hpbGQoY29tcGxldGVJY28pO1xyXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmQoY29tcGxldGVCdG4sIGVkaXRCdG4pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChkaXNwbGF5RGF0ZSwgaWNvbkNvbnRhaW5lcik7XHJcbiAgICBhcnRpY2xlLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgZm9vdGVyKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBhcnRpY2xlO1xyXG59OyIsImltcG9ydCBjaGVja0NoaWxkcmVuIGZyb20gXCIuL2NoZWNrQ2F0ZWdvcnlDaGlsZHJlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2ssIHRpdGxlKSB7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ190b2RvXycrdGl0bGUpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5wYXJlbnRFbGVtZW50LmlkKTtcclxuICAgICAgICB0YXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIGNoZWNrQ2hpbGRyZW4oY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZURlZmF1bHRDYXQgZnJvbSBcIi4vZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrQ2hpbGRyZW4oY2F0ZWdvcnkpIHtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuXHJcbiAgICBpZiAoY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19jYXRlZ29yeV8nK2NhdGVnb3J5LmlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeS5pZCk7XHJcbiAgICAgICAgY2F0ZWdvcnkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdENhdCgpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBsb2FkU2F2ZWRDYXRlZ29yaWVzIGZyb20gXCIuL2xvYWRTYXZlZENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IGxvYWRTYXZlZFRvZG8gZnJvbSBcIi4vbG9hZFNhdmVkVG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdENhdCh0b2RvKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgaWYgKCF0b2RvKSB7XHJcbiAgICBsb2FkU2F2ZWRDYXRlZ29yaWVzKCk7XHJcbn1cclxuICAgIFxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgICAgaWYgKHRvZG8pIHtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmlkID0gJ292ZXJhbGwnO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnT3ZlcmFsbCc7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJytjYXRlZ29yeS5pZCwgIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5LmlkKSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnkuaWQgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnT3ZlcmFsbCc7XHJcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIXRvZG8pIHtcclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnX3RvZG9fJykpIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVkVG9kbyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSl9O1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQ2F0ZWdvcmllc0RvbSBmcm9tIFwiLi9ET00tZm9yLWxvYWRlZC1jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNhdmVkQ2F0ZWdvcmllcygpIHtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ19jYXRlZ29yeV8nKSkge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUNhdGVnb3JpZXNEb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yaWVzRG9tKGtleSkge1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgY2F0ZWdvcnkuaWQgPSBrZXk7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBrZXk7XHJcbiAgICBcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxufTsiLCJpbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNhdmVkVG9kbyhpdGVtKSB7XHJcbiAgICBcclxuICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKG5ld1RvZG8ucHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS5pbm5lckhUTUwgPSBuZXdUb2RvLnRpdGxlO1xyXG4gICAgICAgICAgICB0b2RvVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvb3RlcicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IG5ld1RvZG8uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEYXRlLmlubmVySFRNTCA9IG5ld1RvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBlZGl0QnRuLmlkID0gJ2VkaXRCdG4nO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5pZCA9ICdjb21wbGV0ZUJ0bic7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGxldGVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgY29tcGxldGVJY28uc3JjID0gJ2ltZ3MvY29tcGxldGUucG5nJztcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGVkaXRJY28uc3JjID0gJ2ltZ3MvZWRpdC5wbmcnO1xyXG5cclxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVUYXNrKGFydGljbGUsIG5ld1RvZG8udGl0bGUpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdG4uYXBwZW5kQ2hpbGQoY29tcGxldGVJY28pO1xyXG4gICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZChjb21wbGV0ZUJ0biwgZWRpdEJ0bik7XHJcbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmQoZGlzcGxheURhdGUsIGljb25Db250YWluZXIpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgZm9vdGVyKTtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3VG9kby5pbkNhdGVnb3J5KTtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZChhcnRpY2xlKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IiwiaW1wb3J0IHByb21wdFZhbGlkYXRpb24gZnJvbSBcIi4vcHJvbXB0VmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY2hhbmdlVGFza1Byb3ByZXRpZXMgZnJvbSBcIi4vY2hhbmdlVGFza1Byb3ByZXRpZXNcIjtcclxuaW1wb3J0IGNoZWNrSWZUYXNrRXhpc3RzIGZyb20gXCIuL2NoZWNrRm9yRXhpc3RpbmdUYXNrXCI7XHJcbmltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2sodG9kbykge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb21wdC5pZCA9ICdwcm9tcHQnO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gY3JlYXRpbmcgaW5wdXRzIGFuZCBsYWJlbHNcclxuICAgIC8vIHRpdGxlXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IHRpdGxlLi4uJztcclxuICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNDA7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgdGl0bGU6XCI7XHJcbiAgICAvL2FwcGVuZGluZyB0aXRsZVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCBkZXNjcmlwdGlvbi4uLic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDYwO1xyXG4gICAgaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IFwiU2hvcnQgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGlmICh0b2RvLmR1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlOlwiO1xyXG4gICAgZHVlRGF0ZW5EaXYuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgY2F0ZWdvcnlJbnB1dC5pZCA9ICdjYXRlZ29yeVNlbGVjdCc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnBsYWNlaG9sZGVyID0gJ0NhdGVnb3J5IG5hbWUnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC52YWx1ZSA9IHRvZG8uaW5DYXRlZ29yeTtcclxuXHJcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9IFwiSW5wdXQgY2F0ZWdvcnk6XCI7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgLy9jYXRlZ29yeVxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcclxuICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG5vbmUudGV4dCA9IFwiTm9uZVwiO1xyXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBsb3cudGV4dCA9IFwiTG93XCI7XHJcbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG1lZGl1bS50ZXh0ID0gXCJNaWRcIjtcclxuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGhpZ2gudGV4dCA9IFwiSGlnaFwiO1xyXG4gICAgY29uc29sZS5sb2codG9kby5wcmlvcml0eSlcclxuICAgIHN3aXRjaCh0b2RvLnByaW9yaXR5KSB7XHJcbiAgICAgICAgY2FzZSAnTm9uZSc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJylcclxuICAgICAgICAgICAgbm9uZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0xvdyc6XHJcbiAgICAgICAgICAgIGxvdy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ01pZCc6XHJcbiAgICAgICAgICAgIG1lZGl1bS5zZWxlY3RlZCA9ICdzZWxlY3RlZCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0hpZ2gnOlxyXG4gICAgICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb2RlXHJcbiAgICB9XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG5vbmUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGxvdyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobWVkaXVtKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChoaWdoKTtcclxuXHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xyXG5cclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XHJcbiAgICAvL2J1dHRvblxyXG4gICAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtLmlkID0gJ2NvbmZpcm1CdG4nO1xyXG4gICAgY29uZmlybS5pbm5lckhUTUwgPSBcIkNyZWF0ZVwiO1xyXG4gICAgY29uZmlybS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vc2F2aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICAvL2xvZ2ljXHJcbiAgICAgICAgaWYgKCF0aXRsZVZhbHVlIHx8IGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpO1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhbmdlVGFza1Byb3ByZXRpZXModGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBjYXRlZ29yeVZhbHVlLCB0b2RvLnRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgYmFja2dyb3VuZCBvdmVybGF5XHJcbiAgICAgICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAvL3Bhc3NpbmcgYXJncyB0byB0aGUgY3JlYXRlIGNhdGVnb3J5IGZ1bmNcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfX0pO1xyXG5cclxuICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsQnRuJztcclxuICAgIGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkRpdi5hcHBlbmQoY2FuY2VsLGNvbmZpcm0pO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgY2F0ZWdvcnlEaXYsIGR1ZURhdGVuRGl2LCBwcmlvcml0eURpdiwgYnRuRGl2KTtcclxuXHJcbiAgICBwcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlVGFza1Byb3ByZXRpZXMobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5LCBuZXdDYXQsIG9sZFRpdGxlKSB7XHJcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRpdGxlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGxldCBkZXNjckVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgbGV0IGR1ZUVlbGVtbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvb3RlcicpLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgIGlmICh0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID09PSBvbGRUaXRsZSl7XHJcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IG5ld1RpdGxlO1xyXG4gICAgICAgIGRlc2NyRWxlbWVudC5pbm5lckhUTUwgPSBuZXdEZXNjO1xyXG4gICAgICAgIGR1ZUVlbGVtbnQuaW5uZXJIVE1MID0gbmV3RGF0ZTtcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld0NhdCk7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX3RvZG9fJytvbGRUaXRsZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmVGFza0V4aXN0cyh0aXRsZVZhbHVlLCB0aXRsZUlucHV0KSB7XHJcbiAgICBsZXQgYm9vbCA9IHRydWU7XHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCdfdG9kb18nK3RpdGxlVmFsdWUgPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBhbHJlYWR5IGV4aXN0c1wiO1xyXG4gICAgICAgICAgICBib29sID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIHJldHVybiBib29sO1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQXNpZGUgZnJvbSBcIi4vYXNpZGUtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBnZW5lcmF0ZUFzaWRlKCk7XHJcbiAgICBnZW5lcmF0ZURpc3BsYXkoKTtcclxuICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbn07IiwiaW1wb3J0IGNoYW5nZVByaW9yaXR5U3RhdGUgZnJvbSBcIi4vY2hhbmdlUHJpb3JpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgY2hlY2tDYXREaXNwbGF5IGZyb20gXCIuL2NoZWNrQ2F0ZWdvcnlzRGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBc2lkZSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhc2lkZVNlY3Rpb24nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xyXG5cclxuXHJcbiAgICAvL0NyZWF0aW5nIGZpbHRlcnMgdGhhdCB3aWxsIGRpc3BsYXkgdG8tZG9zXHJcbiAgICAvL2J5IHRoZWlyIHByaW9yaXR5XHJcbiAgICBsZXQgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL2Fzc2lnbmluZyBjbGFzc2VzXHJcbiAgICBub1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgICAvL2NyZWF0aW5nIGljb25zXHJcbiAgICBsZXQgbm9Qcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBub1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL25vUHJpb3JpdHkucG5nJztcclxuICAgIGxvd1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2xvd1ByaW9yaXR5LnBuZyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9tZWRpdW1Qcmlvcml0eS5wbmcnO1xyXG4gICAgaGlnaFByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2hpZ2hQcmlvcml0eS5wbmcnO1xyXG5cclxuICAgIC8vY3JlYXRpbmcgdGl0bGVzXHJcbiAgICBsZXQgbm9Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBtZWRpdW1Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdOb25lJztcclxuICAgIGxvd1ByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0xvdyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdNaWQnO1xyXG4gICAgaGlnaFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0hpZ2gnO1xyXG5cclxuICAgIC8vYWRkaW5nIGZ1bmN0aW9ucyB0byBkaXZzXHJcbiAgICBsZXQgbm9uZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBsZXQgbG93U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGxldCBtaWRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGhpZ2hTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIG5vUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGlmICghbm9uZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eVN0YXRlKG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIG5vbmVTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpZiAoIWxvd1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGxvd1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb3dTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlTdGF0ZShsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCwgbG93U2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoZWNrQ2F0RGlzcGxheSgpO1xyXG4gICAgfSk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaWYgKCFtaWRTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBtaWRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWlkU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3RhdGUobWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIG1pZFNlbGVjdGVkKTtcclxuICAgICAgICBjaGVja0NhdERpc3BsYXkoKTtcclxuICAgIH0pO1xyXG4gICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpZiAoIWhpZ2hTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBoaWdoU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlTdGF0ZShoaWdoUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIGhpZ2hTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcblxyXG4gICAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsbm9Qcmlvcml0eSxsb3dQcmlvcml0eSxtZWRpdW1Qcmlvcml0eSxoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHByaW9yaXR5U2VjdGlvbik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhc2lkZSk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlTdGF0ZShwcmlvcml0eUxldmVsLCBzZWxlY3RlZCkge1xyXG5cclxuICAgIGxldCB0b2Rvc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xyXG5cclxuICAgIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xyXG4gICAgICAgIGNhc2UgJ05vbmUnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0xvdyc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdMb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ0xvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdNaWQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NMaXN0LmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTWlkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdNaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnSGlnaCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XHJcbiAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVG9kb3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NhdERpc3BsYXkoKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBsZXQgYWxsQ2F0ZWdvcmllcyA9IGRpc3BsYXkucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSk9PntcclxuICAgICAgICBsZXQgYWxsVG9kb3MgPSBjYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0nKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZScpLmxlbmd0aCA9PT0gYWxsVG9kb3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBzZWN0aW9uRGlzcGxheS5pZCA9ICdkaXNwbGF5JztcclxuXHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJyk7XHJcbiAgICBpZiAoY2F0ZWdvcmllcyl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8Y2F0ZWdvcmllcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgc2VjdGlvbkRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkRpc3BsYXkpO1xyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlci1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlTWFpbiBmcm9tIFwiLi9tYWluLWdlbmVyYXRvclwiO1xyXG5cclxuZ2VuZXJhdGVIZWFkZXIoKTtcclxuZ2VuZXJhdGVNYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
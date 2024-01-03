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
        if (classTitle) {
            let editableTodo = JSON.parse(localStorage.getItem('_todo_'+classTitle));
            (0,_editTask__WEBPACK_IMPORTED_MODULE_1__["default"])(editableTodo);
        } else {
            let todoNameThroughH3 = editBtn.parentElement.parentElement.parentElement.querySelector('h3').innerHTML;
            let editableTodo = JSON.parse(localStorage.getItem('_todo_'+todoNameThroughH3));
            (0,_editTask__WEBPACK_IMPORTED_MODULE_1__["default"])(editableTodo);
        };
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
/* harmony import */ var _checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



function completeTask(task, title) {
    task.classList.add('completed');
    localStorage.removeItem('_todo_'+title);
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        (0,_checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(category);
        // checkCatDisplay();
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
            title.innerHTML = 'overall';
            category.appendChild(title);
            category.appendChild(todo);
            localStorage.setItem('_category_'+category.id,  JSON.stringify(category.id));
            display.appendChild(category);
        }
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'overall';
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
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



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
            });

            editBtn.addEventListener('click', () => {
                let root = document.querySelector(':root');
                root.style.setProperty('--wrapper-display', 'block');
                    let todoNameThroughH3 = editBtn.parentElement.parentElement.parentElement.querySelector('h3').innerHTML;
                    let editableTodo = JSON.parse(localStorage.getItem('_todo_'+todoNameThroughH3));
                    (0,_editTask__WEBPACK_IMPORTED_MODULE_1__["default"])(editableTodo);
            });

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
/* harmony import */ var _checkCategoryChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function changeTaskPropreties(newTitle, newDesc, newDate, newPriority, newCat, oldTitle) {
    let titleElement = document.getElementById('title');
    let parentElement = titleElement.parentElement;

    class Todo {
        constructor (title, description, dueDate, priority, inCategory) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.inCategory = inCategory;
        }
    };

    const newTodo = new Todo(newTitle, newDesc, newDate, newPriority, newCat);

    let descrElement = parentElement.querySelector('#description');
    let dueEelemnt = parentElement.querySelector('.todo-footer').querySelector('p');
    let catTitle = parentElement.parentElement.querySelector('h2').innerHTML;
    if (titleElement.innerHTML === oldTitle){
        titleElement.innerHTML = newTitle;
        descrElement.innerHTML = newDesc;
        dueEelemnt.innerHTML = newDate;
        (0,_category_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(newTitle, newDesc, newDate, newPriority, newCat);
        if (parentElement.parentElement.children === 1) {
            console.log('delete')
        }
        parentElement.parentElement.remove();
        parentElement.remove();
        localStorage.removeItem('_todo_'+oldTitle);
        console.log(catTitle)
        localStorage.removeItem('_category_'+catTitle);
        localStorage.setItem('_todo_'+newTitle, JSON.stringify(newTodo));
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
/* harmony export */   "default": () => (/* binding */ checkCatDisplay)
/* harmony export */ });
function checkCatDisplay() {
    let display = document.getElementById('display');
    let allCategories = display.childNodes;
    
    
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
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
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
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAside)
/* harmony export */ });
/* harmony import */ var _changePriorityState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _changeVisibilityByDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);




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

    //creating due date section
    let dueDateSection = document.createElement('div');
    dueDateSection.classList.add('asideSection');

    let dueDateTitle = document.createElement('h2');
    dueDateTitle.innerHTML = 'Due date';

    let noDueDate = document.createElement('div');
    let dueThisWeek = document.createElement('div');
    let dueToday = document.createElement('div');

    noDueDate.classList.add('menu-item');
    dueThisWeek.classList.add('menu-item');
    dueToday.classList.add('menu-item');

    let noDueDateIco = document.createElement('img');
    let dueThisWeekIco = document.createElement('img');
    let dueTodayIco = document.createElement('img');

    noDueDateIco.src = 'imgs/noDueDate.png';
    dueThisWeekIco.src = 'imgs/weekDueDate.png';
    dueTodayIco.src = 'imgs/todayDueDate.png';

    let noDueDateTitle = document.createElement('h3');
    let dueThisWeekTitle = document.createElement('h3');
    let dueTodayTitle = document.createElement('h3');

    noDueDateTitle.innerHTML = 'None';
    dueThisWeekTitle.innerHTML = 'This week';
    dueThisWeek.id = 'this-week';
    dueTodayTitle.innerHTML = 'Today';


    noDueDate.addEventListener('click', ()=>{
        (0,_changeVisibilityByDate__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

    //appending children
    noPriority.append(noPriorityIco, noPriorityTitle);
    lowPriority.append(lowPriorityIco,lowPriorityTitle);
    mediumPriority.append(mediumPriorityIco,mediumPriorityTitle);
    highPriority.append(highPriorityIco,highPriorityTitle);

    noDueDate.append(noDueDateIco, noDueDateTitle);
    dueThisWeek.append(dueThisWeekIco, dueThisWeekTitle);
    dueToday.append(dueTodayIco, dueTodayTitle);

    prioritySection.append(sectionTitle,noPriority,lowPriority,mediumPriority,highPriority);
    dueDateSection.append(dueDateTitle, noDueDate, dueThisWeek, dueToday);

    aside.append(prioritySection, dueDateSection);

    main.appendChild(aside);
};

/***/ }),
/* 20 */
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
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeVisibilityByDate)
/* harmony export */ });
function changeVisibilityByDate(dueDate){
    let todosList = document.querySelectorAll('.todo');
    todosList.forEach(todo=>{
        let date = todo.querySelector('.todo-footer').querySelector('p');
        
    })
}

/***/ }),
/* 22 */
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
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7OztBQ3JGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTmdEO0FBQ0o7QUFDNUM7QUFDQSw2REFBYztBQUNkLDJEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlYWRlci1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b0RvLWNyZWF0aW9uLXByb21wdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb21wdFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1Bhc3QubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhdGVnb3J5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tDYXRlZ29yeUNoaWxkcmVuLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2FkU2F2ZWRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NLWZvci1sb2FkZWQtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2FkU2F2ZWRUb2RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jaGFuZ2VUYXNrUHJvcHJldGllcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoZWNrRm9yRXhpc3RpbmdUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tDYXRlZ29yeXNEaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFpbi1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hc2lkZS1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jaGFuZ2VQcmlvcml0eVN0YXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hhbmdlVmlzaWJpbGl0eUJ5RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXktZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZW5lcmF0ZVByb21wdCBmcm9tIFwiLi90b0RvLWNyZWF0aW9uLXByb21wdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBhcHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGFkZEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBzbWFsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZWZ0U2lkZS5pZCA9ICdsZWZ0LWhlYWRlcic7XHJcbiAgICByaWdodFNpZGUuaWQgPSAncmlnaHQtaGVhZGVyJztcclxuXHJcbiAgICBsb2dvLmhyZWYgPSAnIyc7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiaW1ncy90by1kby1saXN0LnBuZ1wiO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnbG9nbyc7XHJcblxyXG4gICAgYXBwVGl0bGUuaW5uZXJIVE1MID0gJ0N5Y2xvbmUgY2hlY2snO1xyXG4gICAgc21hbGxUaXRsZS5pbm5lckhUTUwgPSAnQmxvdyBhd2F5IGFsbCB5b3VyIHRhc2tzJztcclxuXHJcbiAgICBhZGRCdG4uaWQgPSAnYWRkQnRuJzsgXHJcblxyXG4gICAgYWRkSWNvLnNyYyA9ICdpbWdzL2FkZEljb24ucG5nJztcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVQcm9tcHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKGFwcFRpdGxlLCAgc21hbGxUaXRsZSk7XHJcblxyXG4gICAgbGVmdFNpZGUuYXBwZW5kKGxvZ28sIHRpdGxlRGl2KTtcclxuXHJcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvKTtcclxuXHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGFkZEJ0bik7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZChsZWZ0U2lkZSwgcmlnaHRTaWRlKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTsiLCJpbXBvcnQgcHJvbXB0VmFsaWRhdGlvbiBmcm9tIFwiLi9wcm9tcHRWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCBjcmVhdGVDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNoZWNrSWZUYXNrRXhpc3RzIGZyb20gXCIuL2NoZWNrRm9yRXhpc3RpbmdUYXNrXCI7XHJcbmltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvbXB0LmlkID0gJ3Byb21wdCc7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBjcmVhdGluZyBpbnB1dHMgYW5kIGxhYmVsc1xyXG4gICAgLy8gdGl0bGVcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgdGl0bGUuLi4nXHJcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IDQwO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRhc2sncyB0aXRsZTpcIjtcclxuICAgIC8vYXBwZW5kaW5nIHRpdGxlXHJcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZGVzY3JpcHRpb25cclxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IGRlc2NyaXB0aW9uLi4uJ1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSA2MDtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJTaG9ydCBkZXNjcmlwdGlvbjpcIjtcclxuICAgIC8vYXBwZW5kaW5nIGRlc2NyaXB0aW9uXHJcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZHVlIGRhdGVcclxuICAgIGxldCBkdWVEYXRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG5cclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlOlwiO1xyXG4gICAgZHVlRGF0ZW5EaXYuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcclxuICAgIC8vY2F0ZWdvcnlcclxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIGNhdGVnb3J5SW5wdXQuaWQgPSAnY2F0ZWdvcnlTZWxlY3QnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXRlZ29yeSBuYW1lJztcclxuICAgIGNhdGVnb3J5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGNhdGVnb3J5SW5wdXQuc2V0QXR0cmlidXRlKCdsaXN0JywgJ2NhdGVnb3J5TGlzdCcpO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJztcclxuICAgIC8vbWFraW5nIGNhdGVnb3J5IGRhdGFsaXN0XHJcbiAgICBsZXQgY2F0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XHJcbiAgICBjYXRMaXN0LmlkID0gJ2NhdGVnb3J5TGlzdCc7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBkaXNwbGF5LmNoaWxkTm9kZXM7XHJcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGNhdGVnb3J5T3B0aW9uLnZhbHVlID0gY2F0ZWdvcnkuaWQ7XHJcbiAgICAgICAgY2F0ZWdvcnlPcHRpb24uaW5uZXJIVE1MID0gY2F0ZWdvcnkuaWQ7XHJcbiAgICAgICAgY2F0TGlzdC5hcHBlbmRDaGlsZChjYXRlZ29yeU9wdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXRlZ29yeUlucHV0LmFwcGVuZENoaWxkKGNhdExpc3QpO1xyXG5cclxuICAgIFxyXG4gICAgY2F0ZWdvcnlMYWJlbC5pbm5lckhUTUwgPSBcIklucHV0IGNhdGVnb3J5OlwiO1xyXG4gICAgXHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQoY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlJbnB1dCk7XHJcbiAgICAvL3ByaW9yaXR5XHJcbiAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHlTZWxlY3QnO1xyXG4gICAgbGV0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbm9uZS50ZXh0ID0gXCJOb25lXCI7XHJcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGxvdy50ZXh0ID0gXCJMb3dcIjtcclxuICAgIGxldCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbWVkaXVtLnRleHQgPSBcIk1pZFwiO1xyXG4gICAgbGV0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgaGlnaC50ZXh0ID0gXCJIaWdoXCI7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG5vbmUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGxvdyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobWVkaXVtKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChoaWdoKTtcclxuXHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xyXG5cclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XHJcbiAgICAvL2J1dHRvblxyXG4gICAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtLmlkID0gJ2NvbmZpcm1CdG4nO1xyXG4gICAgY29uZmlybS5pbm5lckhUTUwgPSBcIkNyZWF0ZVwiO1xyXG4gICAgY29uZmlybS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vc2F2aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICAvL2xvZ2ljXHJcbiAgICAgICAgaWYgKCF0aXRsZVZhbHVlIHx8IGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpO1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZG9lc05vdEV4aXN0ID0gY2hlY2tJZlRhc2tFeGlzdHModGl0bGVWYWx1ZSx0aXRsZUlucHV0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9lc05vdEV4aXN0KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZG9lc05vdEV4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgY2F0ZWdvcnlWYWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgLy9wYXNzaW5nIGFyZ3MgdG8gdGhlIGNyZWF0ZSBjYXRlZ29yeSBmdW5jXHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcblxyXG4gICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWxCdG4nO1xyXG4gICAgY2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbC5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuRGl2LmFwcGVuZChjYW5jZWwsY29uZmlybSk7XHJcblxyXG4gICAgLy9hcHBlbmRpbmcgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBjYXRlZ29yeURpdiwgZHVlRGF0ZW5EaXYsIHByaW9yaXR5RGl2LCBidG5EaXYpO1xyXG5cclxuICAgIHByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvbXB0KTtcclxufTsiLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpIHtcclxuICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICAvLyBpZiAoZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9IGVsc2UgaWYgKHRpdGxlVmFsdWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIGVsc2UgaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBpZiAoaXNQYXN0KGR1ZURhdGVJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCBkYXRlJztcclxuICAgICAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZy1sYWJlbCcpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG8tZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBjcmVhdGVEZWZhdWx0Q2F0IGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSkge1xyXG5cclxuICAgIC8vZGVjbGFyaW5nIHZhcmlhYmxlc1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKTtcclxuICAgIGxldCBleGlzdGluZ0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2F0ZWdvcnlUaXRsZSk7XHJcblxyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgbm8gY2F0ZWdvcmllcywgY3JlYXRlIGFuICdvdmVyYWxsJyBjYXRlZ29yeVxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdENhdCgpO1xyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgYW4gJ292ZXJhbGwnIGNhdGVnb3J5LCBoYW5kbGUgY3JlYXRpbmcgbmV3IGNhdGVnb3J5XHJcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBzZWxlY3RlZCBhbiBleGlzdGluZyBjYXRlZ29yeSwgYWRkIG5ldyB0by1kbyB0byB0aGF0IGNhdGVnb3J5XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nQ2F0ZWdvcnkpIHtcclxuXHJcbiAgICAgICAgICAgIGV4aXN0aW5nQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBtYWRlIGEgbmV3IGNhdGVnb3J5LCBhZGQgbmV3IHRvLWRvIHRvIHRoYXQgY2F0ZWdvcnkgYW5kIGFzc2lnblxyXG4gICAgICAgIC8vaXQgdG8gdGhlIGRpc3BsYXkgZWxlbWVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuaWQgPSBjYXRlZ29yeVRpdGxlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY2F0ZWdvcnlUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmlzJywgY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIG5vIGNhdGVnb3J5IGlzIGNob3NlbiwgYXNzaWduIHRvLWRvIHRvICdvdmVyYWxsJyBjYXRlZ29yeVxyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlUaXRsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92ZXJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJytvdmVyYWxsLmlkLCAgSlNPTi5zdHJpbmdpZnkob3ZlcmFsbC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJhbGwuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURlZmF1bHRDYXQodG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmFsbCAmJiBvdmVyYWxsLmNoaWxkRWxlbWVudENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmFsbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJyt0aXRsZS5pbm5lckhUTUwsICBKU09OLnN0cmluZ2lmeSh0aXRsZS5pbm5lckhUTUwpKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGNvbXBsZXRlVGFzayBmcm9tIFwiLi9jb21wbGV0ZVRhc2tcIjtcclxuaW1wb3J0IGVkaXRUYXNrIGZyb20gXCIuL2VkaXRUYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKGNsYXNzVGl0bGUsIGNsYXNzRGVzYywgY2xhc3NEYXRlLCBjbGFzc1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKSB7XHJcbiAgICBcclxuICAgIGNsYXNzIFRvZG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5DYXRlZ29yeSA9IGluQ2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgbm9uRW1wdHlDYXRlZ29yeSA9ICcnO1xyXG5cclxuICAgIGlmIChjYXRlZ29yeVRpdGxlID09PSAnJykge1xyXG4gICAgICAgIG5vbkVtcHR5Q2F0ZWdvcnkgPSAnb3ZlcmFsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vbkVtcHR5Q2F0ZWdvcnkgPSBjYXRlZ29yeVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhjbGFzc1RpdGxlLCBjbGFzc0Rlc2MsIGNsYXNzRGF0ZSwgY2xhc3NQcmlvcml0eSwgbm9uRW1wdHlDYXRlZ29yeSk7XHJcblxyXG4gICAgaWYgKGNsYXNzVGl0bGUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX3RvZG9fJytjbGFzc1RpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ET00gbWFuaXB1bGF0aW9uXHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKG5ld1RvZG8ucHJpb3JpdHkpO1xyXG5cclxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IG5ld1RvZG8udGl0bGU7XHJcbiAgICB0b2RvVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJyk7XHJcblxyXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBuZXdUb2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXNwbGF5RGF0ZS5pbm5lckhUTUwgPSBuZXdUb2RvLmR1ZURhdGU7XHJcblxyXG4gICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBlZGl0QnRuLmlkID0gJ2VkaXRCdG4nO1xyXG4gICAgY29tcGxldGVCdG4uaWQgPSAnY29tcGxldGVCdG4nO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcGxldGVJY28uc3JjID0gJ2ltZ3MvY29tcGxldGUucG5nJztcclxuXHJcbiAgICBsZXQgZWRpdEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWRpdEljby5zcmMgPSAnaW1ncy9lZGl0LnBuZyc7XHJcblxyXG4gICAgXHJcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29tcGxldGVUYXNrKGFydGljbGUsIGNsYXNzVGl0bGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBpZiAoY2xhc3NUaXRsZSkge1xyXG4gICAgICAgICAgICBsZXQgZWRpdGFibGVUb2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX3RvZG9fJytjbGFzc1RpdGxlKSk7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrKGVkaXRhYmxlVG9kbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRvZG9OYW1lVGhyb3VnaEgzID0gZWRpdEJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgbGV0IGVkaXRhYmxlVG9kbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ190b2RvXycrdG9kb05hbWVUaHJvdWdoSDMpKTtcclxuICAgICAgICAgICAgZWRpdFRhc2soZWRpdGFibGVUb2RvKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvKTtcclxuICAgIGNvbXBsZXRlQnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvKTtcclxuICAgIGljb25Db250YWluZXIuYXBwZW5kKGNvbXBsZXRlQnRuLCBlZGl0QnRuKTtcclxuICAgIGZvb3Rlci5hcHBlbmQoZGlzcGxheURhdGUsIGljb25Db250YWluZXIpO1xyXG4gICAgYXJ0aWNsZS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIGZvb3Rlcik7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxufTsiLCJpbXBvcnQgY2hlY2tDaGlsZHJlbiBmcm9tIFwiLi9jaGVja0NhdGVnb3J5Q2hpbGRyZW5cIjtcclxuaW1wb3J0IGNoZWNrQ2F0RGlzcGxheSBmcm9tIFwiLi9jaGVja0NhdGVnb3J5c0Rpc3BsYXlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrLCB0aXRsZSkge1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfdG9kb18nK3RpdGxlKTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2sucGFyZW50RWxlbWVudC5pZCk7XHJcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcclxuICAgICAgICBjaGVja0NoaWxkcmVuKGNhdGVnb3J5KTtcclxuICAgICAgICAvLyBjaGVja0NhdERpc3BsYXkoKTtcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBjcmVhdGVEZWZhdWx0Q2F0IGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NoaWxkcmVuKGNhdGVnb3J5KSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdfY2F0ZWdvcnlfJytjYXRlZ29yeS5pZCk7XHJcbiAgICAgICAgY2F0ZWdvcnkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdENhdCgpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBsb2FkU2F2ZWRDYXRlZ29yaWVzIGZyb20gXCIuL2xvYWRTYXZlZENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IGxvYWRTYXZlZFRvZG8gZnJvbSBcIi4vbG9hZFNhdmVkVG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdENhdCh0b2RvKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgaWYgKCF0b2RvKSB7XHJcbiAgICBsb2FkU2F2ZWRDYXRlZ29yaWVzKCk7XHJcbn1cclxuICAgIFxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgICAgaWYgKHRvZG8pIHtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmlkID0gJ292ZXJhbGwnO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJytjYXRlZ29yeS5pZCwgIEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5LmlkKSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnkuaWQgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIXRvZG8pIHtcclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnX3RvZG9fJykpIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVkVG9kbyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSl9O1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQ2F0ZWdvcmllc0RvbSBmcm9tIFwiLi9ET00tZm9yLWxvYWRlZC1jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNhdmVkQ2F0ZWdvcmllcygpIHtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ19jYXRlZ29yeV8nKSkge1xyXG4gICAgICAgICAgICBnZW5lcmF0ZUNhdGVnb3JpZXNEb20oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yaWVzRG9tKGtleSkge1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgY2F0ZWdvcnkuaWQgPSBrZXk7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBrZXk7XHJcbiAgICBcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxufTsiLCJpbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xyXG5pbXBvcnQgZWRpdFRhc2sgZnJvbSBcIi4vZWRpdFRhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTYXZlZFRvZG8oaXRlbSkge1xyXG4gICAgXHJcbiAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XHJcbiAgICAgICAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZChuZXdUb2RvLnByaW9yaXR5KTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgICAgICB0b2RvVGl0bGUuaW5uZXJIVE1MID0gbmV3VG9kby50aXRsZTtcclxuICAgICAgICAgICAgdG9kb1RpdGxlLmlkID0gJ3RpdGxlJztcclxuICAgICAgICAgICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb290ZXInKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBuZXdUb2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpc3BsYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBkaXNwbGF5RGF0ZS5pbm5lckhUTUwgPSBuZXdUb2RvLmR1ZURhdGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbnMnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAgICAgZWRpdEJ0bi5pZCA9ICdlZGl0QnRuJztcclxuICAgICAgICAgICAgY29tcGxldGVCdG4uaWQgPSAnY29tcGxldGVCdG4nO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlSWNvLnNyYyA9ICdpbWdzL2NvbXBsZXRlLnBuZyc7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWRpdEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBlZGl0SWNvLnNyYyA9ICdpbWdzL2VkaXQucG5nJztcclxuXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzayhhcnRpY2xlLCBuZXdUb2RvLnRpdGxlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb05hbWVUaHJvdWdoSDMgPSBlZGl0QnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0YWJsZVRvZG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfdG9kb18nK3RvZG9OYW1lVGhyb3VnaEgzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRhc2soZWRpdGFibGVUb2RvKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY28pO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZUljbyk7XHJcbiAgICAgICAgICAgIGljb25Db250YWluZXIuYXBwZW5kKGNvbXBsZXRlQnRuLCBlZGl0QnRuKTtcclxuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZChkaXNwbGF5RGF0ZSwgaWNvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBmb290ZXIpO1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdUb2RvLmluQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kKGFydGljbGUpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0iLCJpbXBvcnQgcHJvbXB0VmFsaWRhdGlvbiBmcm9tIFwiLi9wcm9tcHRWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCBjaGFuZ2VUYXNrUHJvcHJldGllcyBmcm9tIFwiLi9jaGFuZ2VUYXNrUHJvcHJldGllc1wiO1xyXG5pbXBvcnQgY2hlY2tJZlRhc2tFeGlzdHMgZnJvbSBcIi4vY2hlY2tGb3JFeGlzdGluZ1Rhc2tcIjtcclxuaW1wb3J0IHsgaXNQYXN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlZGl0VGFzayh0b2RvKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvbXB0LmlkID0gJ3Byb21wdCc7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBjcmVhdGluZyBpbnB1dHMgYW5kIGxhYmVsc1xyXG4gICAgLy8gdGl0bGVcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgdGl0bGUuLi4nO1xyXG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA0MDtcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRhc2sncyB0aXRsZTpcIjtcclxuICAgIC8vYXBwZW5kaW5nIHRpdGxlXHJcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZGVzY3JpcHRpb25cclxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IGRlc2NyaXB0aW9uLi4uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gNjA7XHJcbiAgICBpZiAodG9kby5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgfTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJTaG9ydCBkZXNjcmlwdGlvbjpcIjtcclxuICAgIC8vYXBwZW5kaW5nIGRlc2NyaXB0aW9uXHJcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZHVlIGRhdGVcclxuICAgIGxldCBkdWVEYXRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gICAgaWYgKHRvZG8uZHVlRGF0ZSkge1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIH07XHJcblxyXG4gICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIGRhdGU6XCI7XHJcbiAgICBkdWVEYXRlbkRpdi5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xyXG4gICAgLy9wcmlvcml0eVxyXG4gICAgbGV0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBjYXRlZ29yeUlucHV0LmlkID0gJ2NhdGVnb3J5U2VsZWN0JztcclxuICAgIGNhdGVnb3J5SW5wdXQucGxhY2Vob2xkZXIgPSAnQ2F0ZWdvcnkgbmFtZSc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnZhbHVlID0gdG9kby5pbkNhdGVnb3J5O1xyXG5cclxuICAgIGNhdGVnb3J5TGFiZWwuaW5uZXJIVE1MID0gXCJJbnB1dCBjYXRlZ29yeTpcIjtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQoY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlJbnB1dCk7XHJcbiAgICAvL2NhdGVnb3J5XHJcbiAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHlTZWxlY3QnO1xyXG4gICAgbGV0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbm9uZS50ZXh0ID0gXCJOb25lXCI7XHJcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGxvdy50ZXh0ID0gXCJMb3dcIjtcclxuICAgIGxldCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbWVkaXVtLnRleHQgPSBcIk1pZFwiO1xyXG4gICAgbGV0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgaGlnaC50ZXh0ID0gXCJIaWdoXCI7XHJcbiAgICBzd2l0Y2godG9kby5wcmlvcml0eSkge1xyXG4gICAgICAgIGNhc2UgJ05vbmUnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpXHJcbiAgICAgICAgICAgIG5vbmUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdMb3cnOlxyXG4gICAgICAgICAgICBsb3cuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdNaWQnOlxyXG4gICAgICAgICAgICBtZWRpdW0uc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdIaWdoJzpcclxuICAgICAgICAgICAgaGlnaC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vY29kZVxyXG4gICAgfVxyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChub25lKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChsb3cpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG1lZGl1bSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQoaGlnaCk7XHJcblxyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcclxuXHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgLy9idXR0b25cclxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybS5pZCA9ICdjb25maXJtQnRuJztcclxuICAgIGNvbmZpcm0uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcclxuICAgIGNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL3NhdmluZyBmb3JtIGRhdGFcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlWYWx1ZSA9IGNhdGVnb3J5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy9sb2dpY1xyXG4gICAgICAgIGlmICghdGl0bGVWYWx1ZSB8fCBpc1Bhc3QoZHVlRGF0ZUlucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgZHVlRGF0ZUxhYmVsKTtcclxuICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNoYW5nZVRhc2tQcm9wcmV0aWVzKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgY2F0ZWdvcnlWYWx1ZSwgdG9kby50aXRsZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgLy9wYXNzaW5nIGFyZ3MgdG8gdGhlIGNyZWF0ZSBjYXRlZ29yeSBmdW5jXHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH19KTtcclxuXHJcbiAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbEJ0bic7XHJcbiAgICBjYW5jZWwudHlwZSA9ICdidXR0b24nO1xyXG4gICAgY2FuY2VsLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHByb21wdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5EaXYuYXBwZW5kKGNhbmNlbCxjb25maXJtKTtcclxuXHJcbiAgICAvL2FwcGVuZGluZyB0byBmb3JtXHJcbiAgICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIGNhdGVnb3J5RGl2LCBkdWVEYXRlbkRpdiwgcHJpb3JpdHlEaXYsIGJ0bkRpdik7XHJcblxyXG4gICAgcHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9tcHQpO1xyXG59OyIsImltcG9ydCBjcmVhdGVDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNoZWNrQ2hpbGRyZW4gZnJvbSBcIi4vY2hlY2tDYXRlZ29yeUNoaWxkcmVuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VUYXNrUHJvcHJldGllcyhuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld0NhdCwgb2xkVGl0bGUpIHtcclxuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgY2xhc3MgVG9kbyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGluQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgdGhpcy5pbkNhdGVnb3J5ID0gaW5DYXRlZ29yeTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld0NhdCk7XHJcblxyXG4gICAgbGV0IGRlc2NyRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBsZXQgZHVlRWVsZW1udCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZm9vdGVyJykucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgbGV0IGNhdFRpdGxlID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJIVE1MO1xyXG4gICAgaWYgKHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPT09IG9sZFRpdGxlKXtcclxuICAgICAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gbmV3VGl0bGU7XHJcbiAgICAgICAgZGVzY3JFbGVtZW50LmlubmVySFRNTCA9IG5ld0Rlc2M7XHJcbiAgICAgICAgZHVlRWVsZW1udC5pbm5lckhUTUwgPSBuZXdEYXRlO1xyXG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5KG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSwgbmV3Q2F0KTtcclxuICAgICAgICBpZiAocGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX3RvZG9fJytvbGRUaXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2F0VGl0bGUpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ19jYXRlZ29yeV8nK2NhdFRpdGxlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX3RvZG9fJytuZXdUaXRsZSwgSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tJZlRhc2tFeGlzdHModGl0bGVWYWx1ZSwgdGl0bGVJbnB1dCkge1xyXG4gICAgbGV0IGJvb2wgPSB0cnVlO1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICgnX3RvZG9fJyt0aXRsZVZhbHVlID09PSBpdGVtKSB7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2sgYWxyZWFkeSBleGlzdHNcIjtcclxuICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICByZXR1cm4gYm9vbDtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrQ2F0RGlzcGxheSgpIHtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuICAgIGxldCBhbGxDYXRlZ29yaWVzID0gZGlzcGxheS5jaGlsZE5vZGVzO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGFsbENhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpPT57XHJcbiAgICAgICAgbGV0IGFsbFRvZG9zID0gY2F0ZWdvcnkucXVlcnlTZWxlY3RvckFsbCgnYXJ0aWNsZVtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdJyk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGUnKS5sZW5ndGggPT09IGFsbFRvZG9zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVBc2lkZSBmcm9tIFwiLi9hc2lkZS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlRGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnktZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZU1haW4oKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlkID0gJ21haW4nO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGdlbmVyYXRlQXNpZGUoKTtcclxuICAgIGdlbmVyYXRlRGlzcGxheSgpO1xyXG4gICAgY3JlYXRlQ2F0ZWdvcnkoKTtcclxufTsiLCJpbXBvcnQgY2hhbmdlUHJpb3JpdHlTdGF0ZSBmcm9tIFwiLi9jaGFuZ2VQcmlvcml0eVN0YXRlXCI7XHJcbmltcG9ydCBjaGVja0NhdERpc3BsYXkgZnJvbSBcIi4vY2hlY2tDYXRlZ29yeXNEaXNwbGF5XCI7XHJcbmltcG9ydCBjaGFuZ2VWaXNpYmlsaXR5QnlEYXRlIGZyb20gXCIuL2NoYW5nZVZpc2liaWxpdHlCeURhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQXNpZGUoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXNpZGVTZWN0aW9uJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcclxuXHJcblxyXG4gICAgLy9DcmVhdGluZyBmaWx0ZXJzIHRoYXQgd2lsbCBkaXNwbGF5IHRvLWRvc1xyXG4gICAgLy9ieSB0aGVpciBwcmlvcml0eVxyXG4gICAgbGV0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hc3NpZ25pbmcgY2xhc3Nlc1xyXG4gICAgbm9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBpY29uc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9ub1ByaW9yaXR5LnBuZyc7XHJcbiAgICBsb3dQcmlvcml0eUljby5zcmMgPSAnaW1ncy9sb3dQcmlvcml0eS5wbmcnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlJY28uc3JjID0gJ2ltZ3MvbWVkaXVtUHJpb3JpdHkucG5nJztcclxuICAgIGhpZ2hQcmlvcml0eUljby5zcmMgPSAnaW1ncy9oaWdoUHJpb3JpdHkucG5nJztcclxuXHJcbiAgICAvL2NyZWF0aW5nIHRpdGxlc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbG93UHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTm9uZSc7XHJcbiAgICBsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdMb3cnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTWlkJztcclxuICAgIGhpZ2hQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdIaWdoJztcclxuXHJcbiAgICAvL2FkZGluZyBmdW5jdGlvbnMgdG8gZGl2c1xyXG4gICAgbGV0IG5vbmVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGxvd1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBsZXQgbWlkU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGxldCBoaWdoU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBub1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpZiAoIW5vbmVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBub25lU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlTdGF0ZShub1ByaW9yaXR5VGl0bGUuaW5uZXJIVE1MLCBub25lU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoZWNrQ2F0RGlzcGxheSgpO1xyXG4gICAgfSk7XHJcbiAgICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaWYgKCFsb3dTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBsb3dTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG93U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3RhdGUobG93UHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIGxvd1NlbGVjdGVkKTtcclxuICAgICAgICBjaGVja0NhdERpc3BsYXkoKTtcclxuICAgIH0pO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGlmICghbWlkU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgbWlkU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1pZFNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eVN0YXRlKG1lZGl1bVByaW9yaXR5VGl0bGUuaW5uZXJIVE1MLCBtaWRTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIGhpZ2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaWYgKCFoaWdoU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgaGlnaFNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoaWdoU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3RhdGUoaGlnaFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MLCBoaWdoU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoZWNrQ2F0RGlzcGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBkdWUgZGF0ZSBzZWN0aW9uXHJcbiAgICBsZXQgZHVlRGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGR1ZURhdGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FzaWRlU2VjdGlvbicpO1xyXG5cclxuICAgIGxldCBkdWVEYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZHVlRGF0ZVRpdGxlLmlubmVySFRNTCA9ICdEdWUgZGF0ZSc7XHJcblxyXG4gICAgbGV0IG5vRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGR1ZVRoaXNXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBub0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBkdWVUaGlzV2Vlay5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGR1ZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG5cclxuICAgIGxldCBub0R1ZURhdGVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBkdWVUaGlzV2Vla0ljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IGR1ZVRvZGF5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbm9EdWVEYXRlSWNvLnNyYyA9ICdpbWdzL25vRHVlRGF0ZS5wbmcnO1xyXG4gICAgZHVlVGhpc1dlZWtJY28uc3JjID0gJ2ltZ3Mvd2Vla0R1ZURhdGUucG5nJztcclxuICAgIGR1ZVRvZGF5SWNvLnNyYyA9ICdpbWdzL3RvZGF5RHVlRGF0ZS5wbmcnO1xyXG5cclxuICAgIGxldCBub0R1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgZHVlVGhpc1dlZWtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgZHVlVG9kYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbm9EdWVEYXRlVGl0bGUuaW5uZXJIVE1MID0gJ05vbmUnO1xyXG4gICAgZHVlVGhpc1dlZWtUaXRsZS5pbm5lckhUTUwgPSAnVGhpcyB3ZWVrJztcclxuICAgIGR1ZVRoaXNXZWVrLmlkID0gJ3RoaXMtd2Vlayc7XHJcbiAgICBkdWVUb2RheVRpdGxlLmlubmVySFRNTCA9ICdUb2RheSc7XHJcblxyXG5cclxuICAgIG5vRHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY2hhbmdlVmlzaWJpbGl0eUJ5RGF0ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcbiAgICBub0R1ZURhdGUuYXBwZW5kKG5vRHVlRGF0ZUljbywgbm9EdWVEYXRlVGl0bGUpO1xyXG4gICAgZHVlVGhpc1dlZWsuYXBwZW5kKGR1ZVRoaXNXZWVrSWNvLCBkdWVUaGlzV2Vla1RpdGxlKTtcclxuICAgIGR1ZVRvZGF5LmFwcGVuZChkdWVUb2RheUljbywgZHVlVG9kYXlUaXRsZSk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsbm9Qcmlvcml0eSxsb3dQcmlvcml0eSxtZWRpdW1Qcmlvcml0eSxoaWdoUHJpb3JpdHkpO1xyXG4gICAgZHVlRGF0ZVNlY3Rpb24uYXBwZW5kKGR1ZURhdGVUaXRsZSwgbm9EdWVEYXRlLCBkdWVUaGlzV2VlaywgZHVlVG9kYXkpO1xyXG5cclxuICAgIGFzaWRlLmFwcGVuZChwcmlvcml0eVNlY3Rpb24sIGR1ZURhdGVTZWN0aW9uKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFzaWRlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eVN0YXRlKHByaW9yaXR5TGV2ZWwsIHNlbGVjdGVkKSB7XHJcblxyXG4gICAgbGV0IHRvZG9zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvJyk7XHJcblxyXG4gICAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XHJcbiAgICAgICAgY2FzZSAnTm9uZSc6XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdG9kb3NMaXN0LmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdOb25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdG9kb3NMaXN0LmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdOb25lJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnTG93JzpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ0xvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NMaXN0LmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTG93JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ01pZCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdNaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ01pZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdIaWdoJzpcclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ0hpZ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ0hpZ2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvL2NvZGVcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWQnKTtcclxuICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUb2Rvcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZVZpc2liaWxpdHlCeURhdGUoZHVlRGF0ZSl7XHJcbiAgICBsZXQgdG9kb3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8nKTtcclxuICAgIHRvZG9zTGlzdC5mb3JFYWNoKHRvZG89PntcclxuICAgICAgICBsZXQgZGF0ZSA9IHRvZG8ucXVlcnlTZWxlY3RvcignLnRvZG8tZm9vdGVyJykucXVlcnlTZWxlY3RvcigncCcpO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBzZWN0aW9uRGlzcGxheS5pZCA9ICdkaXNwbGF5JztcclxuXHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJyk7XHJcbiAgICBpZiAoY2F0ZWdvcmllcyl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8Y2F0ZWdvcmllcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgc2VjdGlvbkRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkRpc3BsYXkpO1xyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlci1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlTWFpbiBmcm9tIFwiLi9tYWluLWdlbmVyYXRvclwiO1xyXG5cclxuZ2VuZXJhdGVIZWFkZXIoKTtcclxuZ2VuZXJhdGVNYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
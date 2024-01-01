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
/* harmony import */ var _checkForExistingTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
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
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



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
/* harmony import */ var _checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



function completeTask(task, title) {
    task.classList.add('completed');
    localStorage.removeItem('_todo_'+title);
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        (0,_checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(category);
        (0,_checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _promptValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _changeTaskPropreties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _checkForExistingTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
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
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAside)
/* harmony export */ });
/* harmony import */ var _changePriorityState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _checkCategorysDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05nRDtBQUNKO0FBQzVDO0FBQ0EsNkRBQWM7QUFDZCwyREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9oZWFkZXItZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9Eby1jcmVhdGlvbi1wcm9tcHQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9tcHRWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNQYXN0Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYXRlZ29yeS1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoZWNrQ2F0ZWdvcnlDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9hZFNhdmVkQ2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTS1mb3ItbG9hZGVkLWNhdGVnb3J5LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9hZFNhdmVkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NoZWNrQ2F0ZWdvcnlzRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hhbmdlVGFza1Byb3ByZXRpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jaGVja0ZvckV4aXN0aW5nVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21haW4tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvYXNpZGUtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hhbmdlUHJpb3JpdHlTdGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXktZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZW5lcmF0ZVByb21wdCBmcm9tIFwiLi90b0RvLWNyZWF0aW9uLXByb21wdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBhcHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGFkZEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBzbWFsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZWZ0U2lkZS5pZCA9ICdsZWZ0LWhlYWRlcic7XHJcbiAgICByaWdodFNpZGUuaWQgPSAncmlnaHQtaGVhZGVyJztcclxuXHJcbiAgICBsb2dvLmhyZWYgPSAnIyc7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiaW1ncy90by1kby1saXN0LnBuZ1wiO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnbG9nbyc7XHJcblxyXG4gICAgYXBwVGl0bGUuaW5uZXJIVE1MID0gJ0N5Y2xvbmUgY2hlY2snO1xyXG4gICAgc21hbGxUaXRsZS5pbm5lckhUTUwgPSAnQmxvdyBhd2F5IGFsbCB5b3VyIHRhc2tzJztcclxuXHJcbiAgICBhZGRCdG4uaWQgPSAnYWRkQnRuJzsgXHJcblxyXG4gICAgYWRkSWNvLnNyYyA9ICdpbWdzL2FkZEljb24ucG5nJztcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVQcm9tcHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKGFwcFRpdGxlLCAgc21hbGxUaXRsZSk7XHJcblxyXG4gICAgbGVmdFNpZGUuYXBwZW5kKGxvZ28sIHRpdGxlRGl2KTtcclxuXHJcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvKTtcclxuXHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGFkZEJ0bik7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZChsZWZ0U2lkZSwgcmlnaHRTaWRlKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTsiLCJpbXBvcnQgcHJvbXB0VmFsaWRhdGlvbiBmcm9tIFwiLi9wcm9tcHRWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCBjcmVhdGVDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNoZWNrSWZUYXNrRXhpc3RzIGZyb20gXCIuL2NoZWNrRm9yRXhpc3RpbmdUYXNrXCI7XHJcbmltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvbXB0LmlkID0gJ3Byb21wdCc7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBjcmVhdGluZyBpbnB1dHMgYW5kIGxhYmVsc1xyXG4gICAgLy8gdGl0bGVcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgdGl0bGUuLi4nXHJcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IDQwO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRhc2sncyB0aXRsZTpcIjtcclxuICAgIC8vYXBwZW5kaW5nIHRpdGxlXHJcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZGVzY3JpcHRpb25cclxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IGRlc2NyaXB0aW9uLi4uJ1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSA2MDtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJTaG9ydCBkZXNjcmlwdGlvbjpcIjtcclxuICAgIC8vYXBwZW5kaW5nIGRlc2NyaXB0aW9uXHJcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZHVlIGRhdGVcclxuICAgIGxldCBkdWVEYXRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG5cclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlOlwiO1xyXG4gICAgZHVlRGF0ZW5EaXYuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgY2F0ZWdvcnlJbnB1dC5pZCA9ICdjYXRlZ29yeVNlbGVjdCc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnBsYWNlaG9sZGVyID0gJ0NhdGVnb3J5IG5hbWUnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG5cclxuICAgIGNhdGVnb3J5TGFiZWwuaW5uZXJIVE1MID0gXCJJbnB1dCBjYXRlZ29yeTpcIjtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQoY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlJbnB1dCk7XHJcbiAgICAvL2NhdGVnb3J5XHJcbiAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHlTZWxlY3QnO1xyXG4gICAgbGV0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbm9uZS50ZXh0ID0gXCJOb25lXCI7XHJcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGxvdy50ZXh0ID0gXCJMb3dcIjtcclxuICAgIGxldCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbWVkaXVtLnRleHQgPSBcIk1pZFwiO1xyXG4gICAgbGV0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgaGlnaC50ZXh0ID0gXCJIaWdoXCI7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG5vbmUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGxvdyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobWVkaXVtKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChoaWdoKTtcclxuXHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xyXG5cclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XHJcbiAgICAvL2J1dHRvblxyXG4gICAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtLmlkID0gJ2NvbmZpcm1CdG4nO1xyXG4gICAgY29uZmlybS5pbm5lckhUTUwgPSBcIkNyZWF0ZVwiO1xyXG4gICAgY29uZmlybS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vc2F2aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICAvL2xvZ2ljXHJcbiAgICAgICAgaWYgKCF0aXRsZVZhbHVlIHx8IGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpO1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZG9lc05vdEV4aXN0ID0gY2hlY2tJZlRhc2tFeGlzdHModGl0bGVWYWx1ZSx0aXRsZUlucHV0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9lc05vdEV4aXN0KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZG9lc05vdEV4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgY2F0ZWdvcnlWYWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgLy9wYXNzaW5nIGFyZ3MgdG8gdGhlIGNyZWF0ZSBjYXRlZ29yeSBmdW5jXHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9fSk7XHJcblxyXG4gICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWxCdG4nO1xyXG4gICAgY2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbC5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuRGl2LmFwcGVuZChjYW5jZWwsY29uZmlybSk7XHJcblxyXG4gICAgLy9hcHBlbmRpbmcgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBjYXRlZ29yeURpdiwgZHVlRGF0ZW5EaXYsIHByaW9yaXR5RGl2LCBidG5EaXYpO1xyXG5cclxuICAgIHByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvbXB0KTtcclxufTsiLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpIHtcclxuICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICAvLyBpZiAoZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICB9IGVsc2UgaWYgKHRpdGxlVmFsdWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIGVsc2UgaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBpZiAoaXNQYXN0KGR1ZURhdGVJbnB1dC52YWx1ZSkpIHtcclxuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCBkYXRlJztcclxuICAgICAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZy1sYWJlbCcpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogY29uc3QgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Bhc3QoZGF0ZSkge1xuICByZXR1cm4gK3RvRGF0ZShkYXRlKSA8IERhdGUubm93KCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNQYXN0O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG8tZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBjcmVhdGVEZWZhdWx0Q2F0IGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSkge1xyXG5cclxuICAgIC8vZGVjbGFyaW5nIHZhcmlhYmxlc1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKTtcclxuICAgIGxldCBleGlzdGluZ0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2F0ZWdvcnlUaXRsZSk7XHJcblxyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgbm8gY2F0ZWdvcmllcywgY3JlYXRlIGFuICdvdmVyYWxsJyBjYXRlZ29yeVxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdENhdCgpO1xyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgYW4gJ292ZXJhbGwnIGNhdGVnb3J5LCBoYW5kbGUgY3JlYXRpbmcgbmV3IGNhdGVnb3J5XHJcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBzZWxlY3RlZCBhbiBleGlzdGluZyBjYXRlZ29yeSwgYWRkIG5ldyB0by1kbyB0byB0aGF0IGNhdGVnb3J5XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nQ2F0ZWdvcnkpIHtcclxuXHJcbiAgICAgICAgICAgIGV4aXN0aW5nQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBtYWRlIGEgbmV3IGNhdGVnb3J5LCBhZGQgbmV3IHRvLWRvIHRvIHRoYXQgY2F0ZWdvcnkgYW5kIGFzc2lnblxyXG4gICAgICAgIC8vaXQgdG8gdGhlIGRpc3BsYXkgZWxlbWVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuaWQgPSBjYXRlZ29yeVRpdGxlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY2F0ZWdvcnlUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2F0ZWdvcmlzJywgY2F0ZWdvcmllcyk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIG5vIGNhdGVnb3J5IGlzIGNob3NlbiwgYXNzaWduIHRvLWRvIHRvICdvdmVyYWxsJyBjYXRlZ29yeVxyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnlUaXRsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG92ZXJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJytvdmVyYWxsLmlkLCAgSlNPTi5zdHJpbmdpZnkob3ZlcmFsbC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJhbGwuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURlZmF1bHRDYXQodG9kbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmFsbCAmJiBvdmVyYWxsLmNoaWxkRWxlbWVudENvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmFsbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJyt0aXRsZS5pbm5lckhUTUwsICBKU09OLnN0cmluZ2lmeSh0aXRsZS5pbm5lckhUTUwpKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGNvbXBsZXRlVGFzayBmcm9tIFwiLi9jb21wbGV0ZVRhc2tcIjtcclxuaW1wb3J0IGVkaXRUYXNrIGZyb20gXCIuL2VkaXRUYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKGNsYXNzVGl0bGUsIGNsYXNzRGVzYywgY2xhc3NEYXRlLCBjbGFzc1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKSB7XHJcbiAgICBcclxuICAgIGNsYXNzIFRvZG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5DYXRlZ29yeSA9IGluQ2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgbm9uRW1wdHlDYXRlZ29yeSA9ICcnO1xyXG5cclxuICAgIGlmIChjYXRlZ29yeVRpdGxlID09PSAnJykge1xyXG4gICAgICAgIG5vbkVtcHR5Q2F0ZWdvcnkgPSAnb3ZlcmFsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vbkVtcHR5Q2F0ZWdvcnkgPSBjYXRlZ29yeVRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhjbGFzc1RpdGxlLCBjbGFzc0Rlc2MsIGNsYXNzRGF0ZSwgY2xhc3NQcmlvcml0eSwgbm9uRW1wdHlDYXRlZ29yeSk7XHJcblxyXG4gICAgaWYgKGNsYXNzVGl0bGUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX3RvZG9fJytjbGFzc1RpdGxlLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ET00gbWFuaXB1bGF0aW9uXHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKG5ld1RvZG8ucHJpb3JpdHkpO1xyXG5cclxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IG5ld1RvZG8udGl0bGU7XHJcbiAgICB0b2RvVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJyk7XHJcblxyXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBuZXdUb2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXNwbGF5RGF0ZS5pbm5lckhUTUwgPSBuZXdUb2RvLmR1ZURhdGU7XHJcblxyXG4gICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBlZGl0QnRuLmlkID0gJ2VkaXRCdG4nO1xyXG4gICAgY29tcGxldGVCdG4uaWQgPSAnY29tcGxldGVCdG4nO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcGxldGVJY28uc3JjID0gJ2ltZ3MvY29tcGxldGUucG5nJztcclxuXHJcbiAgICBsZXQgZWRpdEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWRpdEljby5zcmMgPSAnaW1ncy9lZGl0LnBuZyc7XHJcblxyXG4gICAgXHJcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29tcGxldGVUYXNrKGFydGljbGUsIGNsYXNzVGl0bGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBlZGl0VGFzayhuZXdUb2RvKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljbyk7XHJcbiAgICBjb21wbGV0ZUJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZUljbyk7XHJcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZChjb21wbGV0ZUJ0biwgZWRpdEJ0bik7XHJcbiAgICBmb290ZXIuYXBwZW5kKGRpc3BsYXlEYXRlLCBpY29uQ29udGFpbmVyKTtcclxuICAgIGFydGljbGUuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBmb290ZXIpO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIGFydGljbGU7XHJcbn07IiwiaW1wb3J0IGNoZWNrQ2hpbGRyZW4gZnJvbSBcIi4vY2hlY2tDYXRlZ29yeUNoaWxkcmVuXCI7XHJcbmltcG9ydCBjaGVja0NhdERpc3BsYXkgZnJvbSBcIi4vY2hlY2tDYXRlZ29yeXNEaXNwbGF5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaywgdGl0bGUpIHtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX3RvZG9fJyt0aXRsZSk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLnBhcmVudEVsZW1lbnQuaWQpO1xyXG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgY2hlY2tDaGlsZHJlbihjYXRlZ29yeSk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgY3JlYXRlRGVmYXVsdENhdCBmcm9tIFwiLi9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tDaGlsZHJlbihjYXRlZ29yeSkge1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG5cclxuICAgIGlmIChjYXRlZ29yeS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX2NhdGVnb3J5XycrY2F0ZWdvcnkuaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmlkKTtcclxuICAgICAgICBjYXRlZ29yeS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KCk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGxvYWRTYXZlZENhdGVnb3JpZXMgZnJvbSBcIi4vbG9hZFNhdmVkQ2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgbG9hZFNhdmVkVG9kbyBmcm9tIFwiLi9sb2FkU2F2ZWRUb2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Q2F0KHRvZG8pIHtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuXHJcbiAgICBpZiAoIXRvZG8pIHtcclxuICAgIGxvYWRTYXZlZENhdGVnb3JpZXMoKTtcclxufVxyXG4gICAgXHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgICBpZiAodG9kbykge1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuaWQgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdmVyYWxsJztcclxuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19jYXRlZ29yeV8nK2NhdGVnb3J5LmlkLCAgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnkuaWQpKTtcclxuICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXRlZ29yeS5pZCA9ICdvdmVyYWxsJztcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdmVyYWxsJztcclxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghdG9kbykge1xyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCdfdG9kb18nKSkge1xyXG4gICAgICAgICAgICBsb2FkU2F2ZWRUb2RvKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9KX07XHJcbn0iLCJpbXBvcnQgZ2VuZXJhdGVDYXRlZ29yaWVzRG9tIGZyb20gXCIuL0RPTS1mb3ItbG9hZGVkLWNhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2F2ZWRDYXRlZ29yaWVzKCkge1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnX2NhdGVnb3J5XycpKSB7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlQ2F0ZWdvcmllc0RvbShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICBcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUNhdGVnb3JpZXNEb20oa2V5KSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBcclxuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjYXRlZ29yeS5pZCA9IGtleTtcclxuICAgIFxyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGtleTtcclxuICAgIFxyXG4gICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICBcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG59OyIsImltcG9ydCBjb21wbGV0ZVRhc2sgZnJvbSBcIi4vY29tcGxldGVUYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU2F2ZWRUb2RvKGl0ZW0pIHtcclxuICAgIFxyXG4gICAgICAgICAgIGxldCBuZXdUb2RvID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICAgICAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQobmV3VG9kby5wcmlvcml0eSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICAgICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IG5ld1RvZG8udGl0bGU7XHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS5pZCA9ICd0aXRsZSc7XHJcbiAgICAgICAgICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbmV3VG9kby5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgZGlzcGxheURhdGUuaW5uZXJIVE1MID0gbmV3VG9kby5kdWVEYXRlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWljb25zJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRCdG4uaWQgPSAnZWRpdEJ0bic7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQnRuLmlkID0gJ2NvbXBsZXRlQnRuJztcclxuXHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUljby5zcmMgPSAnaW1ncy9jb21wbGV0ZS5wbmcnO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVkaXRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgZWRpdEljby5zcmMgPSAnaW1ncy9lZGl0LnBuZyc7XHJcblxyXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVRhc2soYXJ0aWNsZSwgbmV3VG9kby50aXRsZSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY28pO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZUljbyk7XHJcbiAgICAgICAgICAgIGljb25Db250YWluZXIuYXBwZW5kKGNvbXBsZXRlQnRuLCBlZGl0QnRuKTtcclxuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZChkaXNwbGF5RGF0ZSwgaWNvbkNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGFydGljbGUuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBmb290ZXIpO1xyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdUb2RvLmluQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kKGFydGljbGUpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NhdERpc3BsYXkoKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBsZXQgYWxsQ2F0ZWdvcmllcyA9IGRpc3BsYXkuY2hpbGROb2RlcztcclxuICAgIFxyXG4gICAgXHJcbiAgICBhbGxDYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KT0+e1xyXG4gICAgICAgIGxldCBhbGxUb2RvcyA9IGNhdGVnb3J5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGVbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXScpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeS5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlJykubGVuZ3RoID09PSBhbGxUb2Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHByb21wdFZhbGlkYXRpb24gZnJvbSBcIi4vcHJvbXB0VmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY2hhbmdlVGFza1Byb3ByZXRpZXMgZnJvbSBcIi4vY2hhbmdlVGFza1Byb3ByZXRpZXNcIjtcclxuaW1wb3J0IGNoZWNrSWZUYXNrRXhpc3RzIGZyb20gXCIuL2NoZWNrRm9yRXhpc3RpbmdUYXNrXCI7XHJcbmltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2sodG9kbykge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb21wdC5pZCA9ICdwcm9tcHQnO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gY3JlYXRpbmcgaW5wdXRzIGFuZCBsYWJlbHNcclxuICAgIC8vIHRpdGxlXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IHRpdGxlLi4uJztcclxuICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gNDA7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgdGl0bGU6XCI7XHJcbiAgICAvL2FwcGVuZGluZyB0aXRsZVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCBkZXNjcmlwdGlvbi4uLic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDYwO1xyXG4gICAgaWYgKHRvZG8uZGVzY3JpcHRpb24pIHtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIH07XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IFwiU2hvcnQgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGlmICh0b2RvLmR1ZURhdGUpIHtcclxuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0b2RvLmR1ZURhdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlOlwiO1xyXG4gICAgZHVlRGF0ZW5EaXYuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgY2F0ZWdvcnlJbnB1dC5pZCA9ICdjYXRlZ29yeVNlbGVjdCc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnBsYWNlaG9sZGVyID0gJ0NhdGVnb3J5IG5hbWUnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC52YWx1ZSA9IHRvZG8uaW5DYXRlZ29yeTtcclxuXHJcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9IFwiSW5wdXQgY2F0ZWdvcnk6XCI7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgLy9jYXRlZ29yeVxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcclxuICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG5vbmUudGV4dCA9IFwiTm9uZVwiO1xyXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBsb3cudGV4dCA9IFwiTG93XCI7XHJcbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG1lZGl1bS50ZXh0ID0gXCJNaWRcIjtcclxuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGhpZ2gudGV4dCA9IFwiSGlnaFwiO1xyXG4gICAgY29uc29sZS5sb2codG9kby5wcmlvcml0eSlcclxuICAgIHN3aXRjaCh0b2RvLnByaW9yaXR5KSB7XHJcbiAgICAgICAgY2FzZSAnTm9uZSc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJylcclxuICAgICAgICAgICAgbm9uZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0xvdyc6XHJcbiAgICAgICAgICAgIGxvdy5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ01pZCc6XHJcbiAgICAgICAgICAgIG1lZGl1bS5zZWxlY3RlZCA9ICdzZWxlY3RlZCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0hpZ2gnOlxyXG4gICAgICAgICAgICBoaWdoLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb2RlXHJcbiAgICB9XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG5vbmUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGxvdyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobWVkaXVtKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChoaWdoKTtcclxuXHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xyXG5cclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XHJcbiAgICAvL2J1dHRvblxyXG4gICAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtLmlkID0gJ2NvbmZpcm1CdG4nO1xyXG4gICAgY29uZmlybS5pbm5lckhUTUwgPSBcIkNyZWF0ZVwiO1xyXG4gICAgY29uZmlybS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vc2F2aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICAvL2xvZ2ljXHJcbiAgICAgICAgaWYgKCF0aXRsZVZhbHVlIHx8IGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpO1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhbmdlVGFza1Byb3ByZXRpZXModGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBjYXRlZ29yeVZhbHVlLCB0b2RvLnRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgYmFja2dyb3VuZCBvdmVybGF5XHJcbiAgICAgICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAvL3Bhc3NpbmcgYXJncyB0byB0aGUgY3JlYXRlIGNhdGVnb3J5IGZ1bmNcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfX0pO1xyXG5cclxuICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsQnRuJztcclxuICAgIGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkRpdi5hcHBlbmQoY2FuY2VsLGNvbmZpcm0pO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgY2F0ZWdvcnlEaXYsIGR1ZURhdGVuRGl2LCBwcmlvcml0eURpdiwgYnRuRGl2KTtcclxuXHJcbiAgICBwcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlVGFza1Byb3ByZXRpZXMobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5LCBuZXdDYXQsIG9sZFRpdGxlKSB7XHJcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRpdGxlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGxldCBkZXNjckVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xyXG4gICAgbGV0IGR1ZUVlbGVtbnQgPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvb3RlcicpLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcclxuICAgIGlmICh0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID09PSBvbGRUaXRsZSl7XHJcbiAgICAgICAgdGl0bGVFbGVtZW50LmlubmVySFRNTCA9IG5ld1RpdGxlO1xyXG4gICAgICAgIGRlc2NyRWxlbWVudC5pbm5lckhUTUwgPSBuZXdEZXNjO1xyXG4gICAgICAgIGR1ZUVlbGVtbnQuaW5uZXJIVE1MID0gbmV3RGF0ZTtcclxuICAgICAgICBjcmVhdGVDYXRlZ29yeShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHksIG5ld0NhdCk7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnX3RvZG9fJytvbGRUaXRsZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0lmVGFza0V4aXN0cyh0aXRsZVZhbHVlLCB0aXRsZUlucHV0KSB7XHJcbiAgICBsZXQgYm9vbCA9IHRydWU7XHJcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCdfdG9kb18nK3RpdGxlVmFsdWUgPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBhbHJlYWR5IGV4aXN0c1wiO1xyXG4gICAgICAgICAgICBib29sID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIHJldHVybiBib29sO1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQXNpZGUgZnJvbSBcIi4vYXNpZGUtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBnZW5lcmF0ZUFzaWRlKCk7XHJcbiAgICBnZW5lcmF0ZURpc3BsYXkoKTtcclxuICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbn07IiwiaW1wb3J0IGNoYW5nZVByaW9yaXR5U3RhdGUgZnJvbSBcIi4vY2hhbmdlUHJpb3JpdHlTdGF0ZVwiO1xyXG5pbXBvcnQgY2hlY2tDYXREaXNwbGF5IGZyb20gXCIuL2NoZWNrQ2F0ZWdvcnlzRGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBc2lkZSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhc2lkZVNlY3Rpb24nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xyXG5cclxuXHJcbiAgICAvL0NyZWF0aW5nIGZpbHRlcnMgdGhhdCB3aWxsIGRpc3BsYXkgdG8tZG9zXHJcbiAgICAvL2J5IHRoZWlyIHByaW9yaXR5XHJcbiAgICBsZXQgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL2Fzc2lnbmluZyBjbGFzc2VzXHJcbiAgICBub1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgICAvL2NyZWF0aW5nIGljb25zXHJcbiAgICBsZXQgbm9Qcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBub1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL25vUHJpb3JpdHkucG5nJztcclxuICAgIGxvd1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2xvd1ByaW9yaXR5LnBuZyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9tZWRpdW1Qcmlvcml0eS5wbmcnO1xyXG4gICAgaGlnaFByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2hpZ2hQcmlvcml0eS5wbmcnO1xyXG5cclxuICAgIC8vY3JlYXRpbmcgdGl0bGVzXHJcbiAgICBsZXQgbm9Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBtZWRpdW1Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdOb25lJztcclxuICAgIGxvd1ByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0xvdyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdNaWQnO1xyXG4gICAgaGlnaFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0hpZ2gnO1xyXG5cclxuICAgIC8vYWRkaW5nIGZ1bmN0aW9ucyB0byBkaXZzXHJcbiAgICBsZXQgbm9uZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBsZXQgbG93U2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGxldCBtaWRTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGhpZ2hTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIG5vUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGlmICghbm9uZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eVN0YXRlKG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIG5vbmVTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuICAgIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpZiAoIWxvd1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGxvd1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb3dTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlTdGF0ZShsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCwgbG93U2VsZWN0ZWQpO1xyXG4gICAgICAgIGNoZWNrQ2F0RGlzcGxheSgpO1xyXG4gICAgfSk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaWYgKCFtaWRTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBtaWRTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWlkU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYW5nZVByaW9yaXR5U3RhdGUobWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIG1pZFNlbGVjdGVkKTtcclxuICAgICAgICBjaGVja0NhdERpc3BsYXkoKTtcclxuICAgIH0pO1xyXG4gICAgaGlnaFByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBpZiAoIWhpZ2hTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBoaWdoU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2hTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlTdGF0ZShoaWdoUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwsIGhpZ2hTZWxlY3RlZCk7XHJcbiAgICAgICAgY2hlY2tDYXREaXNwbGF5KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcblxyXG4gICAgcHJpb3JpdHlTZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsbm9Qcmlvcml0eSxsb3dQcmlvcml0eSxtZWRpdW1Qcmlvcml0eSxoaWdoUHJpb3JpdHkpO1xyXG5cclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHByaW9yaXR5U2VjdGlvbik7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhc2lkZSk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlTdGF0ZShwcmlvcml0eUxldmVsLCBzZWxlY3RlZCkge1xyXG5cclxuICAgIGxldCB0b2Rvc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xyXG5cclxuICAgIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xyXG4gICAgICAgIGNhc2UgJ05vbmUnOlxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTm9uZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0xvdyc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdMb3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5mb3JFYWNoKCh0b2RvKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ0xvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdNaWQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3NMaXN0LmZvckVhY2goKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnTWlkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdNaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnSGlnaCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG8uY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZWxlY3RlZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkJyk7XHJcbiAgICB0b2Rvc0xpc3QuZm9yRWFjaCgodG9kbyk9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVG9kb3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2RvLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXkoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbkRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcblxyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpO1xyXG4gICAgaWYgKGNhdGVnb3JpZXMpe1xyXG4gICAgICAgIGZvciAobGV0IGk9MDtpPGNhdGVnb3JpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHNlY3Rpb25EaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb25EaXNwbGF5KTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXItZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZU1haW4gZnJvbSBcIi4vbWFpbi1nZW5lcmF0b3JcIjtcclxuXHJcbmdlbmVyYXRlSGVhZGVyKCk7XHJcbmdlbmVyYXRlTWFpbigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
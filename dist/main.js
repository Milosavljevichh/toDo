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
/* harmony import */ var _todo_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
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
    medium.text = "Medium";
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
        if (titleValue.length === 0 || descriptionValue.length === 0 || (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.isPast)(dueDateInput.value)) {
            (0,_promptValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(titleValue, descriptionValue, titleInput, descriptionInput, dueDateInput, dueDateLabel);
        } else {
            (0,_category_generator__WEBPACK_IMPORTED_MODULE_1__["default"])(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue);
            
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
        if (descriptionValue.length === 0) {
            descriptionInput.classList.add('warning');
            descriptionInput.placeholder = "Can't be left empty";
        }
    } else if (descriptionValue.length === 0) {
        descriptionInput.classList.add('warning');
        descriptionInput.placeholder = "Can't be left empty";
    }

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

    localStorage.setItem('_todo_'+classTitle, JSON.stringify(newTodo));


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
        (0,_completeTask__WEBPACK_IMPORTED_MODULE_0__["default"])(article);
    })

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


function completeTask(task) {
    task.classList.add('completed');
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
        category.remove();
    }

    if (display.children.length === 0) {
        (0,_generateDefaultCategory__WEBPACK_IMPORTED_MODULE_0__["default"])()
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
/* harmony import */ var _loadSavedTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



function createDefaultCat(todo) {
    let display = document.getElementById('display');

    Object.keys(localStorage).forEach(item => {
        if (item.includes('_category_')) {
            (0,_loadSavedCategories__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.parse(localStorage.getItem(item)));
            
        } 
    });

    
    
    
    if (display.childElementCount > 0) {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        if (todo) {
            category.appendChild(todo);
        }
        display.appendChild(category);
    } else {
        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);
    }
    
    Object.keys(localStorage).forEach(item => {
        if (item.includes('_todo_')) {
            (0,_loadSavedTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.parse(localStorage.getItem(item)));
        }
    });
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSavedCategories)
/* harmony export */ });


function loadSavedCategories(key) {

    let display = document.getElementById('display');
    
    let category = document.createElement('div');
    
    category.id = key;
    
    let title = document.createElement('h2');
    title.innerHTML = key;
    
    category.appendChild(title);
            
    display.appendChild(category);
            
    
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSavedTodo)
/* harmony export */ });
/* harmony import */ var _generateDefaultCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


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
                completeTask(article);
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
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
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
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateAside)
/* harmony export */ });

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
/* 15 */
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
    console.log(categories);
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
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTmdEO0FBQ0o7QUFDNUM7QUFDQSw2REFBYztBQUNkLDJEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlYWRlci1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b0RvLWNyZWF0aW9uLXByb21wdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb21wdFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1Bhc3QubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhdGVnb3J5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tDYXRlZ29yeUNoaWxkcmVuLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2FkU2F2ZWRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9hZFNhdmVkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21haW4tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvYXNpZGUtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheS1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdlbmVyYXRlUHJvbXB0IGZyb20gXCIuL3RvRG8tY3JlYXRpb24tcHJvbXB0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblxyXG4gICAgbGV0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxldCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbGV0IGFwcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHJcbiAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsZXQgYWRkSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbGV0IHNtYWxsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxlZnRTaWRlLmlkID0gJ2xlZnQtaGVhZGVyJztcclxuICAgIHJpZ2h0U2lkZS5pZCA9ICdyaWdodC1oZWFkZXInO1xyXG5cclxuICAgIGxvZ28uaHJlZiA9ICcjJztcclxuICAgIGxvZ29JbWcuc3JjID0gXCJpbWdzL3RvLWRvLWxpc3QucG5nXCI7XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdsb2dvJztcclxuXHJcbiAgICBhcHBUaXRsZS5pbm5lckhUTUwgPSAnQ3ljbG9uZSBjaGVjayc7XHJcbiAgICBzbWFsbFRpdGxlLmlubmVySFRNTCA9ICdCbG93IGF3YXkgYWxsIHlvdXIgdGFza3MnO1xyXG5cclxuICAgIGFkZEJ0bi5pZCA9ICdhZGRCdG4nOyBcclxuXHJcbiAgICBhZGRJY28uc3JjID0gJ2ltZ3MvYWRkSWNvbi5wbmcnO1xyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgICBnZW5lcmF0ZVByb21wdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1nKTtcclxuXHJcbiAgICB0aXRsZURpdi5hcHBlbmQoYXBwVGl0bGUsICBzbWFsbFRpdGxlKTtcclxuXHJcbiAgICBsZWZ0U2lkZS5hcHBlbmQobG9nbywgdGl0bGVEaXYpO1xyXG5cclxuICAgIGFkZEJ0bi5hcHBlbmRDaGlsZChhZGRJY28pO1xyXG5cclxuICAgIHJpZ2h0U2lkZS5hcHBlbmQoYWRkQnRuKTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kKGxlZnRTaWRlLCByaWdodFNpZGUpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59OyIsImltcG9ydCBwcm9tcHRWYWxpZGF0aW9uIGZyb20gXCIuL3Byb21wdFZhbGlkYXRpb25cIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb21wdC5pZCA9ICdwcm9tcHQnO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gY3JlYXRpbmcgaW5wdXRzIGFuZCBsYWJlbHNcclxuICAgIC8vIHRpdGxlXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IHRpdGxlLi4uJ1xyXG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA0MDtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgdGl0bGU6XCI7XHJcbiAgICAvL2FwcGVuZGluZyB0aXRsZVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCBkZXNjcmlwdGlvbi4uLidcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gNjA7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IFwiU2hvcnQgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuXHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgZGF0ZTpcIjtcclxuICAgIGR1ZURhdGVuRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XHJcbiAgICAvL3ByaW9yaXR5XHJcbiAgICBsZXQgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIGNhdGVnb3J5SW5wdXQuaWQgPSAnY2F0ZWdvcnlTZWxlY3QnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXRlZ29yeSBuYW1lJztcclxuICAgIGNhdGVnb3J5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9IFwiSW5wdXQgY2F0ZWdvcnk6XCI7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgLy9jYXRlZ29yeVxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcclxuICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG5vbmUudGV4dCA9IFwiTm9uZVwiO1xyXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBsb3cudGV4dCA9IFwiTG93XCI7XHJcbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG1lZGl1bS50ZXh0ID0gXCJNZWRpdW1cIjtcclxuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGhpZ2gudGV4dCA9IFwiSGlnaFwiO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChub25lKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChsb3cpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG1lZGl1bSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQoaGlnaCk7XHJcblxyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcclxuXHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgLy9idXR0b25cclxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybS5pZCA9ICdjb25maXJtQnRuJztcclxuICAgIGNvbmZpcm0uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcclxuICAgIGNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL3NhdmluZyBmb3JtIGRhdGFcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlWYWx1ZSA9IGNhdGVnb3J5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy9sb2dpY1xyXG4gICAgICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCB8fCBkZXNjcmlwdGlvblZhbHVlLmxlbmd0aCA9PT0gMCB8fCBpc1Bhc3QoZHVlRGF0ZUlucHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIGR1ZURhdGVJbnB1dCwgZHVlRGF0ZUxhYmVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjcmVhdGVDYXRlZ29yeSh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIGNhdGVnb3J5VmFsdWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9yZW1vdmluZyBiYWNrZ3JvdW5kIG92ZXJsYXlcclxuICAgICAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vcGFzc2luZyBhcmdzIHRvIHRoZSBjcmVhdGUgY2F0ZWdvcnkgZnVuY1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHByb21wdCk7XHJcbiAgICB9fSk7XHJcblxyXG4gICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWxCdG4nO1xyXG4gICAgY2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbC5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuRGl2LmFwcGVuZChjYW5jZWwsY29uZmlybSk7XHJcblxyXG4gICAgLy9hcHBlbmRpbmcgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBjYXRlZ29yeURpdiwgZHVlRGF0ZW5EaXYsIHByaW9yaXR5RGl2LCBidG5EaXYpO1xyXG5cclxuICAgIHByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvbXB0KTtcclxufTsiLCJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpIHtcclxuICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICBpZiAoZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Bhc3QoZHVlRGF0ZUlucHV0LnZhbHVlKSkge1xyXG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSAnUGxlYXNlIHNlbGVjdCBhIHZhbGlkIGRhdGUnO1xyXG4gICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nLWxhYmVsJyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGFzdChkYXRlKSB7XG4gIHJldHVybiArdG9EYXRlKGRhdGUpIDwgRGF0ZS5ub3coKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1Bhc3Q7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSBcIi4vdG9kby1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZURlZmF1bHRDYXQgZnJvbSBcIi4vZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKSB7XHJcblxyXG4gICAgLy9kZWNsYXJpbmcgdmFyaWFibGVzXHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcbiAgICBsZXQgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGNhdGVnb3J5VGl0bGUpO1xyXG4gICAgbGV0IGV4aXN0aW5nQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXRlZ29yeVRpdGxlKTtcclxuXHJcblxyXG4gICAgLy9pZiBkaXNwbGF5IGhhcyBubyBjYXRlZ29yaWVzLCBjcmVhdGUgYW4gJ292ZXJhbGwnIGNhdGVnb3J5XHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xyXG5cclxuICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KCk7XHJcblxyXG4gICAgLy9pZiBkaXNwbGF5IGhhcyBhbiAnb3ZlcmFsbCcgY2F0ZWdvcnksIGhhbmRsZSBjcmVhdGluZyBuZXcgY2F0ZWdvcnlcclxuICAgIH0gZWxzZSBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIHNlbGVjdGVkIGFuIGV4aXN0aW5nIGNhdGVnb3J5LCBhZGQgbmV3IHRvLWRvIHRvIHRoYXQgY2F0ZWdvcnlcclxuICAgICAgICBpZiAoZXhpc3RpbmdDYXRlZ29yeSkge1xyXG5cclxuICAgICAgICAgICAgZXhpc3RpbmdDYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIG1hZGUgYSBuZXcgY2F0ZWdvcnksIGFkZCBuZXcgdG8tZG8gdG8gdGhhdCBjYXRlZ29yeSBhbmQgYXNzaWduXHJcbiAgICAgICAgLy9pdCB0byB0aGUgZGlzcGxheSBlbGVtZW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5pZCA9IGNhdGVnb3J5VGl0bGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBjYXRlZ29yeVRpdGxlO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaXMnLCBjYXRlZ29yaWVzKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgbm8gY2F0ZWdvcnkgaXMgY2hvc2VuLCBhc3NpZ24gdG8tZG8gdG8gJ292ZXJhbGwnIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeVRpdGxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyYWxsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3ZlcmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmFsbC5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGVmYXVsdENhdCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdmVyYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGwnKTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVyYWxsICYmIG92ZXJhbGwuY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyYWxsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19jYXRlZ29yeV8nK3RpdGxlLmlubmVySFRNTCwgIEpTT04uc3RyaW5naWZ5KHRpdGxlLmlubmVySFRNTCkpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyhjbGFzc1RpdGxlLCBjbGFzc0Rlc2MsIGNsYXNzRGF0ZSwgY2xhc3NQcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSkge1xyXG4gICAgXHJcbiAgICBjbGFzcyBUb2RvIHtcclxuICAgICAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaW5DYXRlZ29yeSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB0aGlzLmluQ2F0ZWdvcnkgPSBpbkNhdGVnb3J5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IG5vbkVtcHR5Q2F0ZWdvcnkgPSAnJztcclxuXHJcbiAgICBpZiAoY2F0ZWdvcnlUaXRsZSA9PT0gJycpIHtcclxuICAgICAgICBub25FbXB0eUNhdGVnb3J5ID0gJ292ZXJhbGwnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBub25FbXB0eUNhdGVnb3J5ID0gY2F0ZWdvcnlUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oY2xhc3NUaXRsZSwgY2xhc3NEZXNjLCBjbGFzc0RhdGUsIGNsYXNzUHJpb3JpdHksIG5vbkVtcHR5Q2F0ZWdvcnkpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfdG9kb18nK2NsYXNzVGl0bGUsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG8pKTtcclxuXHJcblxyXG4gICAgLy9ET00gbWFuaXB1bGF0aW9uXHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKG5ld1RvZG8ucHJpb3JpdHkpO1xyXG5cclxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IG5ld1RvZG8udGl0bGU7XHJcbiAgICB0b2RvVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9vdGVyJyk7XHJcblxyXG4gICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBuZXdUb2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXNwbGF5RGF0ZS5pbm5lckhUTUwgPSBuZXdUb2RvLmR1ZURhdGU7XHJcblxyXG4gICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBlZGl0QnRuLmlkID0gJ2VkaXRCdG4nO1xyXG4gICAgY29tcGxldGVCdG4uaWQgPSAnY29tcGxldGVCdG4nO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29tcGxldGVJY28uc3JjID0gJ2ltZ3MvY29tcGxldGUucG5nJztcclxuXHJcbiAgICBsZXQgZWRpdEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWRpdEljby5zcmMgPSAnaW1ncy9lZGl0LnBuZyc7XHJcblxyXG4gICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGNvbXBsZXRlVGFzayhhcnRpY2xlKTtcclxuICAgIH0pXHJcblxyXG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvKTtcclxuICAgIGNvbXBsZXRlQnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlSWNvKTtcclxuICAgIGljb25Db250YWluZXIuYXBwZW5kKGNvbXBsZXRlQnRuLCBlZGl0QnRuKTtcclxuICAgIGZvb3Rlci5hcHBlbmQoZGlzcGxheURhdGUsIGljb25Db250YWluZXIpO1xyXG4gICAgYXJ0aWNsZS5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIGFydGljbGU7XHJcbn07IiwiaW1wb3J0IGNoZWNrQ2hpbGRyZW4gZnJvbSBcIi4vY2hlY2tDYXRlZ29yeUNoaWxkcmVuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wbGV0ZVRhc2sodGFzaykge1xyXG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2sucGFyZW50RWxlbWVudC5pZCk7XHJcbiAgICAgICAgdGFzay5yZW1vdmUoKTtcclxuICAgICAgICBjaGVja0NoaWxkcmVuKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG59OyIsImltcG9ydCBjcmVhdGVEZWZhdWx0Q2F0IGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0NoaWxkcmVuKGNhdGVnb3J5KSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgaWYgKGNhdGVnb3J5LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNhdGVnb3J5LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkaXNwbGF5LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGNyZWF0ZURlZmF1bHRDYXQoKVxyXG4gICAgfVxyXG59OyIsImltcG9ydCBsb2FkU2F2ZWRDYXRlZ29yaWVzIGZyb20gXCIuL2xvYWRTYXZlZENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IGxvYWRTYXZlZFRvZG8gZnJvbSBcIi4vbG9hZFNhdmVkVG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdENhdCh0b2RvKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCdfY2F0ZWdvcnlfJykpIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVkQ2F0ZWdvcmllcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXRlZ29yeS5pZCA9ICdvdmVyYWxsJztcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdmVyYWxsJztcclxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgaWYgKHRvZG8pIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXRlZ29yeS5pZCA9ICdvdmVyYWxsJztcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdmVyYWxsJztcclxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnX3RvZG9fJykpIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVkVG9kbyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTYXZlZENhdGVnb3JpZXMoa2V5KSB7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgY2F0ZWdvcnkuaWQgPSBrZXk7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBrZXk7XHJcbiAgICBcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgXHJcbiAgICBcclxufTsiLCJpbXBvcnQgY3JlYXRlRGVmYXVsdENhdCBmcm9tIFwiLi9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFNhdmVkVG9kbyhpdGVtKSB7XHJcbiAgICBcclxuICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuICAgICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKG5ld1RvZG8ucHJpb3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgICAgIHRvZG9UaXRsZS5pbm5lckhUTUwgPSBuZXdUb2RvLnRpdGxlO1xyXG4gICAgICAgICAgICB0b2RvVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvb3RlcicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IG5ld1RvZG8uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEYXRlLmlubmVySFRNTCA9IG5ld1RvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgICAgICBlZGl0QnRuLmlkID0gJ2VkaXRCdG4nO1xyXG4gICAgICAgICAgICBjb21wbGV0ZUJ0bi5pZCA9ICdjb21wbGV0ZUJ0bic7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGxldGVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgY29tcGxldGVJY28uc3JjID0gJ2ltZ3MvY29tcGxldGUucG5nJztcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGVkaXRJY28uc3JjID0gJ2ltZ3MvZWRpdC5wbmcnO1xyXG5cclxuICAgICAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVUYXNrKGFydGljbGUpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvKTtcclxuICAgICAgICAgICAgY29tcGxldGVCdG4uYXBwZW5kQ2hpbGQoY29tcGxldGVJY28pO1xyXG4gICAgICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZChjb21wbGV0ZUJ0biwgZWRpdEJ0bik7XHJcbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmQoZGlzcGxheURhdGUsIGljb25Db250YWluZXIpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgZm9vdGVyKTtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3VG9kby5pbkNhdGVnb3J5KTtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5KXtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZChhcnRpY2xlKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IiwiaW1wb3J0IGdlbmVyYXRlQXNpZGUgZnJvbSBcIi4vYXNpZGUtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBnZW5lcmF0ZUFzaWRlKCk7XHJcbiAgICBnZW5lcmF0ZURpc3BsYXkoKTtcclxuICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbn07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQXNpZGUoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXNpZGVTZWN0aW9uJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcclxuXHJcblxyXG4gICAgLy9DcmVhdGluZyBmaWx0ZXJzIHRoYXQgd2lsbCBkaXNwbGF5IHRvLWRvc1xyXG4gICAgLy9ieSB0aGVpciBwcmlvcml0eVxyXG4gICAgbGV0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hc3NpZ25pbmcgY2xhc3Nlc1xyXG4gICAgbm9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBpY29uc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9ub1ByaW9yaXR5LnBuZyc7XHJcbiAgICBsb3dQcmlvcml0eUljby5zcmMgPSAnaW1ncy9sb3dQcmlvcml0eS5wbmcnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlJY28uc3JjID0gJ2ltZ3MvbWVkaXVtUHJpb3JpdHkucG5nJztcclxuICAgIGhpZ2hQcmlvcml0eUljby5zcmMgPSAnaW1ncy9oaWdoUHJpb3JpdHkucG5nJztcclxuXHJcbiAgICAvL2NyZWF0aW5nIHRpdGxlc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbG93UHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTm9uZSc7XHJcbiAgICBsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdMb3cnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTWlkJztcclxuICAgIGhpZ2hQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdIaWdoJztcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcbiAgICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSxub1ByaW9yaXR5LGxvd1ByaW9yaXR5LG1lZGl1bVByaW9yaXR5LGhpZ2hQcmlvcml0eSk7XHJcblxyXG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWN0aW9uKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFzaWRlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXkoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbkRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcblxyXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpO1xyXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICBpZiAoY2F0ZWdvcmllcyl7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2k8Y2F0ZWdvcmllcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgc2VjdGlvbkRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbkRpc3BsYXkpO1xyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlci1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlTWFpbiBmcm9tIFwiLi9tYWluLWdlbmVyYXRvclwiO1xyXG5cclxuZ2VuZXJhdGVIZWFkZXIoKTtcclxuZ2VuZXJhdGVNYWluKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
                category.appendChild(todo);
                localStorage.setItem('_category_'+title.innerHTML,  JSON.stringify(title.innerHTML));
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

    const newTodo = new Todo(classTitle, classDesc, classDate, classPriority, categoryTitle);

    localStorage.setItem(classTitle, JSON.stringify(newTodo));


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
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadSavedCategories)
/* harmony export */ });
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


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
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
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
/* 13 */
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
/* 14 */
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
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDcEQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JEa0Q7QUFDQTtBQUNSO0FBQ1I7QUFDbEM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxnREFBTTtBQUM5RSxZQUFZLDZEQUFnQjtBQUM1QixVQUFVO0FBQ1YsWUFBWSwrREFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuSWtDO0FBQ2xDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxVQUFVLG1EQUFNO0FBQ2hCOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7QUMzQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDekRvQjtBQUNlO0FBQ3pEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CLG9FQUFnQjtBQUNwQztBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekQwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvRG9EO0FBQ3BEO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWE7QUFDckIsS0FBSztBQUNMOzs7Ozs7Ozs7OztBQ1R5RDtBQUN6RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9FQUFnQjtBQUN4QjtBQUNBOzs7Ozs7Ozs7OztBQ1p3RDtBQUN4RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFtQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JrRDtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQjhDO0FBQ0k7QUFDQTtBQUNsRDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQWE7QUFDakIsSUFBSSw4REFBZTtBQUNuQixJQUFJLCtEQUFjO0FBQ2xCOzs7Ozs7Ozs7O0FDYkE7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTmdEO0FBQ0o7QUFDNUM7QUFDQSw2REFBYztBQUNkLDJEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hlYWRlci1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b0RvLWNyZWF0aW9uLXByb21wdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb21wdFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1Bhc3QubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhdGVnb3J5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tDYXRlZ29yeUNoaWxkcmVuLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2FkU2F2ZWRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFpbi1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hc2lkZS1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVQcm9tcHQgZnJvbSBcIi4vdG9Eby1jcmVhdGlvbi1wcm9tcHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICBsZXQgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGV0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCBhZGRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgc21hbGxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGVmdFNpZGUuaWQgPSAnbGVmdC1oZWFkZXInO1xyXG4gICAgcmlnaHRTaWRlLmlkID0gJ3JpZ2h0LWhlYWRlcic7XHJcblxyXG4gICAgbG9nby5ocmVmID0gJyMnO1xyXG4gICAgbG9nb0ltZy5zcmMgPSBcImltZ3MvdG8tZG8tbGlzdC5wbmdcIjtcclxuICAgIGxvZ29JbWcuYWx0ID0gJ2xvZ28nO1xyXG5cclxuICAgIGFwcFRpdGxlLmlubmVySFRNTCA9ICdDeWNsb25lIGNoZWNrJztcclxuICAgIHNtYWxsVGl0bGUuaW5uZXJIVE1MID0gJ0Jsb3cgYXdheSBhbGwgeW91ciB0YXNrcyc7XHJcblxyXG4gICAgYWRkQnRuLmlkID0gJ2FkZEJ0bic7IFxyXG5cclxuICAgIGFkZEljby5zcmMgPSAnaW1ncy9hZGRJY29uLnBuZyc7XHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGdlbmVyYXRlUHJvbXB0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG5cclxuICAgIHRpdGxlRGl2LmFwcGVuZChhcHBUaXRsZSwgIHNtYWxsVGl0bGUpO1xyXG5cclxuICAgIGxlZnRTaWRlLmFwcGVuZChsb2dvLCB0aXRsZURpdik7XHJcblxyXG4gICAgYWRkQnRuLmFwcGVuZENoaWxkKGFkZEljbyk7XHJcblxyXG4gICAgcmlnaHRTaWRlLmFwcGVuZChhZGRCdG4pO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmQobGVmdFNpZGUsIHJpZ2h0U2lkZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07IiwiaW1wb3J0IHByb21wdFZhbGlkYXRpb24gZnJvbSBcIi4vcHJvbXB0VmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnktZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG8tZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IHByb21wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvbXB0LmlkID0gJ3Byb21wdCc7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBjcmVhdGluZyBpbnB1dHMgYW5kIGxhYmVsc1xyXG4gICAgLy8gdGl0bGVcclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZUlucHV0JztcclxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgdGl0bGUuLi4nXHJcbiAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IDQwO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSBcIlRhc2sncyB0aXRsZTpcIjtcclxuICAgIC8vYXBwZW5kaW5nIHRpdGxlXHJcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZGVzY3JpcHRpb25cclxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb25JbnB1dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IGRlc2NyaXB0aW9uLi4uJ1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSA2MDtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJTaG9ydCBkZXNjcmlwdGlvbjpcIjtcclxuICAgIC8vYXBwZW5kaW5nIGRlc2NyaXB0aW9uXHJcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBcclxuICAgIC8vZHVlIGRhdGVcclxuICAgIGxldCBkdWVEYXRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG5cclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBkYXRlOlwiO1xyXG4gICAgZHVlRGF0ZW5EaXYuYXBwZW5kKGR1ZURhdGVMYWJlbCwgZHVlRGF0ZUlucHV0KTtcclxuICAgIC8vcHJpb3JpdHlcclxuICAgIGxldCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGNhdGVnb3J5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG4gICAgY2F0ZWdvcnlJbnB1dC5pZCA9ICdjYXRlZ29yeVNlbGVjdCc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnBsYWNlaG9sZGVyID0gJ0NhdGVnb3J5IG5hbWUnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG5cclxuICAgIGNhdGVnb3J5TGFiZWwuaW5uZXJIVE1MID0gXCJJbnB1dCBjYXRlZ29yeTpcIjtcclxuXHJcbiAgICBjYXRlZ29yeURpdi5hcHBlbmQoY2F0ZWdvcnlMYWJlbCwgY2F0ZWdvcnlJbnB1dCk7XHJcbiAgICAvL2NhdGVnb3J5XHJcbiAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHlTZWxlY3QnO1xyXG4gICAgbGV0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbm9uZS50ZXh0ID0gXCJOb25lXCI7XHJcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGxvdy50ZXh0ID0gXCJMb3dcIjtcclxuICAgIGxldCBtZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbWVkaXVtLnRleHQgPSBcIk1lZGl1bVwiO1xyXG4gICAgbGV0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgaGlnaC50ZXh0ID0gXCJIaWdoXCI7XHJcblxyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG5vbmUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGxvdyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobWVkaXVtKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChoaWdoKTtcclxuXHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xyXG5cclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eVNlbGVjdCk7XHJcbiAgICAvL2J1dHRvblxyXG4gICAgbGV0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCBjb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtLmlkID0gJ2NvbmZpcm1CdG4nO1xyXG4gICAgY29uZmlybS5pbm5lckhUTUwgPSBcIkNyZWF0ZVwiO1xyXG4gICAgY29uZmlybS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vc2F2aW5nIGZvcm0gZGF0YVxyXG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVWYWx1ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcHJpb3JpdHlWYWx1ZSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGxldCBjYXRlZ29yeVZhbHVlID0gY2F0ZWdvcnlJbnB1dC52YWx1ZTtcclxuICAgICAgICAvL2xvZ2ljXHJcbiAgICAgICAgaWYgKHRpdGxlVmFsdWUubGVuZ3RoID09PSAwIHx8IGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwIHx8IGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHByb21wdFZhbGlkYXRpb24odGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0LCBkdWVEYXRlTGFiZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgY2F0ZWdvcnlWYWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGJhY2tncm91bmQgb3ZlcmxheVxyXG4gICAgICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgLy9wYXNzaW5nIGFyZ3MgdG8gdGhlIGNyZWF0ZSBjYXRlZ29yeSBmdW5jXHJcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH19KTtcclxuXHJcbiAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsLmlkID0gJ2NhbmNlbEJ0bic7XHJcbiAgICBjYW5jZWwudHlwZSA9ICdidXR0b24nO1xyXG4gICAgY2FuY2VsLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHByb21wdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG5EaXYuYXBwZW5kKGNhbmNlbCxjb25maXJtKTtcclxuXHJcbiAgICAvL2FwcGVuZGluZyB0byBmb3JtXHJcbiAgICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIGNhdGVnb3J5RGl2LCBkdWVEYXRlbkRpdiwgcHJpb3JpdHlEaXYsIGJ0bkRpdik7XHJcblxyXG4gICAgcHJvbXB0LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9tcHQpO1xyXG59OyIsImltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvbXB0VmFsaWRhdGlvbih0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBkdWVEYXRlSW5wdXQsIGR1ZURhdGVMYWJlbCkge1xyXG4gICAgaWYgKHRpdGxlVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvblZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBsZWZ0IGVtcHR5XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUGFzdChkdWVEYXRlSW5wdXQudmFsdWUpKSB7XHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgZGF0ZSc7XHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmctbGFiZWwnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQYXN0KGRhdGUpIHtcbiAgcmV0dXJuICt0b0RhdGUoZGF0ZSkgPCBEYXRlLm5vdygpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzUGFzdDtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgY3JlYXRlRGVmYXVsdENhdCBmcm9tIFwiLi9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGNhdGVnb3J5VGl0bGUpIHtcclxuXHJcbiAgICAvL2RlY2xhcmluZyB2YXJpYWJsZXNcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSk7XHJcbiAgICBsZXQgZXhpc3RpbmdDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhdGVnb3J5VGl0bGUpO1xyXG5cclxuXHJcbiAgICAvL2lmIGRpc3BsYXkgaGFzIG5vIGNhdGVnb3JpZXMsIGNyZWF0ZSBhbiAnb3ZlcmFsbCcgY2F0ZWdvcnlcclxuICAgIGlmIChkaXNwbGF5LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblxyXG4gICAgICAgIGNyZWF0ZURlZmF1bHRDYXQoKTtcclxuXHJcbiAgICAvL2lmIGRpc3BsYXkgaGFzIGFuICdvdmVyYWxsJyBjYXRlZ29yeSwgaGFuZGxlIGNyZWF0aW5nIG5ldyBjYXRlZ29yeVxyXG4gICAgfSBlbHNlIGlmIChkaXNwbGF5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG5cclxuICAgICAgICAvL2lmIHVzZXIgc2VsZWN0ZWQgYW4gZXhpc3RpbmcgY2F0ZWdvcnksIGFkZCBuZXcgdG8tZG8gdG8gdGhhdCBjYXRlZ29yeVxyXG4gICAgICAgIGlmIChleGlzdGluZ0NhdGVnb3J5KSB7XHJcblxyXG4gICAgICAgICAgICBleGlzdGluZ0NhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG8pO1xyXG5cclxuICAgICAgICAvL2lmIHVzZXIgbWFkZSBhIG5ldyBjYXRlZ29yeSwgYWRkIG5ldyB0by1kbyB0byB0aGF0IGNhdGVnb3J5IGFuZCBhc3NpZ25cclxuICAgICAgICAvL2l0IHRvIHRoZSBkaXNwbGF5IGVsZW1lbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LmlkID0gY2F0ZWdvcnlUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNhdGVnb3J5VGl0bGU7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpcycsIGNhdGVnb3JpZXMpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiBubyBjYXRlZ29yeSBpcyBjaG9zZW4sIGFzc2lnbiB0by1kbyB0byAnb3ZlcmFsbCcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5VGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmVyYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJhbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyYWxsLmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG92ZXJhbGwgJiYgb3ZlcmFsbC5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJhbGwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfY2F0ZWdvcnlfJyt0aXRsZS5pbm5lckhUTUwsICBKU09OLnN0cmluZ2lmeSh0aXRsZS5pbm5lckhUTUwpKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCBjb21wbGV0ZVRhc2sgZnJvbSBcIi4vY29tcGxldGVUYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb2RvKGNsYXNzVGl0bGUsIGNsYXNzRGVzYywgY2xhc3NEYXRlLCBjbGFzc1ByaW9yaXR5LCBjYXRlZ29yeVRpdGxlKSB7XHJcbiAgICBcclxuICAgIGNsYXNzIFRvZG8ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpbkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5DYXRlZ29yeSA9IGluQ2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhjbGFzc1RpdGxlLCBjbGFzc0Rlc2MsIGNsYXNzRGF0ZSwgY2xhc3NQcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2xhc3NUaXRsZSwgSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xyXG5cclxuXHJcbiAgICAvL0RPTSBtYW5pcHVsYXRpb25cclxuICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XHJcbiAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQobmV3VG9kby5wcmlvcml0eSk7XHJcblxyXG4gICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0b2RvVGl0bGUuaW5uZXJIVE1MID0gbmV3VG9kby50aXRsZTtcclxuICAgIHRvZG9UaXRsZS5pZCA9ICd0aXRsZSc7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb290ZXInKTtcclxuXHJcbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IG5ld1RvZG8uZGVzY3JpcHRpb247XHJcbiAgICB0b2RvRGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xyXG5cclxuICAgIGxldCBkaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRpc3BsYXlEYXRlLmlubmVySFRNTCA9IG5ld1RvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICBsZXQgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWljb25zJyk7XHJcblxyXG4gICAgbGV0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGVkaXRCdG4uaWQgPSAnZWRpdEJ0bic7XHJcbiAgICBjb21wbGV0ZUJ0bi5pZCA9ICdjb21wbGV0ZUJ0bic7XHJcblxyXG4gICAgbGV0IGNvbXBsZXRlSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb21wbGV0ZUljby5zcmMgPSAnaW1ncy9jb21wbGV0ZS5wbmcnO1xyXG5cclxuICAgIGxldCBlZGl0SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlZGl0SWNvLnNyYyA9ICdpbWdzL2VkaXQucG5nJztcclxuXHJcbiAgICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29tcGxldGVUYXNrKGFydGljbGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY28pO1xyXG4gICAgY29tcGxldGVCdG4uYXBwZW5kQ2hpbGQoY29tcGxldGVJY28pO1xyXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmQoY29tcGxldGVCdG4sIGVkaXRCdG4pO1xyXG4gICAgZm9vdGVyLmFwcGVuZChkaXNwbGF5RGF0ZSwgaWNvbkNvbnRhaW5lcik7XHJcbiAgICBhcnRpY2xlLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxufTsiLCJpbXBvcnQgY2hlY2tDaGlsZHJlbiBmcm9tIFwiLi9jaGVja0NhdGVnb3J5Q2hpbGRyZW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBsZXRlVGFzayh0YXNrKSB7XHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5wYXJlbnRFbGVtZW50LmlkKTtcclxuICAgICAgICB0YXNrLnJlbW92ZSgpO1xyXG4gICAgICAgIGNoZWNrQ2hpbGRyZW4oY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbn07IiwiaW1wb3J0IGNyZWF0ZURlZmF1bHRDYXQgZnJvbSBcIi4vZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrQ2hpbGRyZW4oY2F0ZWdvcnkpIHtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuXHJcbiAgICBpZiAoY2F0ZWdvcnkuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY2F0ZWdvcnkucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgY3JlYXRlRGVmYXVsdENhdCgpXHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGxvYWRTYXZlZENhdGVnb3JpZXMgZnJvbSBcIi4vbG9hZFNhdmVkQ2F0ZWdvcmllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdENhdCh0b2RvKSB7XHJcbiAgICBsZXQgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5Jyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmluY2x1ZGVzKCdfY2F0ZWdvcnlfJykpIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVkQ2F0ZWdvcmllcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmIChkaXNwbGF5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhdGVnb3J5LmlkID0gJ292ZXJhbGwnO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJ092ZXJhbGwnO1xyXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBpZiAodG9kbykge1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhdGVnb3J5LmlkID0gJ292ZXJhbGwnO1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJ092ZXJhbGwnO1xyXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICAgIH1cclxufSIsImltcG9ydCBjcmVhdGVDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS1nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTYXZlZENhdGVnb3JpZXMoa2V5KSB7XHJcblxyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIFxyXG4gICAgY2F0ZWdvcnkuaWQgPSBrZXk7XHJcbiAgICBcclxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBrZXk7XHJcbiAgICBcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuICAgICAgICAgICAgXHJcbiAgICBcclxufTsiLCJpbXBvcnQgZ2VuZXJhdGVBc2lkZSBmcm9tIFwiLi9hc2lkZS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGdlbmVyYXRlRGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnktZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZU1haW4oKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlkID0gJ21haW4nO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWluKTtcclxuICAgIGdlbmVyYXRlQXNpZGUoKTtcclxuICAgIGdlbmVyYXRlRGlzcGxheSgpO1xyXG4gICAgY3JlYXRlQ2F0ZWdvcnkoKTtcclxufTsiLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVBc2lkZSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhc2lkZVNlY3Rpb24nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xyXG5cclxuXHJcbiAgICAvL0NyZWF0aW5nIGZpbHRlcnMgdGhhdCB3aWxsIGRpc3BsYXkgdG8tZG9zXHJcbiAgICAvL2J5IHRoZWlyIHByaW9yaXR5XHJcbiAgICBsZXQgbm9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAvL2Fzc2lnbmluZyBjbGFzc2VzXHJcbiAgICBub1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgICAvL2NyZWF0aW5nIGljb25zXHJcbiAgICBsZXQgbm9Qcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IGxvd1ByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBub1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL25vUHJpb3JpdHkucG5nJztcclxuICAgIGxvd1ByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2xvd1ByaW9yaXR5LnBuZyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9tZWRpdW1Qcmlvcml0eS5wbmcnO1xyXG4gICAgaGlnaFByaW9yaXR5SWNvLnNyYyA9ICdpbWdzL2hpZ2hQcmlvcml0eS5wbmcnO1xyXG5cclxuICAgIC8vY3JlYXRpbmcgdGl0bGVzXHJcbiAgICBsZXQgbm9Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBtZWRpdW1Qcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxldCBoaWdoUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdOb25lJztcclxuICAgIGxvd1ByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0xvdyc7XHJcbiAgICBtZWRpdW1Qcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdNaWQnO1xyXG4gICAgaGlnaFByaW9yaXR5VGl0bGUuaW5uZXJIVE1MID0gJ0hpZ2gnO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nIGNoaWxkcmVuXHJcbiAgICBub1ByaW9yaXR5LmFwcGVuZChub1ByaW9yaXR5SWNvLCBub1ByaW9yaXR5VGl0bGUpO1xyXG4gICAgbG93UHJpb3JpdHkuYXBwZW5kKGxvd1ByaW9yaXR5SWNvLGxvd1ByaW9yaXR5VGl0bGUpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuYXBwZW5kKG1lZGl1bVByaW9yaXR5SWNvLG1lZGl1bVByaW9yaXR5VGl0bGUpO1xyXG4gICAgaGlnaFByaW9yaXR5LmFwcGVuZChoaWdoUHJpb3JpdHlJY28saGlnaFByaW9yaXR5VGl0bGUpO1xyXG5cclxuICAgIHByaW9yaXR5U2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLG5vUHJpb3JpdHksbG93UHJpb3JpdHksbWVkaXVtUHJpb3JpdHksaGlnaFByaW9yaXR5KTtcclxuXHJcbiAgICBhc2lkZS5hcHBlbmRDaGlsZChwcmlvcml0eVNlY3Rpb24pO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYXNpZGUpO1xyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlRGlzcGxheSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuXHJcbiAgICBsZXQgc2VjdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBzZWN0aW9uRGlzcGxheS5pZCA9ICdkaXNwbGF5JztcclxuXHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXRlZ29yaWVzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcclxuICAgIGlmIChjYXRlZ29yaWVzKXtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aTxjYXRlZ29yaWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBzZWN0aW9uRGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uRGlzcGxheSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVNYWluIGZyb20gXCIuL21haW4tZ2VuZXJhdG9yXCI7XHJcblxyXG5nZW5lcmF0ZUhlYWRlcigpO1xyXG5nZW5lcmF0ZU1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
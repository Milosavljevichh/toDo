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
    let tempIco2 = document.createElement('div');

    leftSide.id = 'left-header';
    rightSide.id = 'right-header';

    logo.href = '#';
    logoImg.src = "imgs/to-do-list.png";
    logoImg.alt = 'logo';

    appTitle.innerHTML = 'App name';

    addBtn.id = 'addBtn'; 
    addBtn.innerHTML = '+';
    tempIco2.id = 'ico'; 

    addBtn.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'block');
        (0,_toDo_creation_prompt__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    logo.appendChild(logoImg);

    leftSide.append(logo, appTitle);

    rightSide.append(addBtn, tempIco2);

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
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



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
    
    descriptionLabel.innerHTML = "Task's description:";
    //appending description
    descriptionDiv.append(descriptionLabel, descriptionInput);
    
    //due date
    let dueDatenDiv = document.createElement('div');
    let dueDateLabel = document.createElement('p');
    let dueDateInput = document.createElement('input');
    
    dueDateInput.type = 'date';
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';

    dueDateLabel.innerHTML = "Task's due date:";
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
        if (titleValue.length === 0 || descriptionValue.length === 0) {
            (0,_promptValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(titleValue, descriptionValue, titleInput, descriptionInput);
        } else {
            (0,_category_generator__WEBPACK_IMPORTED_MODULE_1__["default"])(titleValue, descriptionValue, dueDateValue, priorityValue, categoryValue)
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
function promptValidation(titleValue, descriptionValue, titleInput, descriptionInput) {
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
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCategory)
/* harmony export */ });
/* harmony import */ var _todo_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle) {

    //declaring variables
    let display = document.getElementById('display');
    let todo = (0,_todo_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(todoTitle, todoDescription, todoDueDate, todoPriority);
    let existingCategory = document.getElementById(categoryTitle);

    //if display has no categories, create an 'overall' category
    if (display.childElementCount === 0) {

        let category = document.createElement('div');
        category.id = 'overall';
        let title = document.createElement('h2');
        title.innerHTML = 'Overall';
        category.appendChild(title);
        display.appendChild(category);

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

            //if no category is chosen, assign to-do to 'overall' category
            if (categoryTitle.length === 0) {
                let overall = document.getElementById('overall');
                overall.appendChild(todo);
            
            } else {
                category.appendChild(title);
                category.appendChild(todo);
                display.appendChild(category);
            }
        }
    }};

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
function createTodo(title, description, dueDate, priority) {
    let article = document.createElement('article');
    article.classList.add('todo');

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

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _category_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




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
/* 7 */
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
    mediumPriorityTitle.innerHTML = 'Medium';
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
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateDisplay)
/* harmony export */ });
function generateDisplay() {
    let main = document.getElementById('main');

    let sectionDisplay = document.createElement('section');
    sectionDisplay.id = 'display';

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
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDM0RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O1VDUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDSjtBQUM1QztBQUNBLDZEQUFjO0FBQ2QsMkRBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaGVhZGVyLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvRG8tY3JlYXRpb24tcHJvbXB0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvbXB0VmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhdGVnb3J5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbWFpbi1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9hc2lkZS1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVQcm9tcHQgZnJvbSBcIi4vdG9Eby1jcmVhdGlvbi1wcm9tcHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICBsZXQgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGV0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBsZXQgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCB0ZW1wSWNvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxlZnRTaWRlLmlkID0gJ2xlZnQtaGVhZGVyJztcclxuICAgIHJpZ2h0U2lkZS5pZCA9ICdyaWdodC1oZWFkZXInO1xyXG5cclxuICAgIGxvZ28uaHJlZiA9ICcjJztcclxuICAgIGxvZ29JbWcuc3JjID0gXCJpbWdzL3RvLWRvLWxpc3QucG5nXCI7XHJcbiAgICBsb2dvSW1nLmFsdCA9ICdsb2dvJztcclxuXHJcbiAgICBhcHBUaXRsZS5pbm5lckhUTUwgPSAnQXBwIG5hbWUnO1xyXG5cclxuICAgIGFkZEJ0bi5pZCA9ICdhZGRCdG4nOyBcclxuICAgIGFkZEJ0bi5pbm5lckhUTUwgPSAnKyc7XHJcbiAgICB0ZW1wSWNvMi5pZCA9ICdpY28nOyBcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVQcm9tcHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gICAgbGVmdFNpZGUuYXBwZW5kKGxvZ28sIGFwcFRpdGxlKTtcclxuXHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGFkZEJ0biwgdGVtcEljbzIpO1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmQobGVmdFNpZGUsIHJpZ2h0U2lkZSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07IiwiaW1wb3J0IHByb21wdFZhbGlkYXRpb24gZnJvbSBcIi4vcHJvbXB0VmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnktZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVByb21wdCgpIHtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcclxuXHJcbiAgICBsZXQgcHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9tcHQuaWQgPSAncHJvbXB0JztcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIC8vIGNyZWF0aW5nIGlucHV0cyBhbmQgbGFiZWxzXHJcbiAgICAvLyB0aXRsZVxyXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlSW5wdXQnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlSW5wdXQnO1xyXG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCB0aXRsZS4uLidcclxuXHJcbiAgICB0aXRsZUxhYmVsLmlubmVySFRNTCA9IFwiVGFzaydzIHRpdGxlOlwiO1xyXG4gICAgLy9hcHBlbmRpbmcgdGl0bGVcclxuICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcclxuICAgIFxyXG4gICAgLy9kZXNjcmlwdGlvblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbklucHV0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbklucHV0JztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgZGVzY3JpcHRpb24uLi4nXHJcbiAgICBcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuXHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgZHVlIGRhdGU6XCI7XHJcbiAgICBkdWVEYXRlbkRpdi5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xyXG4gICAgLy9wcmlvcml0eVxyXG4gICAgbGV0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgY2F0ZWdvcnlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbiAgICBjYXRlZ29yeUlucHV0LmlkID0gJ2NhdGVnb3J5U2VsZWN0JztcclxuICAgIGNhdGVnb3J5SW5wdXQucGxhY2Vob2xkZXIgPSAnQ2F0ZWdvcnkgbmFtZSc7XHJcbiAgICBjYXRlZ29yeUlucHV0LnR5cGUgPSAndGV4dCc7XHJcblxyXG4gICAgY2F0ZWdvcnlMYWJlbC5pbm5lckhUTUwgPSBcIklucHV0IGNhdGVnb3J5OlwiO1xyXG5cclxuICAgIGNhdGVnb3J5RGl2LmFwcGVuZChjYXRlZ29yeUxhYmVsLCBjYXRlZ29yeUlucHV0KTtcclxuICAgIC8vY2F0ZWdvcnlcclxuICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7XHJcbiAgICBsZXQgbm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBub25lLnRleHQgPSBcIk5vbmVcIjtcclxuICAgIGxldCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgbG93LnRleHQgPSBcIkxvd1wiO1xyXG4gICAgbGV0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBtZWRpdW0udGV4dCA9IFwiTWVkaXVtXCI7XHJcbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBoaWdoLnRleHQgPSBcIkhpZ2hcIjtcclxuXHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobm9uZSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQobG93KTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChtZWRpdW0pO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKGhpZ2gpO1xyXG5cclxuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJTZWxlY3QgcHJpb3JpdHk6XCI7XHJcblxyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5TGFiZWwsIHByaW9yaXR5U2VsZWN0KTtcclxuICAgIC8vYnV0dG9uXHJcbiAgICBsZXQgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IGNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm0uaWQgPSAnY29uZmlybUJ0bic7XHJcbiAgICBjb25maXJtLmlubmVySFRNTCA9IFwiQ3JlYXRlXCI7XHJcbiAgICBjb25maXJtLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy9zYXZpbmcgZm9ybSBkYXRhXHJcbiAgICAgICAgbGV0IHRpdGxlVmFsdWUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvblZhbHVlID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBwcmlvcml0eVZhbHVlID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgbGV0IGNhdGVnb3J5VmFsdWUgPSBjYXRlZ29yeUlucHV0LnZhbHVlO1xyXG4gICAgICAgIC8vbG9naWNcclxuICAgICAgICBpZiAodGl0bGVWYWx1ZS5sZW5ndGggPT09IDAgfHwgZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcHJvbXB0VmFsaWRhdGlvbih0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjcmVhdGVDYXRlZ29yeSh0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIGNhdGVnb3J5VmFsdWUpXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgYmFja2dyb3VuZCBvdmVybGF5XHJcbiAgICAgICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAvL3Bhc3NpbmcgYXJncyB0byB0aGUgY3JlYXRlIGNhdGVnb3J5IGZ1bmNcclxuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfX0pO1xyXG5cclxuICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsQnRuJztcclxuICAgIGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWwuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcclxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XHJcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS13cmFwcGVyLWRpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQocHJvbXB0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0bkRpdi5hcHBlbmQoY2FuY2VsLGNvbmZpcm0pO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgY2F0ZWdvcnlEaXYsIGR1ZURhdGVuRGl2LCBwcmlvcml0eURpdiwgYnRuRGl2KTtcclxuXHJcbiAgICBwcm9tcHQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb21wdCk7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvbXB0VmFsaWRhdGlvbih0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0KSB7XHJcbiAgICBpZiAodGl0bGVWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBsZWZ0IGVtcHR5XCI7XHJcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJDYW4ndCBiZSBsZWZ0IGVtcHR5XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvblZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgY3JlYXRlVG9kbyBmcm9tIFwiLi90b2RvLWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIGNhdGVnb3J5VGl0bGUpIHtcclxuXHJcbiAgICAvL2RlY2xhcmluZyB2YXJpYWJsZXNcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXknKTtcclxuICAgIGxldCB0b2RvID0gY3JlYXRlVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSk7XHJcbiAgICBsZXQgZXhpc3RpbmdDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhdGVnb3J5VGl0bGUpO1xyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgbm8gY2F0ZWdvcmllcywgY3JlYXRlIGFuICdvdmVyYWxsJyBjYXRlZ29yeVxyXG4gICAgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHJcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2F0ZWdvcnkuaWQgPSAnb3ZlcmFsbCc7XHJcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnT3ZlcmFsbCc7XHJcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG5cclxuICAgIC8vaWYgZGlzcGxheSBoYXMgYW4gJ292ZXJhbGwnIGNhdGVnb3J5LCBoYW5kbGUgY3JlYXRpbmcgbmV3IGNhdGVnb3J5XHJcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBzZWxlY3RlZCBhbiBleGlzdGluZyBjYXRlZ29yeSwgYWRkIG5ldyB0by1kbyB0byB0aGF0IGNhdGVnb3J5XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nQ2F0ZWdvcnkpIHtcclxuXHJcbiAgICAgICAgICAgIGV4aXN0aW5nQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG4gICAgICAgIC8vaWYgdXNlciBtYWRlIGEgbmV3IGNhdGVnb3J5LCBhZGQgbmV3IHRvLWRvIHRvIHRoYXQgY2F0ZWdvcnkgYW5kIGFzc2lnblxyXG4gICAgICAgIC8vaXQgdG8gdGhlIGRpc3BsYXkgZWxlbWVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgY2F0ZWdvcnkuaWQgPSBjYXRlZ29yeVRpdGxlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY2F0ZWdvcnlUaXRsZTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgbm8gY2F0ZWdvcnkgaXMgY2hvc2VuLCBhc3NpZ24gdG8tZG8gdG8gJ292ZXJhbGwnIGNhdGVnb3J5XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeVRpdGxlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG92ZXJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmFsbC5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfX07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG5cclxuICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgdG9kb1RpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdG9kb1RpdGxlLmlkID0gJ3RpdGxlJztcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvb3RlcicpO1xyXG5cclxuICAgIGxldCBkaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRpc3BsYXlEYXRlLmlubmVySFRNTCA9IGR1ZURhdGU7XHJcblxyXG4gICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xyXG5cclxuICAgIGxldCB0ZW1wSWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgdGVtcEljbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRlbXBJY28uaWQgPSAnaWNvJztcclxuICAgIHRlbXBJY28yLmlkID0gJ2ljbyc7XHJcblxyXG4gICAgaWNvbkNvbnRhaW5lci5hcHBlbmQodGVtcEljbywgdGVtcEljbzIpO1xyXG4gICAgZm9vdGVyLmFwcGVuZChkaXNwbGF5RGF0ZSwgaWNvbkNvbnRhaW5lcik7XHJcbiAgICBhcnRpY2xlLmFwcGVuZCh0b2RvVGl0bGUsIGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuIGFydGljbGU7XHJcbn07IiwiaW1wb3J0IGdlbmVyYXRlQXNpZGUgZnJvbSBcIi4vYXNpZGUtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBnZW5lcmF0ZUFzaWRlKCk7XHJcbiAgICBnZW5lcmF0ZURpc3BsYXkoKTtcclxuICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbn07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQXNpZGUoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXNpZGVTZWN0aW9uJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcclxuXHJcblxyXG4gICAgLy9DcmVhdGluZyBmaWx0ZXJzIHRoYXQgd2lsbCBkaXNwbGF5IHRvLWRvc1xyXG4gICAgLy9ieSB0aGVpciBwcmlvcml0eVxyXG4gICAgbGV0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hc3NpZ25pbmcgY2xhc3Nlc1xyXG4gICAgbm9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBpY29uc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9ub1ByaW9yaXR5LnBuZyc7XHJcbiAgICBsb3dQcmlvcml0eUljby5zcmMgPSAnaW1ncy9sb3dQcmlvcml0eS5wbmcnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlJY28uc3JjID0gJ2ltZ3MvbWVkaXVtUHJpb3JpdHkucG5nJztcclxuICAgIGhpZ2hQcmlvcml0eUljby5zcmMgPSAnaW1ncy9oaWdoUHJpb3JpdHkucG5nJztcclxuXHJcbiAgICAvL2NyZWF0aW5nIHRpdGxlc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbG93UHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTm9uZSc7XHJcbiAgICBsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdMb3cnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTWVkaXVtJztcclxuICAgIGhpZ2hQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdIaWdoJztcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcbiAgICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSxub1ByaW9yaXR5LGxvd1ByaW9yaXR5LG1lZGl1bVByaW9yaXR5LGhpZ2hQcmlvcml0eSk7XHJcblxyXG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWN0aW9uKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFzaWRlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXkoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbkRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uRGlzcGxheSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVNYWluIGZyb20gXCIuL21haW4tZ2VuZXJhdG9yXCI7XHJcblxyXG5nZW5lcmF0ZUhlYWRlcigpO1xyXG5nZW5lcmF0ZU1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
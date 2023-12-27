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
/* harmony import */ var _generateDefaultCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



function createCategory(todoTitle, todoDescription, todoDueDate, todoPriority, categoryTitle) {

    //declaring variables
    let display = document.getElementById('display');
    let todo = (0,_todo_generator__WEBPACK_IMPORTED_MODULE_0__["default"])(todoTitle, todoDescription, todoDueDate, todoPriority);
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
/* harmony import */ var _completeTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


function createTodo(title, description, dueDate, priority) {
    let article = document.createElement('article');
    article.classList.add('todo');
    article.classList.add(priority);

    let todoTitle = document.createElement('h3');
    todoTitle.innerHTML = title;
    todoTitle.id = 'title';
    let footer = document.createElement('div');
    footer.classList.add('todo-footer');

    let todoDescription = document.createElement('p');
    todoDescription.innerHTML = description;
    todoDescription.id = 'description';

    let displayDate = document.createElement('p');
    displayDate.innerHTML = dueDate;

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
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ completeTask)
/* harmony export */ });
/* harmony import */ var _checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


function completeTask(task) {
    task.classList.add('completed');
    task.addEventListener('animationend', () => {
        let category = document.getElementById(task.parentElement.id);
        task.remove();
        (0,_checkCategoryChildren__WEBPACK_IMPORTED_MODULE_0__["default"])(category);
    });
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkChildren)
/* harmony export */ });
/* harmony import */ var _generateDefaultCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


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
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDefaultCat)
/* harmony export */ });
function createDefaultCat() {
    let display = document.getElementById('display');
    
    let category = document.createElement('div');
    category.id = 'overall';
    let title = document.createElement('h2');
    title.innerHTML = 'Overall';
    category.appendChild(title);
    display.appendChild(category);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateMain)
/* harmony export */ });
/* harmony import */ var _aside_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _display_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
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
/* 10 */
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
/* 11 */
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
/* harmony import */ var _main_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



(0,_header_generator__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_main_generator__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aGVhZGVyLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvRG8tY3JlYXRpb24tcHJvbXB0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvbXB0VmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NhdGVnb3J5LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8tZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcGxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY2hlY2tDYXRlZ29yeUNoaWxkcmVuLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZ2VuZXJhdGVEZWZhdWx0Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tYWluLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2FzaWRlLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXktZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZW5lcmF0ZVByb21wdCBmcm9tIFwiLi90b0RvLWNyZWF0aW9uLXByb21wdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XHJcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGxldCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsZXQgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBhcHBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGV0IGFkZEljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGxldCBzbWFsbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZWZ0U2lkZS5pZCA9ICdsZWZ0LWhlYWRlcic7XHJcbiAgICByaWdodFNpZGUuaWQgPSAncmlnaHQtaGVhZGVyJztcclxuXHJcbiAgICBsb2dvLmhyZWYgPSAnIyc7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiaW1ncy90by1kby1saXN0LnBuZ1wiO1xyXG4gICAgbG9nb0ltZy5hbHQgPSAnbG9nbyc7XHJcblxyXG4gICAgYXBwVGl0bGUuaW5uZXJIVE1MID0gJ0N5Y2xvbmUgY2hlY2snO1xyXG4gICAgc21hbGxUaXRsZS5pbm5lckhUTUwgPSAnQmxvdyBhd2F5IGFsbCB5b3VyIHRhc2tzJztcclxuXHJcbiAgICBhZGRCdG4uaWQgPSAnYWRkQnRuJzsgXHJcblxyXG4gICAgYWRkSWNvLnNyYyA9ICdpbWdzL2FkZEljb24ucG5nJztcclxuXHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0td3JhcHBlci1kaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgZ2VuZXJhdGVQcm9tcHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKGFwcFRpdGxlLCAgc21hbGxUaXRsZSk7XHJcblxyXG4gICAgbGVmdFNpZGUuYXBwZW5kKGxvZ28sIHRpdGxlRGl2KTtcclxuXHJcbiAgICBhZGRCdG4uYXBwZW5kQ2hpbGQoYWRkSWNvKTtcclxuXHJcbiAgICByaWdodFNpZGUuYXBwZW5kKGFkZEJ0bik7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZChsZWZ0U2lkZSwgcmlnaHRTaWRlKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTsiLCJpbXBvcnQgcHJvbXB0VmFsaWRhdGlvbiBmcm9tIFwiLi9wcm9tcHRWYWxpZGF0aW9uXCI7XHJcbmltcG9ydCBjcmVhdGVDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS1nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBwcm9tcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb21wdC5pZCA9ICdwcm9tcHQnO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gY3JlYXRpbmcgaW5wdXRzIGFuZCBsYWJlbHNcclxuICAgIC8vIHRpdGxlXHJcbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVJbnB1dCc7XHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IHRpdGxlLi4uJ1xyXG4gICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSA0MDtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gXCJUYXNrJ3MgdGl0bGU6XCI7XHJcbiAgICAvL2FwcGVuZGluZyB0aXRsZVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uSW5wdXQnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdJbnB1dCBkZXNjcmlwdGlvbi4uLidcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gNjA7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IFwiU2hvcnQgZGVzY3JpcHRpb246XCI7XHJcbiAgICAvL2FwcGVuZGluZyBkZXNjcmlwdGlvblxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgXHJcbiAgICAvL2R1ZSBkYXRlXHJcbiAgICBsZXQgZHVlRGF0ZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIFxyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuXHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgZGF0ZTpcIjtcclxuICAgIGR1ZURhdGVuRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XHJcbiAgICAvL3ByaW9yaXR5XHJcbiAgICBsZXQgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBjYXRlZ29yeUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cclxuICAgIGNhdGVnb3J5SW5wdXQuaWQgPSAnY2F0ZWdvcnlTZWxlY3QnO1xyXG4gICAgY2F0ZWdvcnlJbnB1dC5wbGFjZWhvbGRlciA9ICdDYXRlZ29yeSBuYW1lJztcclxuICAgIGNhdGVnb3J5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgICBjYXRlZ29yeUxhYmVsLmlubmVySFRNTCA9IFwiSW5wdXQgY2F0ZWdvcnk6XCI7XHJcblxyXG4gICAgY2F0ZWdvcnlEaXYuYXBwZW5kKGNhdGVnb3J5TGFiZWwsIGNhdGVnb3J5SW5wdXQpO1xyXG4gICAgLy9jYXRlZ29yeVxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5U2VsZWN0JztcclxuICAgIGxldCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG5vbmUudGV4dCA9IFwiTm9uZVwiO1xyXG4gICAgbGV0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBsb3cudGV4dCA9IFwiTG93XCI7XHJcbiAgICBsZXQgbWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG1lZGl1bS50ZXh0ID0gXCJNZWRpdW1cIjtcclxuICAgIGxldCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGhpZ2gudGV4dCA9IFwiSGlnaFwiO1xyXG5cclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChub25lKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmFkZChsb3cpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuYWRkKG1lZGl1bSk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5hZGQoaGlnaCk7XHJcblxyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcclxuXHJcbiAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgLy9idXR0b25cclxuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgY29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybS5pZCA9ICdjb25maXJtQnRuJztcclxuICAgIGNvbmZpcm0uaW5uZXJIVE1MID0gXCJDcmVhdGVcIjtcclxuICAgIGNvbmZpcm0udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvL3NhdmluZyBmb3JtIGRhdGFcclxuICAgICAgICBsZXQgdGl0bGVWYWx1ZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uVmFsdWUgPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBkdWVEYXRlVmFsdWUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5VmFsdWUgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBsZXQgY2F0ZWdvcnlWYWx1ZSA9IGNhdGVnb3J5SW5wdXQudmFsdWU7XHJcbiAgICAgICAgLy9sb2dpY1xyXG4gICAgICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCB8fCBkZXNjcmlwdGlvblZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgY2F0ZWdvcnlWYWx1ZSlcclxuICAgICAgICAgICAgLy9yZW1vdmluZyBiYWNrZ3JvdW5kIG92ZXJsYXlcclxuICAgICAgICAgICAgbGV0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xyXG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIC8vcGFzc2luZyBhcmdzIHRvIHRoZSBjcmVhdGUgY2F0ZWdvcnkgZnVuY1xyXG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHByb21wdCk7XHJcbiAgICB9fSk7XHJcblxyXG4gICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWxCdG4nO1xyXG4gICAgY2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbC5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcclxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXdyYXBwZXItZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChwcm9tcHQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuRGl2LmFwcGVuZChjYW5jZWwsY29uZmlybSk7XHJcblxyXG4gICAgLy9hcHBlbmRpbmcgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBjYXRlZ29yeURpdiwgZHVlRGF0ZW5EaXYsIHByaW9yaXR5RGl2LCBidG5EaXYpO1xyXG5cclxuICAgIHByb21wdC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvbXB0KTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9tcHRWYWxpZGF0aW9uKHRpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQpIHtcclxuICAgIGlmICh0aXRsZVZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICBpZiAoZGVzY3JpcHRpb25WYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkNhbid0IGJlIGxlZnQgZW1wdHlcIjtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uVmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9IFwiQ2FuJ3QgYmUgbGVmdCBlbXB0eVwiO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBjcmVhdGVUb2RvIGZyb20gXCIuL3RvZG8tZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBjcmVhdGVEZWZhdWx0Q2F0IGZyb20gXCIuL2dlbmVyYXRlRGVmYXVsdENhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgY2F0ZWdvcnlUaXRsZSkge1xyXG5cclxuICAgIC8vZGVjbGFyaW5nIHZhcmlhYmxlc1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgbGV0IHRvZG8gPSBjcmVhdGVUb2RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICAgIGxldCBleGlzdGluZ0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2F0ZWdvcnlUaXRsZSk7XHJcblxyXG4gICAgLy9pZiBkaXNwbGF5IGhhcyBubyBjYXRlZ29yaWVzLCBjcmVhdGUgYW4gJ292ZXJhbGwnIGNhdGVnb3J5XHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xyXG5cclxuICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KCk7XHJcblxyXG4gICAgLy9pZiBkaXNwbGF5IGhhcyBhbiAnb3ZlcmFsbCcgY2F0ZWdvcnksIGhhbmRsZSBjcmVhdGluZyBuZXcgY2F0ZWdvcnlcclxuICAgIH0gZWxzZSBpZiAoZGlzcGxheS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIHNlbGVjdGVkIGFuIGV4aXN0aW5nIGNhdGVnb3J5LCBhZGQgbmV3IHRvLWRvIHRvIHRoYXQgY2F0ZWdvcnlcclxuICAgICAgICBpZiAoZXhpc3RpbmdDYXRlZ29yeSkge1xyXG5cclxuICAgICAgICAgICAgZXhpc3RpbmdDYXRlZ29yeS5hcHBlbmRDaGlsZCh0b2RvKTtcclxuXHJcbiAgICAgICAgLy9pZiB1c2VyIG1hZGUgYSBuZXcgY2F0ZWdvcnksIGFkZCBuZXcgdG8tZG8gdG8gdGhhdCBjYXRlZ29yeSBhbmQgYXNzaWduXHJcbiAgICAgICAgLy9pdCB0byB0aGUgZGlzcGxheSBlbGVtZW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5pZCA9IGNhdGVnb3J5VGl0bGU7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBjYXRlZ29yeVRpdGxlO1xyXG5cclxuICAgICAgICAgICAgLy9pZiBubyBjYXRlZ29yeSBpcyBjaG9zZW4sIGFzc2lnbiB0by1kbyB0byAnb3ZlcmFsbCcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5VGl0bGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3ZlcmFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVyYWxsJyk7XHJcbiAgICAgICAgICAgICAgICBvdmVyYWxsLmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9fTsiLCJpbXBvcnQgY29tcGxldGVUYXNrIGZyb20gXCIuL2NvbXBsZXRlVGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcclxuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcclxuXHJcbiAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRvZG9UaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIHRvZG9UaXRsZS5pZCA9ICd0aXRsZSc7XHJcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgndG9kby1mb290ZXInKTtcclxuXHJcbiAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLmlkID0gJ2Rlc2NyaXB0aW9uJztcclxuXHJcbiAgICBsZXQgZGlzcGxheURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkaXNwbGF5RGF0ZS5pbm5lckhUTUwgPSBkdWVEYXRlO1xyXG5cclxuICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbnMnKTtcclxuXHJcbiAgICBsZXQgY29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgZWRpdEJ0bi5pZCA9ICdlZGl0QnRuJztcclxuICAgIGNvbXBsZXRlQnRuLmlkID0gJ2NvbXBsZXRlQnRuJztcclxuXHJcbiAgICBsZXQgY29tcGxldGVJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbXBsZXRlSWNvLnNyYyA9ICdpbWdzL2NvbXBsZXRlLnBuZyc7XHJcblxyXG4gICAgbGV0IGVkaXRJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGVkaXRJY28uc3JjID0gJ2ltZ3MvZWRpdC5wbmcnO1xyXG5cclxuICAgIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBjb21wbGV0ZVRhc2soYXJ0aWNsZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljbyk7XHJcbiAgICBjb21wbGV0ZUJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZUljbyk7XHJcbiAgICBpY29uQ29udGFpbmVyLmFwcGVuZChjb21wbGV0ZUJ0biwgZWRpdEJ0bik7XHJcbiAgICBmb290ZXIuYXBwZW5kKGRpc3BsYXlEYXRlLCBpY29uQ29udGFpbmVyKTtcclxuICAgIGFydGljbGUuYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBmb290ZXIpO1xyXG5cclxuICAgIHJldHVybiBhcnRpY2xlO1xyXG59OyIsImltcG9ydCBjaGVja0NoaWxkcmVuIGZyb20gXCIuL2NoZWNrQ2F0ZWdvcnlDaGlsZHJlblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2spIHtcclxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLnBhcmVudEVsZW1lbnQuaWQpO1xyXG4gICAgICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgY2hlY2tDaGlsZHJlbihjYXRlZ29yeSk7XHJcbiAgICB9KTtcclxufTsiLCJpbXBvcnQgY3JlYXRlRGVmYXVsdENhdCBmcm9tIFwiLi9nZW5lcmF0ZURlZmF1bHRDYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tDaGlsZHJlbihjYXRlZ29yeSkge1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG5cclxuICAgIGlmIChjYXRlZ29yeS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjYXRlZ29yeS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGlzcGxheS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjcmVhdGVEZWZhdWx0Q2F0KClcclxuICAgIH1cclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Q2F0KCkge1xyXG4gICAgbGV0IGRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpO1xyXG4gICAgXHJcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhdGVnb3J5LmlkID0gJ292ZXJhbGwnO1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdPdmVyYWxsJztcclxuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG59IiwiaW1wb3J0IGdlbmVyYXRlQXNpZGUgZnJvbSBcIi4vYXNpZGUtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBnZW5lcmF0ZURpc3BsYXkgZnJvbSBcIi4vZGlzcGxheS1nZW5lcmF0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUNhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5LWdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5cclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICBnZW5lcmF0ZUFzaWRlKCk7XHJcbiAgICBnZW5lcmF0ZURpc3BsYXkoKTtcclxuICAgIGNyZWF0ZUNhdGVnb3J5KCk7XHJcbn07IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlQXNpZGUoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXNpZGVTZWN0aW9uJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcclxuXHJcblxyXG4gICAgLy9DcmVhdGluZyBmaWx0ZXJzIHRoYXQgd2lsbCBkaXNwbGF5IHRvLWRvc1xyXG4gICAgLy9ieSB0aGVpciBwcmlvcml0eVxyXG4gICAgbGV0IG5vUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgLy9hc3NpZ25pbmcgY2xhc3Nlc1xyXG4gICAgbm9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgLy9jcmVhdGluZyBpY29uc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlJY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxldCBsb3dQcmlvcml0eUljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbGV0IG1lZGl1bVByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5SWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgbm9Qcmlvcml0eUljby5zcmMgPSAnaW1ncy9ub1ByaW9yaXR5LnBuZyc7XHJcbiAgICBsb3dQcmlvcml0eUljby5zcmMgPSAnaW1ncy9sb3dQcmlvcml0eS5wbmcnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlJY28uc3JjID0gJ2ltZ3MvbWVkaXVtUHJpb3JpdHkucG5nJztcclxuICAgIGhpZ2hQcmlvcml0eUljby5zcmMgPSAnaW1ncy9oaWdoUHJpb3JpdHkucG5nJztcclxuXHJcbiAgICAvL2NyZWF0aW5nIHRpdGxlc1xyXG4gICAgbGV0IG5vUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbG93UHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgbWVkaXVtUHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsZXQgaGlnaFByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIG5vUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTm9uZSc7XHJcbiAgICBsb3dQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdMb3cnO1xyXG4gICAgbWVkaXVtUHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnTWlkJztcclxuICAgIGhpZ2hQcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdIaWdoJztcclxuXHJcbiAgICAvL2FwcGVuZGluZyBjaGlsZHJlblxyXG4gICAgbm9Qcmlvcml0eS5hcHBlbmQobm9Qcmlvcml0eUljbywgbm9Qcmlvcml0eVRpdGxlKTtcclxuICAgIGxvd1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvcml0eUljbyxsb3dQcmlvcml0eVRpdGxlKTtcclxuICAgIG1lZGl1bVByaW9yaXR5LmFwcGVuZChtZWRpdW1Qcmlvcml0eUljbyxtZWRpdW1Qcmlvcml0eVRpdGxlKTtcclxuICAgIGhpZ2hQcmlvcml0eS5hcHBlbmQoaGlnaFByaW9yaXR5SWNvLGhpZ2hQcmlvcml0eVRpdGxlKTtcclxuXHJcbiAgICBwcmlvcml0eVNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSxub1ByaW9yaXR5LGxvd1ByaW9yaXR5LG1lZGl1bVByaW9yaXR5LGhpZ2hQcmlvcml0eSk7XHJcblxyXG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWN0aW9uKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFzaWRlKTtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZURpc3BsYXkoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc2VjdGlvbkRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uRGlzcGxheSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVNYWluIGZyb20gXCIuL21haW4tZ2VuZXJhdG9yXCI7XHJcblxyXG5nZW5lcmF0ZUhlYWRlcigpO1xyXG5nZW5lcmF0ZU1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
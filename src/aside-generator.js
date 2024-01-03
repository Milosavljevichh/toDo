import changePriorityState from "./changePriorityState";
import checkCatDisplay from "./checkCategorysDisplay";
import changeVisibilityByDate from "./changeVisibilityByDate";

export default function generateAside() {
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
        changePriorityState(noPriorityTitle.innerHTML, noneSelected);
        checkCatDisplay();
    });
    lowPriority.addEventListener('click', ()=>{
        if (!lowSelected) {
            lowSelected = true;
        } else {
            lowSelected = false;
        };
        changePriorityState(lowPriorityTitle.innerHTML, lowSelected);
        checkCatDisplay();
    });
    mediumPriority.addEventListener('click', ()=>{
        if (!midSelected) {
            midSelected = true;
        } else {
            midSelected = false;
        };
        changePriorityState(mediumPriorityTitle.innerHTML, midSelected);
        checkCatDisplay();
    });
    highPriority.addEventListener('click', ()=>{
        if (!highSelected) {
            highSelected = true;
        } else {
            highSelected = false;
        };
        changePriorityState(highPriorityTitle.innerHTML, highSelected);
        checkCatDisplay();
    });

    //creating due date section
    // let dueDateSection = document.createElement('div');
    // dueDateSection.classList.add('asideSection');

    // let dueDateTitle = document.createElement('h2');
    // dueDateTitle.innerHTML = 'Due date';

    // let noDueDate = document.createElement('div');
    // let dueThisWeek = document.createElement('div');
    // let dueToday = document.createElement('div');

    // noDueDate.classList.add('menu-item');
    // dueThisWeek.classList.add('menu-item');
    // dueToday.classList.add('menu-item');

    // let noDueDateIco = document.createElement('img');
    // let dueThisWeekIco = document.createElement('img');
    // let dueTodayIco = document.createElement('img');

    // noDueDateIco.src = 'imgs/noDueDate.png';
    // dueThisWeekIco.src = 'imgs/weekDueDate.png';
    // dueTodayIco.src = 'imgs/todayDueDate.png';

    // let noDueDateTitle = document.createElement('h3');
    // let dueThisWeekTitle = document.createElement('h3');
    // let dueTodayTitle = document.createElement('h3');

    // noDueDateTitle.innerHTML = 'None';
    // dueThisWeekTitle.innerHTML = 'This week';
    // dueThisWeek.id = 'this-week';
    // dueTodayTitle.innerHTML = 'Today';

    
    // let noDateSelected = false;
    // let thisWeekSelected = false;

    // noDueDate.addEventListener('click', ()=>{
    //     if (!noDateSelected) {
    //         noDateSelected = true;
    //     } else {
    //         noDateSelected = false;
    //     };
    //     changeVisibilityByDate(noDateSelected);
    // });
    // dueThisWeek.addEventListener('click', ()=>{
    //     if (!thisWeekSelected) {
    //         thisWeekSelected = true;
    //     } else {
    //         thisWeekSelected = false;
    //     };
    //     changeVisibilityByDate(thisWeekSelected);
    // })

    //appending children
    noPriority.append(noPriorityIco, noPriorityTitle);
    lowPriority.append(lowPriorityIco,lowPriorityTitle);
    mediumPriority.append(mediumPriorityIco,mediumPriorityTitle);
    highPriority.append(highPriorityIco,highPriorityTitle);


    prioritySection.append(sectionTitle,noPriority,lowPriority,mediumPriority,highPriority);

    aside.append(prioritySection);

    main.appendChild(aside);
};
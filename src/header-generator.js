import generatePrompt from "./toDo-creation-prompt";

export default function generateHeader() {
    let wrapper = document.getElementById('wrapper');

    let header = document.createElement('header');

    let leftSide = document.createElement('div');
    let rightSide = document.createElement('div');
    let logo = document.createElement('a');
    let logoImg = document.createElement('img');

    let appTitle = document.createElement('h1');

    let addBtn = document.createElement('button');
    let tempIco2 = document.createElement('div');

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
    addBtn.innerHTML = '+';
    tempIco2.id = 'ico'; 

    addBtn.addEventListener('click', () => {
        let root = document.querySelector(':root');
        root.style.setProperty('--wrapper-display', 'block');
        generatePrompt();
    });

    logo.appendChild(logoImg);

    titleDiv.append(appTitle,  smallTitle);

    leftSide.append(logo, titleDiv);

    rightSide.append(addBtn, tempIco2);

    header.append(leftSide, rightSide);
    wrapper.appendChild(header);
};
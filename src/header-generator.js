export default function generateHeader() {
    let wrapper = document.getElementById('wrapper');

    let header = document.createElement('header');

    let leftSide = document.createElement('div');
    let rightSide = document.createElement('div');
    let logo = document.createElement('a');
    let logoImg = document.createElement('img');

    let appTitle = document.createElement('h1');

    let tempIco = document.createElement('div');
    let tempIco2 = document.createElement('div');

    leftSide.id = 'left-header';
    rightSide.id = 'right-header';

    logo.href = '#';
    logoImg.src = "imgs/to-do-list.png";
    logoImg.alt = 'logo';

    appTitle.innerHTML = 'App name';

    tempIco.id = 'ico'; 
    tempIco2.id = 'ico'; 

    logo.appendChild(logoImg);

    leftSide.append(logo, appTitle);

    rightSide.append(tempIco, tempIco2);

    header.append(leftSide, rightSide);
    wrapper.appendChild(header);
};
export default function generateHeader() {
    let wrapper = document.getElementById('wrapper');

    let header = document.createElement('header');

    let leftSide = document.createElement('div');
    let rightSide = document.createElement('div');
    leftSide.id = 'left-header';
    rightSide.id = 'right-header';

    let logo = document.createElement('a');
    logo.href = '#';
    let logoImg = document.createElement('img');
    logoImg.src = "imgs/to-do-list.png";
    logoImg.alt = 'logo';
    logo.appendChild(logoImg);

    let appTitle = document.createElement('h1');
    appTitle.innerHTML = 'App name';

    leftSide.append(logo, appTitle);

    let tempIco = document.createElement('div');
    let tempIco2 = document.createElement('div');
    tempIco.id = 'ico'; 
    tempIco2.id = 'ico'; 
    rightSide.append(tempIco, tempIco2);

    header.append(leftSide, rightSide);
    wrapper.appendChild(header);

};
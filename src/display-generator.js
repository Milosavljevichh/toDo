export default function generateDisplay() {
    let main = document.getElementById('main');

    let sectionDisplay = document.createElement('section');
    sectionDisplay.id = 'display';

    main.appendChild(sectionDisplay);
};
import generateAside from "./aside-generator";
import generateDisplay from "./display-generator";
import createCategory from "./category-generator";

export default function generateMain() {
    let wrapper = document.getElementById('wrapper');

    let main = document.createElement('main');
    main.id = 'main';
    wrapper.appendChild(main);
    generateAside();
    generateDisplay();
    createCategory();
};
import createCategory from "./category-generator";

export default function loadSavedCategories(key) {

    let display = document.getElementById('display');
    
    let category = document.createElement('div');
    
    category.id = key;
    
    let title = document.createElement('h2');
    title.innerHTML = key;
    
    category.appendChild(title);
            
    display.appendChild(category);
            
    
};
import generateCategoriesDom from "./DOM-for-loaded-category";

export default function loadSavedCategories() {

    Object.keys(localStorage).forEach(item => {
        if (item.includes('_category_')) {
            generateCategoriesDom(JSON.parse(localStorage.getItem(item)));
            
        } 
    });
            
    
};
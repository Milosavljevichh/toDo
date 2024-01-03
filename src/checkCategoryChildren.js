import createDefaultCat from "./generateDefaultCategory";

export default function checkChildren(category) {
    let display = document.getElementById('display');

    if (category.children.length === 1) {
        localStorage.removeItem('_category_'+category.id);
        category.remove();
    }

    if (display.children.length === 0) {
        createDefaultCat();
    }
};
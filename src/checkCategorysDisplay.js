export default function checkCatDisplay() {
    let display = document.getElementById('display');
    let allCategories = display.childNodes;
    
    
    allCategories.forEach((category)=>{
        let allTodos = category.querySelectorAll('article[style="display: none;"]');
        if (category.querySelectorAll('article').length === allTodos.length) {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    })
}
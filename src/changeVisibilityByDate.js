import { isToday } from "date-fns";
import { isThisWeek } from "date-fns";

export default function changeVisibilityByDate(selected){
    console.log('gay')
    let todosList = document.querySelectorAll('.todo');
    todosList.forEach(todo=>{
        let date = todo.querySelector('.todo-footer').querySelector('p').innerHTML;
        if (date) {
            if (isThisWeek(new Date(date))) {
                if (selected) {
                    todo.classList.add('selectedByDate');
                } else {
                    todo.classList.remove('selectedByDate');
                }
            } else if (isToday(new Date(date))) {
                if (selected) {
                    todo.classList.add('selectedByDate');
                } else {
                    todo.classList.remove('selectedByDate');
                }
            }
        } else if (date===''){
            if (selected) {
                todo.classList.add('selectedByDate');
            } else {
                todo.classList.remove('selectedByDate');
            } 
        }
    })

    let selectedTodos = document.querySelectorAll('.selectedByDate');
    todosList.forEach((todo)=> {
        if (selectedTodos.length !== 0) {
            if (todo.classList.contains('selectedByDate')) {
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
        } else {
            todo.style.display = 'flex';
        }
    })
}
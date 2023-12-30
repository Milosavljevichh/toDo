# toDo

1. To-dos will be dinamically created objects, using classes to generate them

2. To-dos will have a:
    -title
    -description
    -due date
    -priority
    -notes

3. App will have a seperate list of to-dos (categories)

4. App logic (creating new to-dos, marking them as complete etc.) will be seperated from DOM 

5. User interface should be able to:
    -view all categories
    -view all to-dos in a category (just the title and due date, the color will
    depend on the to-do's priority)
    -on click,expand a single to-do to view/edit it's details
    -delete a to-do

6. Aside will have filter buttons for:
    -priority
    -due date




when the button is clicked, it's selected state should be set to true. If it is selected, it should set the todo's display
of other priorities to none. If it's clicked again (same btn, while selected) all priority todos should be visible.
If other priority btn is clicked while another is selected, the selected btn should be unselected and clicked btns state
should be set to selected.

there should be a function for controlling btn state that is called on btn click.
there should be a function that sets todo display, if selected state is active.

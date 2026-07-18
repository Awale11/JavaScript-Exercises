// Adding And Removing Elements

// Create two buttons—one to add a new list item to a list and another to remove the last item from the list. Implement the addItem and removeItem functions as shown in the example.

const list = document.querySelector('#list');
// CreatingElement
function addItem() {

    const addNewList = document.createElement('li');
    // adding textContent
    addNewList.textContent = "RemoveChild";
    // appenChild
    list.appendChild(addNewList);
}
// RemoveChild
function removeItem(){
// NOT= halkan listChild caksigeeda firstChild ayan ka dhigay si aan u arko maxa is badalaya.
    if (list.firstChild) {

        list.removeChild(list.firstChild);

    } else {
        alert('Odi, ka jooji remove-ka ,meesha wax kuma so harin')
    }
    
}
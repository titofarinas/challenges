
const myForm = document.getElementById('myForm');
const txtItem = document.getElementById('txtItem');
const listado = document.getElementById('listItems');


myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (txtItem.value == "") return alert('Indique la nueva tarea tarea')
    createItem(txtItem.value);  
    
}) 

function createItem(x) {
    let listItem = `<li> ${x} <button onclick='deleteItem(this)'>Eliminar</button></li>`
    listado.insertAdjacentHTML("beforeend", listItem);
    txtItem.value = "";
    txtItem.focus();
}


function deleteItem(item) {
    item.parentElement.remove();
}
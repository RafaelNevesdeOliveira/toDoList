let ul = document.getElementById("List")
let li; 
let itemId;
let item;

addTask = () => {
    if(document.getElementById('task').value != ""){
        item   = document.getElementById("task");

        itemId = ul.childElementCount;

        li = createItemElement(itemId, item.value);
        li.appendChild(createRemoveTaskButton(itemId));
        ul.appendChild(li);
        item.value = ''
    }
}

removeTask = (itemId) => {
    for(i = 0; i < ul.children.length ; i++){
        if(ul.children[i].getAttribute("index") == itemId)
        ul.children[i].remove()
    }
}

createItemElement = (itemId, itemValue) => {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));

    return li
}

createRemoveTaskButton = (itemId) =>{
    let button = document.createElement("button")
    button.setAttribute("onclick", "removeTask("+itemId+")"); 
    button.innerHTML = "x"
    return button

}
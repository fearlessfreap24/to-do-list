function addToDo(){
    let todo_text_box = document.getElementById("new_todo_text")
    todo_list = document.getElementById("todo_list")
    todo_text_value = todo_text_box.value
    // console.log(todo_text_value) 
    todo_text_box.value = ""
    todo_text_box.focus()
    todo_text_box.select()
    if (todo_text_value === "") { return }
  
    todo_list_item_div = document.createElement("div")
    todo_list_item_div.id = `todo_list_item_${todo_count}`
    todo_list_item_div.className = "list_item"
    todo_list_item_div.innerText = todo_text_value
    
    todo_list_item_remove_btn = document.createElement("BUTTON")
    todo_list_item_remove_btn.innerText = "Remove"
    todo_list_item_remove_btn.className = "remove_btn"
    todo_list_item_remove_btn.setAttribute("onclick", `removeListItem(${todo_count})`)
    todo_list_item_div.appendChild(todo_list_item_remove_btn)

    todo_list_item_complete_btn = document.createElement("BUTTON")
    todo_list_item_complete_btn.innerText = "Complete"
    todo_list_item_complete_btn.id = `complete${todo_count}`
    todo_list_item_complete_btn.className = "complete_btn"
    todo_list_item_complete_btn.setAttribute("onclick", `completeListItem(${todo_count})`)
    todo_list_item_div.appendChild(todo_list_item_complete_btn)

    todo_list.appendChild(todo_list_item_div)
    
    todo_count++
}

function removeListItem(item_number) {
    // console.log(`Remove item number ${item_number}`)
    document.getElementById(`todo_list_item_${item_number}`).remove()
}

function completeListItem(item_number) {
    document.getElementById(`todo_list_item_${item_number}`).className += " complete_list_item"
    document.getElementById(`complete${item_number}`).remove()
}


let todo_count = 1
document.getElementById("new_todo_text").addEventListener("keypress", function (e) {
    if ( e.code === "Enter" || e.code === "NumpadEnter"){
        addToDo()
    }
})
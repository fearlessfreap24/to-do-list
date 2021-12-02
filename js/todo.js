function addToDo(){
    let todo_text_box = document.getElementById("new_todo_text")
    todo_list = document.getElementById("todo_list")
    todo_text_value = todo_text_box.value
    console.log(todo_text_value) 
    todo_text_box.value = ""
    todo_text_box.focus()
    todo_text_box.select()
    
    
    todo_count++
}


let todo_count = 1
document.getElementById("new_todo_text").addEventListener("keypress", function (e) {
    if ( e.code === "Enter" || e.code === "NumpadEnter"){
        addToDo()
    }
})
let initialState = {
    text:'',
    taskText:'',
    todos:JSON.parse(localStorage.getItem('temp')) || []
}


const samplereducer=(state = initialState,action)=>{
    let newState = {...state}
    let temp = [...newState.todos]
    switch (action.type){
        case 'textChangeHandler':
            newState.text = action.value
            break

        case 'taskEditor':
            newState.taskText = action.value
            break

        case 'submitHandler':
            if(action.value === 13 && newState.text.length>0){
                let todo = {
                    title:newState.text,
                    isChecked:false
                }
                let temp=JSON.parse(localStorage.getItem('temp')) || []
                temp.push(todo)
                newState.todos=temp
                localStorage.setItem('temp',JSON.stringify(temp))
                newState.text=''
            }
            break

        case 'handleCheckbox':
                temp[action.index].isChecked = !temp[action.index].isChecked
                newState.todos=temp
                localStorage.setItem('temp',JSON.stringify(temp))
            break

        case 'xHandler':
            let filteredTodos=newState.todos.filter((todo,i)=>{
                return i !== action.index
            })
            newState.todos=filteredTodos
            localStorage.setItem('temp',JSON.stringify(filteredTodos))
            break

        case 'clearAll':
            let unClearedTodos=newState.todos.filter((todo)=>{
                return !todo.isChecked
            })
            newState.todos=unClearedTodos
            localStorage.setItem('temp',JSON.stringify(unClearedTodos))
            break
        
        case 'selectAllHandler':
            temp.forEach((todo)=>{
                todo.isChecked=true
            })
            newState.todos = temp
            localStorage.setItem('temp',JSON.stringify(temp))
            break

        case 'todoSubmitHandler':
            if(newState.taskText.length>0){
                temp[action.index].title=newState.taskText
                newState.todos=temp
                newState.taskText=''
                localStorage.setItem('temp',JSON.stringify(temp))
            }
            break
        default:
            newState = state
    }
    return newState
}

export default samplereducer
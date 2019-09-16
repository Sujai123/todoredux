
export const textChangeHandler=(e)=>{
    return{
        type:'textChangeHandler',
        value:e.target.value || e.target.innerHTML
    }
}

export const taskEditor=(e)=>{
    return{
        type:'taskEditor',
        value:e.target.value || e.target.innerHTML
    }
}


export const submitHandler=(e)=>{
    return{
        type:'submitHandler',
        value:e.which
    }
}

export const handleCheckbox=(index)=>{
    return{
        type:'handleCheckbox',
        index:index
    }
}

export const xHandler=(index)=>{
    return{
        type:'xHandler',
        index:index
    }
}

export const clearAll=()=>{
    return{
        type:'clearAll'
    }
}

export const selectAllHandler=()=>{
    return{
        type:'selectAllHandler'
    }
}

export const todoSubmitHandler=(index)=>{
    return{
        type:'todoSubmitHandler',
        index:index
    }
}
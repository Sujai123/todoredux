import React, { Component } from 'react'
import './TodoLister.css'

class TodoLister extends Component {
    constructor(props) {
        super(props)
        this.todoListerRef=React.createRef()
    }

    componentDidMount(){
        window.addEventListener('click',this.clickOutsideHandler)
    }
    componentWillunmount(){
        window.removeEventListener('click',this.clickOutsideHandler)
    }

    clickOutsideHandler=(el)=>{
        if(this.todoListerRef.current && this.todoListerRef.current.contentEditable==='true'){
            if(!this.todoListerRef.current.contains(el.target)){
                this.todoListerRef.current.contentEditable=false
                this.props.todoSubmitHandler(this.props.index)
            }
        }
    }

    doubleClickHandler=(el)=>{
        el.target.contentEditable='true'
        el.target.focus()
    }

    render() {
        const {title,isChecked} = this.props.todo
        const index = this.props.index
        let className
        if(isChecked)
        className='strike'
        else
        className=''
        return (
            <div className='todoLister'>
                <label htmlFor={index} style={{'padding':'10px'}}>
                <input 
                type='checkbox' 
                checked={isChecked}
                id={index}
                onChange={()=>this.props.handleCheckbox(index)} />
                </label>
                <p 
                style={{'display':'inline-block','width':'150px'}}
                ref={this.todoListerRef}
                onDoubleClick={this.doubleClickHandler}
                contentEditable={false}
                className={className}
                onKeyUp={(e)=>this.props.taskEditor(e)}>{title}</p>
                <button onClick={()=>this.props.xHandler(index)}>X</button>
            </div>
        )
    }
}


export default TodoLister

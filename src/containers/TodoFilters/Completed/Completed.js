import React, { Component } from 'react'
import TodoLister from '../../TodoLister/TodoLister'
import {connect} from 'react-redux'
import * as actions from '../../../redux/actions/actions'

class Completed extends Component {

    render() {
        return (
            <div>
                {this.props.todos.length?
                this.props.todos.map((todo,i) => {
                    if(todo.isChecked){
                        return <div key={i}>
                        <TodoLister
                        todo={todo} 
                        index={i}
                        handleCheckbox={this.props.checkboxHandler}
                        xHandler={this.props.xHandler}
                        taskEditor={this.props.taskEditor}
                        todoSubmitHandler={this.props.todoSubmitHandler} />
                        </div>
                    }
                    return null
                })
                :null}
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    return{
        todos:state.todos
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        checkboxHandler:(index)=>dispatch(actions.handleCheckbox(index)),
        xHandler:(index)=>dispatch(actions.xHandler(index)),
        taskEditor:(e)=>dispatch(actions.taskEditor(e)),
        todoSubmitHandler:(index)=>dispatch(actions.todoSubmitHandler(index))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Completed)

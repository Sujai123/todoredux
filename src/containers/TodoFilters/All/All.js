import React, { Component } from 'react'
import TodoLister from '../../TodoLister/TodoLister'
import {connect} from 'react-redux'
import * as actions from '../../../redux/actions/actions'

class All extends Component {

    render() {
        return (
            <div>
                {this.props.todos.length?
                this.props.todos.map((todo,i) => {
                    return <div key={i}>
                        <TodoLister 
                        key={i}
                        todo={todo} 
                        index={i}
                        handleCheckbox={this.props.handleCheckbox}
                        xHandler={this.props.xHandler}
                        taskEditor={this.props.taskEditor}
                        todoSubmitHandler={this.props.todoSubmitHandler} />
                        </div>
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
        taskEditor:(e)=>dispatch(actions.taskEditor(e)),
        handleCheckbox:(index)=>dispatch(actions.handleCheckbox(index)),
        xHandler:(index)=>dispatch(actions.xHandler(index)),
        todoSubmitHandler:(index)=>dispatch(actions.todoSubmitHandler(index))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(All)

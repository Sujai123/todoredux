import React, { Component } from 'react'
import * as actions from '../../redux/actions/actions'
import {connect} from 'react-redux'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import './TodoFooter.css'

class TodoFooter extends Component {

    render() {
        let itemsleft = 0
        this.props.todos.forEach((todo)=>{
            if(!todo.isChecked) itemsleft++
        })
        if(this.props.todos.length>0)
        return (
            <div className='footer'>
                <p>{itemsleft} items left</p>
                    <p><Link to='/'>All</Link></p>
                    <p><Link to='/active'>Active</Link></p>
                    <p><Link to='/completed'>Completed</Link></p>
                <p onClick={this.props.clearAll} className='clear'>clear completed</p>
            </div>
        )
        else
        return null
    }
}
const mapStatetoProps=(state)=>{
    return{
        todos:state.todos
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        clearAll:()=>dispatch(actions.clearAll())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(TodoFooter)

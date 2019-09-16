import React, { Component } from 'react'
import TodoHeader from '../reusableComponents/TodoHeader/TodoHeader'
import SearchBar from '../../containers/SearchBar/SearchBar'
import TodoList from '../TodoList/TodoList'
import TodoFooter from '../TodoFooter/TodoFooter'
import {BrowserRouter as Router} from 'react-router-dom'
import './Todo.css'

class Todo extends Component {

    render() {
        return (
            <div className='todo'>
                <div style={{'width':'550px'}}>
                <Router>
                    <TodoHeader title='Todos' />
                    <SearchBar />
                    <TodoList />
                    <TodoFooter />
                </Router>
                </div>
            </div>
        )
    }
}

export default Todo

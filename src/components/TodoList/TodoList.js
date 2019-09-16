import React, { Component } from 'react'
import All from '../../containers/TodoFilters/All/All'
import Active from '../../containers/TodoFilters/Active/Active'
import Completed from '../../containers/TodoFilters/Completed/Completed'
import {BrowserRouter as Route,Switch} from 'react-router-dom'

class TodoList extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <All />
                    </Route>
                    <Route path='/active'>
                        <Active />
                    </Route>
                    <Route path='/completed'>
                        <Completed />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default TodoList

import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/actions'
import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()   
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className='searchbar'>
                <button onClick={this.props.selectAllHandler}>></button>
                <input
                ref={this.inputRef} 
                type='text'
                placeholder='What needs to be done?'
                onChange={this.props.textChangeHandler}
                onKeyPress={this.props.submitHandler}
                value={this.props.text} />
            </div>
        )
    }
}

let mapStatetoProps=(state)=>{
    return{
        text:state.text
    }
}

let mapDispatchtoProps=(dispatch)=>{
    return{
        textChangeHandler:(e)=>dispatch(actions.textChangeHandler(e)),
        submitHandler:(e)=>dispatch(actions.submitHandler(e)),
        selectAllHandler:()=>dispatch(actions.selectAllHandler())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(SearchBar)

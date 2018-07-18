import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log('render', props)
    return(
        <div>
            <h1>Hi, I'm a Counter!</h1>
            <p>Count: {props.count} </p>
            <button onClick={props.onReductionClick}>-</button>&nbsp;
            <button onClick={props.onResetClick}>0</button>&nbsp;
            <button onClick={props.onIncrementClick}>+</button>

        </div>
    )
}

/// Second Event
function mapStateToProps(state) {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
}

///Third Event (after click)
function mapDispatchToProps(dispatch){
    return {
        onIncrementClick: () => {
            console.log('goin up')
            const action = {type: 'INCREMENT'}
            dispatch(action)
        },
        onReductionClick: () => {
            console.log('goin down')
            const action = {type: 'REDUCTION'}
            dispatch(action)
        },
        onResetClick: () => {
            console.log('back to zero')
            const action = {type: 'RESET'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
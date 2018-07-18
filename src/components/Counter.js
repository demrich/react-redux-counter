import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log('render', props)
    return(
        <div>
            <h1>
                Hi, I'm a Counter!
                <p>Count: {props.count} </p>
                <button onClick={props.onIncrementClick}>increment</button>
            </h1>
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
    return{
        onIncrementClick: () => {
            console.log('clickin bitchin')
            const action = {type: 'INCREMENT'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React from 'react';

const userInput = props => {
    const styles = {
        backgroundColor: 'white',
        border: '1px solid darkslategrey',
        boxShadow: '2px 2px 5px slategrey',
        lineHeight: '20px',
        padding: '10px'
    }

    return <input style={styles} type="text" onChange={props.change}/>;
}

export default userInput;

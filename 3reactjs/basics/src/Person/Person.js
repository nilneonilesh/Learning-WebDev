import React from 'react';
const person = (props) => {
    return (
        <div>
            <p> I'm {props.name} and i am {props.age}yo! </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;

import React, { FC } from 'react';

interface Props{
    name:string,
    age?:number
    }
const User:FC<Props> = (props) => {
    const age = props.age
    return (
        <div>
            <h1>Hello from : {props.name}</h1>
        </div>
    );
};

export default User;
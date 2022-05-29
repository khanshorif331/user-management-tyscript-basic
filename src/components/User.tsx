import React, { FC } from 'react';

interface Props{
    name:string,
    age?:number,
    addUser : ()=> void
    }
const User:FC<Props> = ({name,age,addUser}) => {
    return (
        <div>
            <h1>Hello from : {name}</h1>
        </div>
    );
};

export default User;
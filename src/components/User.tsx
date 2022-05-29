import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props{
//     name:string,
//     age?:number,
//     addUser : ()=> void
//     }

interface Props{
    user : UserModel
    addUser : (user:UserModel)=> void
}

const User:FC<Props> = ({user,addUser}) => {
    return (
        <div>
            <h1>Hello from : {user.name} with experience {user.email}</h1>
            <button onClick={()=>addUser(user)}>Add me</button>
        </div>
    );
};

export default User;
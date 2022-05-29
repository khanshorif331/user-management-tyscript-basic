import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User{
    name : string,
    job : string
}

const Counter = () => {
    const [counter,setCounter] = useState<number>(0)
    const [user,setUser] = useState<User | null>(null)
    const handleIncrease = () : void =>{
        setCounter(counter + 1)
    }

    const handleUserSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const userData = {
            name : 'shorif',
            job : 'dev'
        }
        setUser (userData)
    }
    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) : void =>{

    }

    return (
        <div>
            <h1>This is counter</h1>
            <h2>Count : {counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;
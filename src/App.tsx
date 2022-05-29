import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student : string = '5'
let age : number = 69
let isSmart : boolean = true
let students : string[] = ['joe','biden','hell']


interface Person {
  name : string ,
  job? : string,
  age : number,
  employed : string | boolean,
  location? : string | number
}

const person:Person = {
  name : 'bil some',
  job : 'jobless',
  age: 40,
  location : 64,
  employed :'dhaka'
}

const handleUser = (age : number) : number =>{
  const total : number = 20
  return total
}






function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;

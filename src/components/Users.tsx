import Reac from 'react';
import User from './User';


const Users = () => {
    const handleAddUser = () : void =>{

    }
    return (
        <div>
            <h2>My user</h2> 
            <User name='rohomot' age={55} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;
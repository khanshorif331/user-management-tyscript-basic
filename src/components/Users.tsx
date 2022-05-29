import Reac from 'react';
import User from './User';


const Users = () => {
    
    return (
        <div>
            <h2>My user</h2> 
            <User name='rohomot' age={55}></User>
        </div>
    );
};

export default Users;
import React from 'react';
import './UsersList.css';

const UsersList = props => {
    console.log('users', props.users);
    const users = props.users.map(user => (
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt={user.name.last}/>
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </div>
    ))
    return (
        <section className='users'>
            {users}
        </section>
    );
}

export default UsersList;
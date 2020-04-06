import React from 'react';

import User from './User'


const UserList = ({users,delMethod}) => {
    return(
        users.map(user => {
            return <User name={user.name} state={user.state} key={user.id} delMethod={() => delMethod(user.id)}/>

        })
    )
}

export default UserList;


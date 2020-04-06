import React from 'react';

import User from './User'


const UserList = ({users,delMethod, stateChange }) => {
    
        if(users.length > 0){

        
      return  users.map(user => {
            return <User user={user} key={user.id} delMethod={() => delMethod(user.id)} 
            stateChange={stateChange}/>

        })
    }else {
       return (<div className="alert alert-warning mt-4" role="alert" >
           Kullanici Bulunamadi. 

       </div>
       )
    }
    
}

export default UserList;


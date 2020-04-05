import React from 'react';

const User = ({name, state, metod}) => {
    return( 
        <div className="card">
            <h1>Adi: {name} </h1>
            <h3>Durum: <span class Name={state}>{state}</span></h3>
            <button onClick={metod}> Durum Degistir</button>
            </div>
    )
}

export default User;
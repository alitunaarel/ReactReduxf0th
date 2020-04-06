import React from "react";

const User = ({ name, state, delMethod }) => {
  return (
    <div className="card text-white bg-dark mb-2 mt-4" style={{width: "18rem"}} >
      <div className="card-header">Online status</div>
      <div className="card-body">
          <button onClick={delMethod} className="btn btn-outline-danger mb-2">
          Durum Degistir
        </button>
        <h1 className="card-title">Adi: {name} </h1>
        <h3 className="card-subtitle mb-4">
          Durum: <span className={state}>{state}</span>
        </h3>
        
      </div>
    </div>
  );
};

export default User;

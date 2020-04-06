import React from "react";

const User = ({ user,delMethod, stateChange }) => {
 const changeHandler=(e) =>{
   console.log(e.target.value,user.id);
   stateChange({state:e.target.value,id: user.id})
 }

  return (
    <div className="card text-white bg-dark mb-2 mt-4" style={{width: "18rem"}} >
      <div className="card-header">Online status</div>
      <div className="card-body">
          <button onClick={delMethod} className="btn btn-outline-danger mb-2">
          Sil
        </button>
        <h1 className="card-title">Adi: {user.name} </h1>
        <h3 className="card-subtitle mb-4">
          Durum: <span className={user.state}>{user.state}</span>
        </h3>

        <select className="form-control" name="state" id="state" onChange={changeHandler} value={user.state}>
          <option value="online">online</option>
          <option value="offline">offline</option>
          <option value="busy">busy</option>
        </select>
        
      </div>
    </div>
  );
};

export default User;



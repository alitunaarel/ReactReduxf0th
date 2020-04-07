import React from 'react'

const LogButton = (WrappedComponent, info) => {
    const clickHandler = (e) =>{
        console.log(e.target.value)
    }
    return (props) => { 
    return (
        <div>
            <button onClick={clickHandler}>
                Log Yaz
            </button>
            <WrappedComponent {...props}/>
        </div>
    )
    }
}

export default LogButton;

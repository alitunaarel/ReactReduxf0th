import React from 'react'

import Data from '../Data'

class CountryList extends React.Component {
    render() {
        const countryList = Data.map((ct,i) => {
            return (
                <div className="card mb-2 mt-2" key={ct.numericCode}>
                    <div className="card-body" >
                         <h5 className="card-title"  > {i+ '-' + ct.name}</h5>
                         <p>{ct.nativeName}</p>
                         <img style={{width:"100px"}} src={ct.flag} alt=""/>
                    </div>
                </div>
               
            )
        })
        return (
            <div className="card-columns">
                {countryList}
            </div>
        )
    }
}


export default CountryList;

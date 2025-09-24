import {use, useState} from "react";


export function FilteredCountries({data, countrySelect}) {
    if(data.length > 10){
        return <p>Try another filter</p>
    }
    return data.map(country => {
        return(
            <div key={country.cca3}>
                {country.name.common}
                <button onClick={() => countrySelect(country)}>Show</button>
            </div>
        )
    })
}
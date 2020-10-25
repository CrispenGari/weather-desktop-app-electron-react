import React from 'react'
import './Location.css'
const Location = ({current_location}) => {
    return (
        <div className="location">
            <h1>Current Location</h1>
            <div className="location__info">
                <li>
                    <span>Continent</span>
                     <span>{current_location?.continent}</span>
                </li> 
                <li>
                    <span>continent code</span>
                    <span>{current_location?.continent_code}</span>
                </li> 
                <li>
                    <span>country</span>
                    <span>{current_location?.country}</span>
                </li> 
                <li>
                    <span>country code</span>
                    <span>{current_location?.country_code}</span>
                </li> 
                <li>
                    <span>city</span>
                    <span>{current_location?.city}</span>
                </li> 
                <li>
                    <span>county</span>
                    <span>{current_location?.county}</span>
                </li> 
                <li>
                    <span>region</span>
                    <span>{current_location?.region}</span>
                </li> 
                <li>
                    <span>region code</span>
                    <span>{current_location?.region_code}</span>
                </li> 
                <li>
                    <span>postal code</span>
                    <span>{current_location?.postal_code}</span>
                </li> 
                <li>
                    <span>timezone</span>
                    <span>{current_location?.timezone}</span>
                </li> 
            </div>
           
        </div>
    )
}
export default Location

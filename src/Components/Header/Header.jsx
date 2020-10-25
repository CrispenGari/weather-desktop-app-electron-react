import React from 'react'
import './Header.css'
import {Cloud, LocationOn} from '@material-ui/icons'
const Header = ({current_location}) => {
    return (
        <div className="header">
            <div className="header__appname">
                <h1>Crisp Weather</h1>
                <Cloud/>
            </div>
            <div className="header__location">
                <LocationOn/>
                 <h1>{current_location?.city}</h1>
            </div>
        </div>
    )
}

export default Header

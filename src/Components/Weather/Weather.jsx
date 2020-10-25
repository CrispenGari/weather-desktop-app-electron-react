import React from 'react'
import './Weather.css'
import { Cloud, Explore, HourglassFull, WbSunny } from '@material-ui/icons'
import tempToDegrees from './convertor'
function Weather({weather}) {
    if(weather?.weather[0]){
       return (
        <div className="weather">
            <h1>Weather Summary</h1>
            <div className="weather__info">
                <h1>Main</h1>  
                <p>
                <small>{weather?.weather[0].description}</small>
                {
                  String( weather?.weather[0]?.main).toLowerCase() === "clouds" ||String( weather?.weather[0]?.main).toLowerCase()=== "few clouds" ||String( weather?.weather[0]?.main).toLowerCase()=== "scattered clouds" ||String( weather?.weather[0]?.main).toLowerCase()=== "broken clouds" ||String( weather?.weather[0]?.main).toLowerCase()=== "shower rain" ||String( weather?.weather[0]?.main).toLowerCase()=== "rain" ||String( weather?.weather[0]?.main).toLowerCase()=== "	thunderstorm" ||String( weather?.weather[0]?.main).toLowerCase()=== "snow" ||String( weather?.weather[0]?.main).toLowerCase()=== "mist"?<Cloud className="weather__clouds"/>:        <WbSunny className ="weather__sun"/>
                }
                <small> {weather?.weather[0]?.main}</small>
                </p>
                <li><span>current temperature</span><span>{tempToDegrees(weather?.main?.temp)} ºC</span></li>
                <li><span>Humidity</span><span>{weather?.main?.humidity}%</span></li>
                <li><span>pressure</span><span>{weather?.main?.pressure} hPa</span></li>
                <li><span>Maximum Temperature</span><span>{tempToDegrees(weather?.main?.temp_max)} ºC</span></li>
                <li><span>Minimum Temperature</span><span>{tempToDegrees(weather?.main?.temp_min)} ºC</span></li>
                 <h1>Wind</h1>  
                 <li><span>Speed</span><span>{weather?.wind?.speed}m/s</span></li>
                 <li><span>Direction</span><span><Explore className="weather__direction"/> {weather?.wind?.deg} º from East</span></li>
            </div>
        </div>
    )  
    }else{
        return(
        <div className="weather">
            <h1>Weather Summary</h1>
            <div className="weather__info loading">
                <h1>Crisp Weather</h1>
                <HourglassFull className="weather__loadingIco"/>
                <small>loading...</small>
            </div>
        </div> 
        )
    }
   
}

export default Weather

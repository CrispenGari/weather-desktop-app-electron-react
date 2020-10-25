import './App.css';
import {useEffect, useState} from 'react'
import {location_apikey, location_instance, weather_apikey, weather_instance} from './data/axios'
import {Weather, Location, Header} from './Components'
import nodeNotifier from 'node-notifier'
function App() {
  const [current_location, setCurrentLocation] = useState(null)
  const [weather, setWeather] = useState(null)
  useEffect(()=>{
      const fetchLocation = async ()=>{
        const _ = location_instance.get(location_apikey);
        setCurrentLocation((await _).data)
      }
      fetchLocation()
  }, [])

  useEffect(()=>{
    if(current_location){
      const fetchWeather = async()=>{
        const _ = await weather_instance.get(`weather?lat=${current_location?.latitude}&lon=${current_location?.longitude}&appid=${weather_apikey}`)
        setWeather(_.data)
      }
      fetchWeather();
    }
  }, [current_location])

  // Notification
  // useEffect(()=>{
  //   if(weather && current_location){
  //     nodeNotifier.notify(
  //       {
  //         title: "Crisp Weather App",
  //         message: `Current Location Detected: ${current_location?.city}`,
  //         sound: true,
  //         wait: true,
  //         time: 5000,
  //       },
  //       (error, res) => {}
  //     );
  //   }
  // }, [current_location, weather])
  return (
    <div className="app">
      <Header current_location={current_location}/>
      <div className="app__main">
        <Weather weather={weather}/>
        <Location current_location={current_location}/>
      </div>
        
    </div>
  );
}
export default App;

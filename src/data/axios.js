import axios from 'axios'
const weather_apikey = "dfa4a29b137df2f74b874084df368e93"
const location_apikey = "?ip=196.21.104.1&auth=7b98da30-ff64-4429-ae6a-10d87d82ed4e"
const weather_instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/"
})
const location_instance = axios.create({
    baseURL: "https://ipfind.co/"
})
export {weather_instance, location_instance, weather_apikey, location_apikey}
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPWE_KEY

const BASE_URL = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

const getWeather = (latitude, long) => {
    return axios.get(BASE_URL(latitude, long))
}
export default {
    getWeather: getWeather
}

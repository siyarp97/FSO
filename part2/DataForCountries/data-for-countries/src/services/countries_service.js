import axios from "axios";

const ALL_COUNTRIES_URL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getCountries = () => {
    return axios.get(ALL_COUNTRIES_URL)
}
export default {
    getCountries:getCountries,
}
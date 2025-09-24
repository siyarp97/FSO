import {SearchInput} from "./components/SearchInput.jsx";
import {useEffect, useState} from "react";
import countries_service from "./services/countries_service.js";
import {FilteredCountries} from "./components/FilteredCountries.jsx";
import {CountryDetail} from "./components/CountryDetail.jsx";
import weatherService from "./services/weatherService.js";


function App() {
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState("")
    const [weather, setWeather] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        countries_service
            .getCountries()
            .then(r => setCountries(r.data))
    }, []);


    useEffect(() => {
        setSelectedCountry(null)
        setWeather(null)
    }, [searchText]);

    useEffect(() => {
        if(selectedCountry){
            weatherService
                .getWeather(selectedCountry.latlng[0], selectedCountry.latlng[1])
                .then(r => setWeather(r.data))
        }
    }, [selectedCountry])


    const filterCountry = countries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase()))
    const selectCountry = (country) => {
        setSelectedCountry(country)
    }

    return (
        <div>
            <SearchInput onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
            {searchText.length > 0 &&
                <FilteredCountries data={filterCountry} text={searchText} countrySelect={selectCountry}/>
            }
            {selectedCountry && weather &&
                <CountryDetail data={selectedCountry} weather={weather}/>
            }
        </div>
    )
}

export default App

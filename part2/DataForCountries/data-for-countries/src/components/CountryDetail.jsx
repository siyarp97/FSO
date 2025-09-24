import {useEffect, useState} from "react";
import weatherService from "../services/weatherService.js";

export function CountryDetail({data, weather}) {
    const capital = data.capital.map(cap => <p>Capital {cap}</p>)
    const langs = Object.values(data.languages).map(lang =>
        <ul>
            <li>{lang}</li>
        </ul>
    )
    const weatherIconUrl= (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`

    console.log(weather)
    const flagImg = data.flags
    return (
        <div>
            <h1>{data.name.common}</h1>
            {capital}
            <p>Area {data.area}</p>

            <h1>Languages</h1>
            {langs}

            <img src={flagImg.svg} alt={flagImg.alt} width={200}/>

            <h1>Weather</h1>
            <p>Temperature <b>{weather.main.temp}</b> Celsius</p>
            <img src={weatherIconUrl(weather.weather[0].icon)} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )

}
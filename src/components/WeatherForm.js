import React, { useState } from 'react';
import { WEATHER_KEY } from '../keys';
import { WeatherInfo } from './WeatherInfo';


export const WeatherForm = () => {

    const [tempType, setTempType] = useState('metric')
    let tempM = '°C';
    const [weather, setWeather] = useState({});
    
    const getWeather = (e) => {
        e.preventDefault();
        
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&units=${tempType}&appid=${WEATHER_KEY}`;

        switch(tempType) {
            case'metric': 
                tempM='°C';
                break;
            case'imperial':
                tempM='°F';
                break;
            default:
                tempM='K';
        }

        if (cityValue && countryValue){
            fetch(API_URL)
                .then( resp => resp.json())
                .then( data => {
                    
                    setWeather({
                        
                        temperature: data.main.temp + ' '+tempM,
                        description: data.weather[0].description,
                        humidity: data.main.humidity,
                        wind_speed: data.wind.speed,
                        city: data.name,
                        country: data.sys.country,
                        error: null
                    })
                })
        } else {
            setWeather({error: 'Please enter a city and a country'})
        }

            
        
    }

    const handleChange = (e) => {
        setTempType(e.target.value);


    }

    return (
        <div className="card card-body">
            <form className="form" onSubmit={getWeather}>
                <div className="form-group">
                    <input
                        className="form-control" 
                        type="text"
                        name="city"
                        placeholder="Your city name"
                        autoComplete="off"
                        autoFocus
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="country"
                        placeholder="Your country name"
                        className="form-control"
                        autoComplete="off"
                    />
                </div>
                <select 
                    className="custom-select custom-select-lg mb-3"
                    value={tempType}
                    onChange={handleChange}
                >
                    <option value='metric'>Celsius</option>
                    <option value='imperial'>Fahrenheit</option>
                    <option value=''>Kelvin</option>
                </select>
                <button className="btn btn-success btn-block">
                    Get weather
                </button>
            </form>
            <WeatherInfo {...weather}/>
        </div>
        
    )
}

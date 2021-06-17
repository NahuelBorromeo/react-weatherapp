import React from 'react'

export const WeatherInfo = ( weather ) => {


    return (

        <>
        {
            weather.error &&
            <div className="alert alert-danger mt-3">
            <p>{weather.error}</p>
            </div>
        }
        {
            weather.temperature ?
                <div className="card card-body">
                    <p>
                        Location: { weather.city} { weather.country }
                    </p>
                    <p>
                        Temperature: { weather.temperature } { weather.description }
                    </p>
                    <p>
                        Humidity: { weather.humidity }
                    </p>
                    <p>
                        Wind Speed: { weather.wind_speed }
                    </p>
                </div>
                :
                <div className="card card-body">
                    <p>No request yet</p>
                </div>
        }        
        </>
    )
}

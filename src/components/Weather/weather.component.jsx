import React from 'react';

import withData from '../../withData';

const Weather = ({data,unitType,citySearched}) => {
    console.log(data,unitType,citySearched)
    return (
        <div className='weather'>
            <h1>{data.name}</h1>
            <div className="weather-temp">
                <h1>Temp: {data.main.temp} {unitType ? 'C' : 'F'}°</h1>                 
            </div>
        </div>
    );
};

export default withData(Weather);
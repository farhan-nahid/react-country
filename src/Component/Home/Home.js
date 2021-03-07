import React, { useEffect, useState } from 'react';
import SingleCountey from '../SingleCountry/SingleCountey';
import './Home.css';

const Home = () => {
    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountrys(data));
    }, []);
    return (
        <div>
            <h1> Total Country:{countrys.length}</h1>
            <div className="countery">
                {countrys.map((country) => (
                    <SingleCountey key={country.alpha2Code} country={country} />
                ))}
            </div>
        </div>
    );
};

export default Home;

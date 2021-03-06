import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { alpha2Code } = useParams();
    const [details, setDetails] = useState({});
    console.log(details);
    const { name } = details;
    console.log(name);
    // const { name } = details.country;
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${alpha2Code}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [alpha2Code]);
    return (
        <div>
            <h1>CountryDetails</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default CountryDetails;

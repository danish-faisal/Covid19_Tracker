import { FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchTheCountries = async () => {
            setCountries(await fetchCountries());
        }
        fetchTheCountries();
    }, [setCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                {countries.map((country, idx) => <option key={idx} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
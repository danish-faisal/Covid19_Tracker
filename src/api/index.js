import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableURL = url;

    if (country) {
        changeableURL = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios(changeableURL);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.error(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {
        console.error(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios(`${url}/countries`);

        return countries.map(country => country.name);
    } catch (error) {
        console.error(error);
    }
}
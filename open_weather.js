
import { Task } from './node_modules/types';
import { compose } from 'ramda'


const apiKey = '8058e2e53a8cdc888b244254fc6ceeed';

const makeWeatherUrl = ({ zip, apiKey }) =>
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${apiKey}`


const fetchIt = url =>
    Task((rej, res) =>
        fetch(url)
            .then(x => x.json())
            .then(res)
            .catch(rej)
    )
const OpenWeather = {
    fetch: compose(fetchIt, makeWeatherUrl)
}


export { OpenWeather }
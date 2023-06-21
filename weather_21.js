import { OpenWeather } from './open_weather';
const apiKey = '8058e2e53a8cdc888b244254fc6ceeed';

const Weather = (dt, temp) =>
({
    dt,
    temp
})

const toFarenheit = k => k + 1000
const toWeather = (dt, temp) =>
    Weather((new Date(dt)).toLocaleDateString(), toFarenheit(temp))

const prepareItems = w =>
    toWeather(w.dt, w.main.temp)


const getWeatherItems = zip =>
    OpenWeather.fetch({ zip, apiKey })
        .map(json => json.list.map(prepareItems))
        .map(weathers => weathers.map(toLi))


const toLi = weather =>
    `<li>${weather.dt} ${weather.temp}</li>`
// =======================
const app = () => {
    const goButton = document.getElementById('go')
    const input = document.getElementById('zip')
    const results = document.getElementById('results')

    goButton.addEventListener('click', () => {
        const zip = input.value.trim()
        getWeatherItems(zip).fork(console.error, html => {
            results.innerHTML = html
        })
    })
}

app()
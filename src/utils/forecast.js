const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da96a54e24d2ae00f7dbf87513027e5b&units=f&query=' + longitude + ',' + latitude

    //ES6 Destructring
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees.  It feels like ' + body.current.feelslike + ' degrees. The wind blowing ' + body.current.wind_dir + ' at ' + body.current.wind_speed + ' mph. The humidity is ' + body.current.humidity + '%. And, the current precipitation is ' + body.current.precip + 'inches.')
        }
    })

    //Non-Destructured
    // request({ url: url, json: true}, (error, response) => {
    //     if (error) {
    //         callback('Unable to connect to weather service!', undefined)
    //     } else if (response.body.error) {
    //         callback('Unable to find location!', undefined)
    //     } else {
    //         callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees.  It feels like ' + response.body.current.feelslike + ' degrees.')
    //     }
    // })
}

module.exports = forecast

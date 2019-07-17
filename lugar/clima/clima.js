const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=300860db6ee92ff36f9cf0c10811e366&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}
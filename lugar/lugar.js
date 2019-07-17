const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '3c40a6aa29msh2918ac7533a2d1ap111818jsn9cb066e71e4f' }
    });

    const resp = await instance.get();

    if (resp.data.Results === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }


};

module.exports = {
    getLugarLatLng
}
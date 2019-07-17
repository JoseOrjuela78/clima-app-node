const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima/clima');
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Nombre de ciudad para encontrar clima',
            demamd: true
        }
    }).help()
    .argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log)

//clima.getClima(-16.500000, -68.150002).then(console.log).catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `La temperatura para la ciudad : ${coord.direccion} es de ${temp} grados centrigrados...`;

    } catch (e) {
        return `La temperatura para la ciudad : ${argv.direccion} no fue encontrada...`;
    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);
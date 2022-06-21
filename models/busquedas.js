class Busqueda {
    historial = ["Tegucigalpa", "Madrid", "Bogota", "Buenos Aires"];

    constructor() {
        // TODO: leer DB si existe
    }

    async buscarCiudad(nombreCiudad = "") {
        // http request
        console.log(nombreCiudad);
        return []; // lista de ciudades
    }
}
module.exports = Busqueda;
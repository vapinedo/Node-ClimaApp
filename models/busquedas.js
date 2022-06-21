const axios = require("axios");

class Busqueda {
    historial = ["Tegucigalpa", "Madrid", "Bogota", "Buenos Aires"];

    constructor() {
        // TODO: leer DB si existe
    }

    async buscarCiudad(nombreCiudad = "") {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2");
            console.log(response.data);
            return [];
        } catch (error) {
            return [];
        }
    }
}
module.exports = Busqueda;
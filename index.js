const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busqueda = require("./models/busquedas");

const main = async () => {
  let option;
  let busquedas = new Busqueda();

  do {
    option = await inquirerMenu();
    switch (option) {
        case 1:
            const nombreCiudad = await leerInput("Escriba el nombre de una ciudad");
            await busquedas.buscarCiudad(nombreCiudad);

            console.log("\n Información de la ciudad\n".green);
            console.log("Ciudad:", )
            console.log("Lat:", )
            console.log("Lng:", )
            console.log("Temperatura:", )
            console.log("Mínima:", )
            console.log("Máxima:", )
        break;
    }

    if (option !== 0) await pausa();
  } while (option !== 0);
};

main();

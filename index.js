
// Clase anterior con la que obtenemos los explorers
const Reader = require("./libs/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers)

// Clase que filtra por una misión, devuelve nombres y devuelve el número de exploradores
const ExplorerService = require("./libs/services/ExplorerServices")

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");
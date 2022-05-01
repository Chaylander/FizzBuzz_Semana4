const Reader = require("./../../libs/utils/Reader");
const ExplorerService = require("./../../libs/services/ExplorerServices");

class ExplorerController{
    static getExplorersByMission(mission){
        //Regresa objetos
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return  ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getAmountOfExplorersByMission(mission){
        //Regresa un numero
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
}

module.exports = ExplorerController;

//onsole.log(ExplorerController.getExplorersByMission("node"));
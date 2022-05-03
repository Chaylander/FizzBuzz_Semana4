const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerServices");
const FizzBuzzService = require("../services/FizzbuzzService");

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
    static getANumberToFizzBuzz(number){
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;




//onsole.log(ExplorerController.getExplorersByMission("node"));
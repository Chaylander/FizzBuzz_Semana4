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

    static UseBot(bot){
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            console.log(msg);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getANumberToFizzBuzz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } 
            else if(msg.text == "node" || msg.text == "java"){
                const explorersInMission = ExplorerController.getUsernamesByMission(msg.text);
                console.log(explorersInMission);
                const responseBot = "Exploradores en la mision " + msg.text + ": " + explorersInMission;
                bot.sendMessage(chatId, responseBot);
            }
            else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });
    }

}

module.exports = ExplorerController;




//onsole.log(ExplorerController.getExplorersByMission("node"));
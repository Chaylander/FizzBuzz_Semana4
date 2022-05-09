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

    static getFizzBuzzBot(bot){
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getANumberToFizzBuzz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } 
            else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });
    }

    static getExplorerByMissionBot(bot){
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const mission = msg.text;

            const explorers = ExplorerController.getExplorersByMission(mission);
            const responseBot = `Exploradores de la misión ${mission}: ${explorers}`;
            bot.sendMessage(chatId, responseBot);
        });
    }

}

module.exports = ExplorerController;




//onsole.log(ExplorerController.getExplorersByMission("node"));
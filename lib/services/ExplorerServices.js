class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter(explorer => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const numberOfExplorersByMission = explorers.filter(explorer => explorer.mission === mission).length;
        return ("There are " + numberOfExplorersByMission + " explorers in the " + mission + " mission");

    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersUsernamesByMission = explorers.filter(explorer => explorer.mission === mission).map(explorer => explorer.githubUsername);
        return explorersUsernamesByMission;

    }
}

module.exports = ExplorerService;
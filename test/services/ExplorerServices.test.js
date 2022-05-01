const ExplorerService = require("./../../libs/services/ExplorerServices")

describe("Tests para explorersServices", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mision", () => {
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(5)
    })
    test("Requerimiento 2: Filtrar por mision", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toEqual([{mission: "node"}]);
    })
    test("Requerimiento 3: Obtener githubUsername de los explorers en una mision", () => {
        const explorer = [{mission: "node", githubUsername: "Chaylander"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorer, "node");
        expect(explorersInNode).toContain("Chaylander");//Uso contain porque el valor esta dentro de un ARRAY ["Chaylander"]
    })

})
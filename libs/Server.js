const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

//GET
//recibir un parametro por query params y regresar lista de explorers filtrados por el parametro
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;//mission es el parametro
    const ExplorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(ExplorersInMission);
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
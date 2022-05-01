const FizzBuzzService = require("./../../libs/services/FizzbuzzService");

describe("Tests para FizzBuzzServices", () => {
    test("Requerimiento 1: Si el explorer no es divisible por 3, el score del explorer debera mantenerse igual y crear la funcion", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).toBe(1);
    });
    test("Requerimiento 2: Si el score del explorer es divisible por 3, su .trick sera = FIZZ", () => {
        const explorer1 = {name: "Explorer1", score: 3};
        FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 3, trick: "FIZZ"}
        expect(explorer1.trick).toBe("FIZZ");
    });
    test("Requerimiento 3: Si el score del explorer es divisible por 5, su .trick sera = BUZZ", () => {
        const explorer1 = {name: "Explorer1", score: 5};
        FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 5, trick: "BUZZ"}
        expect(explorer1.trick).toBe("BUZZ");
    });
    test("Requerimiento 4: Si el score del explorer es divisible por 3 y 5, su .trick sera = FIZZBUZZ", () => {
        const explorer1 = {name: "Explorer1", score: 15};
        FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 15, trick: "FIZZBUZZ"}
        expect(explorer1.trick).toBe("FIZZBUZZ");
    });



});
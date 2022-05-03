class FizzBuzzService {
    static applyValidationInExplorer(explorer1) {
        if (explorer1.score % 3 == 0 && explorer1.score % 5 == 0) {
            explorer1.trick = "FIZZBUZZ";
        }
        else if (explorer1.score % 3 === 0) {
            explorer1.trick = "FIZZ";
        }
        else if (explorer1.score % 5 === 0 ) {
            explorer1.trick = "BUZZ";
        }
        else{
            explorer1.trick = explorer1.score;
        }
    }
    static applyValidationInNumber(number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FIZZBUZZ";
        }
        else if (number % 3 === 0) {
            return "FIZZ";
        }
        else if (number % 5 === 0 ) {
            return "BUZZ";
        }
        else{
            return number;
        }
    }


}

module.exports = FizzBuzzService;
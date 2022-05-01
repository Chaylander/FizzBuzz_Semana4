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

}

module.exports = FizzBuzzService;
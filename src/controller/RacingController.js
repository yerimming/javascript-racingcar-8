import ConsoleView from "../view/ConsoleView.js"
import Validator from "../model/Validator.js"
import CarRace from "../model/CarRace.js";

class RacingController {
    constructor() {
        this.view = new ConsoleView();
        this.race = new CarRace();
    }

    async run() {
        try {
            const carNames = await this.view.getCarNames();
            Validator.validateCarNames(carNames);

            const tryCount = await this.view.getTryCount();
            Validator.validateTryCount(tryCount);

            this.race.initCars(carNames);
            this.view.printStart();

            for (let i = 0; i < tryCount; i++) {
                this.race.playRound();
                this.view.printRound(this.race.getCars());
            }
        } catch (error) {
            this.view.printError(error);
        }
    }
}

export default RacingController;
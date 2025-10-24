import ConsoleView from "../view/ConsoleView.js"
import Validator from "../model/Validator.js"

class RacingController {
    constructor() {
        this.view = new ConsoleView();
    }

    async run() {
        try {
            const carNames = await this.view.getCarNames();
            Validator.validateCarNames(carNames);

            const tryCount = await this.view.getTryCount();
            Validator.validateTryCount(tryCount);
            
        } catch (error) {
            this.view.printError(error);
        }
    }
}

export default RacingController;
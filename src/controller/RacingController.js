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
        } catch (error) {
            
        }
    }
}

export default RacingController;
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/message";

class ConsoleView {
    async getCarNames() {
        const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
        return input.split(",").map((name) => name.trim());
    }

    async getTryCount() {
        const input = await Console.readLineAsync(MESSAGES.INPUT_TRY_COUNT);
        return Number(input);
    }

    printError(error) {
        Console.print(`${error.message}`);
    }
}

export default RacingController;
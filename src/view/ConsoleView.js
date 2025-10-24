import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, ERROR_MESSAGES } from "../constants/message";

class ConsoleView {
    async getCarNames() {
        const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
        return input.split(",").map((name) => name.trim());
    }
}
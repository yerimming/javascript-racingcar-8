import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/message.js";

class ConsoleView {
    async getCarNames() {
        const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
        return input.split(",").map((name) => name.trim());
    }

    async getTryCount() {
        const input = await Console.readLineAsync(MESSAGES.INPUT_TRY_COUNT);
        return Number(input);
    }

    printStart() {
        Console.print(MESSAGES.START);
    }

    printRound(cars) {
        Object.entries(cars).forEach(([name, distance]) => {
            Console.print(`${name} : ${"-".repeat(distance)}`);
        });
        Console.print(" ");
    }

    printWinners(winners) {
        if(winners.length === 0) {
            Console.print(MESSAGES.NO_WINNER);
            throw new Error("[ERROR] 우승자가 없습니다.");
        }
        Console.print(`${MESSAGES.WINNER}${winners.join(", ")}`);
    }

    printError(error) {
        Console.print(`${error.message}`);
    }
}

export default ConsoleView;
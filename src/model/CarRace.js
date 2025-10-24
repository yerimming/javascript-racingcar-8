import { MissionUtils } from "@woowacourse/mission-utils";
import { MOVE_THOUSHOLD } from "../constants/gameNumbers";

class CarRace {
    constructor() {
        this.cars = {};
    }

    initCars(carNames) {
        this.cars = carNames.reduce((acc, name) => {
            acc[name] = 0;
            return acc;
        }, {});
    }

    playRound() {
        Object.keys(this.cars).forEach((name) => {
            const random = MissionUtils.Random.pickNumberInRange(0, 9);
            if (random >= MOVE_THOUSHOLD) {
                this.cars[name]++;
            }
        });
    }

    getCars() {
        return this.cars;
    }
}

export default CarRace;
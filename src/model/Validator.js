import { MIN_CAR_NUM, MAX_CAR_NAME_LENGTH } from "../constants/gameNumbers";
import { ERROR_MESSAGES } from "../constants/message";

class Validator {
    // 자동차 이름 전체 검증
    static validateCarNames(carNames) {
        this.checkSeparated(carNames);
        this.checkMinimumCars(carNames);
        this.checkEmptyNames(carNames);
        this.checkNameLength(carNames);
    }

    // 입력이 배열로 잘 분리되었는지, 비어있지는 않은지 검증
    static checkSeparated(carNames) {
        if (!Array.isArray(carNames) || carNames.length === 0) {
            throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INPUT}`);
        }
    }

    // 최소 2대 이상인지 검증
    static checkMinimumCars(carNames) {
        if (carNames.length < MIN_CAR_NUM) {
            throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.MIN_CARS}`);
        }
    }

    // 빈 문자열 이름이 있는지 검증
    static checkEmptyNames(carNames) {
        carNames.forEach(name => {
            if (!name.trim()) {
                throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INPUT}`);
            }
        })
    }

    // 이름 길이가 5자 이하인지 검증
    static checkNameLength(carNames) {
        carNames.forEach(name => {
            if (name.length > MAX_CAR_NAME_LENGTH) {
                throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.NAME_LENGTH}`);
            }
        });
    }

}
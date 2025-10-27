import Validator from "../src/model/Validator.js";
import { ERROR_MESSAGES } from "../src/constants/message.js";

describe("Validator", () => {
    describe("checkSeparated", () => {
        test("배열이 아니면 에러 발생", () => {
        expect(() => Validator.checkSeparated("Car1,Car2")).toThrow(ERROR_MESSAGES.INPUT);
        });

        test("빈 배열이면 에러 발생", () => {
        expect(() => Validator.checkSeparated([])).toThrow(ERROR_MESSAGES.INPUT);
        });

        test("올바른 배열이면 통과", () => {
            expect(() => Validator.checkSeparated(["Car1", "Car2"])).not.toThrow();
        });
    });

    describe("checkMinimumCars", () => {
        test("자동차 2대 미만이면 에러 발생", () => {
            expect(() => Validator.checkMinimumCars(["Car1"])).toThrow("최소 2대 이상의 자동차가 필요합니다.");
        });

        test("자동차 2대 이상이면 통과", () => {
            expect(() => Validator.checkMinimumCars(["Car1", "Car2"])).not.toThrow();
        });
    });

    describe("checkEmptyNames", () => {
        test("빈 문자열이 있으면 에러 발생", () => {
            expect(() => Validator.checkEmptyNames(["", "Car2"])).toThrow(ERROR_MESSAGES.INPUT);
        });

        test("빈 문자열 없으면 통과", () => {
            expect(() => Validator.checkEmptyNames(["Car1", "Car2"])).not.toThrow();
        });
    });

    describe("checkNameLength", () => {
        test("이름 길이 초과 시 에러 발생", () => {
            expect(() => Validator.checkNameLength(["Car123", "Car2"])).toThrow(ERROR_MESSAGES.NAME_LENGTH);
        });

        test("길이 정상 시 통과", () => {
        expect(() => Validator.checkNameLength(["Car1", "Car2"])).not.toThrow();
        });
    });

    describe("validateTryCount", () => {
        test("0 이하나 NaN이면 에러 발생", () => {
            expect(() => Validator.validateTryCount(0)).toThrow(ERROR_MESSAGES.TRY_COUNT);
            expect(() => Validator.validateTryCount(NaN)).toThrow(ERROR_MESSAGES.TRY_COUNT);
        });

        test("1 이상이면 통과", () => {
            expect(() => Validator.validateTryCount(3)).not.toThrow();
        });
    });
});

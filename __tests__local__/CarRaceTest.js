import CarRace from "../src/model/CarRace.js";

describe("CarRace", () => {
    test("자동차 초기화", () => {
        const race = new CarRace();
        race.initCars(["Car1", "Car2"]);
        expect(race.getCars()).toEqual({ Car1: 0, Car2: 0 });
    });

    test("playRound: 랜덤 전진 (값 범위 확인)", () => {
        const race = new CarRace();
        race.initCars(["Car1", "Car2"]);
        race.playRound();
        const cars = race.getCars();
        Object.values(cars).forEach(val => {
        expect(val).toBeGreaterThanOrEqual(0);
        });
    });

    test("getWinners: 최고 값 자동차 반환", () => {
        const race = new CarRace();
        race.initCars(["Car1", "Car2"]);
        race.getCars().Car1 = 3;
        race.getCars().Car2 = 2;
        const winners = race.getWinners();
        expect(winners).toEqual(["Car1"]);
    });

    test("getWinners: 동점 처리", () => {
        const race = new CarRace();
        race.initCars(["Car1", "Car2"]);
        race.getCars().Car1 = 3;
        race.getCars().Car2 = 3;
        const winners = race.getWinners();
        expect(winners).toEqual(["Car1", "Car2"]);
    });
});

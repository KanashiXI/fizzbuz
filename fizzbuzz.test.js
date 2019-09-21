const FizzBuzz = require("./fizzbuzz")

describe("Test FizzBuzz", () => {
    test("Test 1 expect 1", () => {
        const result = FizzBuzz.say(1)
        expect(result).toEqual(1) //Assert Function
    });

    test("Test 2 expect 2", () => {
        const result = FizzBuzz.say(2)
        expect(result).toEqual(2)
    });

    test("Test 3 expect Fizz", () => {
        const result = FizzBuzz.say(3)
        expect(result).toEqual("Fizz")
    });

    test("Test 5 expect Buzz", () => {
        const result = FizzBuzz.say(5)
        expect(result).toEqual("Buzz")
    });

    test("Test 15 expect FizzBuzz", () => {
        const result = FizzBuzz.say(15)
        expect(result).toEqual("FizzBuzz")
    });

    test("Test 21 expect Fizz", () => {
        const result = FizzBuzz.say(21)
        expect(result).toEqual("Fizz")
    });

    test("Test 25 expect Buzz", () => {
        const result = FizzBuzz.say(25)
        expect(result).toEqual("Buzz")
    });

    test("Test 30 expect FizzBuzz", () => {
        const result = FizzBuzz.say(30)
        expect(result).toEqual("FizzBuzz")
    });

    test("Test 150 expect FizzBuzz", () => {
        const result = FizzBuzz.say(150)
        expect(result).toEqual("FizzBuzz")
    });

    test("Test 13 expect FizzBuzz", () => {
        const result = FizzBuzz.say(13)
        expect(result).toEqual(13)
    });

});
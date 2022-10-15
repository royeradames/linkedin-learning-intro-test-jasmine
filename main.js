/**
 * Unit Testing: first test challenge
 * 1. Write a unit test for lastName and middleName to test its default values.
 * 2. Group all 3 units test with an appropriate description.
 */

// const Person = require('./Person')
// /Test Suite
describe(`${Person.name}`, () => {
    describe('default values', () => {
        it('first name defaults to empty', () => {
            //    arrange
            const data = {firstName: null}

            //    act
            const model = new Person(data);

            // assert
            expect(model.firstName).toBe('')
        })
        it(`last name defaults to empty`, () => {
            // setup
            const data = { lastName: null }

            // act
            const model = new Person(data)

            // assert
            expect(model.lastName).toBe('')
        })
        it(`middle name defaults to empty`, () => {
            // setup
            const data = { middleName: null }

            // act
            const model = new Person(data)

            // assert
            expect(model.middleName).toBe('')
        })
    })
})

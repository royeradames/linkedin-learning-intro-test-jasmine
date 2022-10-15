/**
 * Unit Testing: Setting up data with beforeEach challenge
 * 1. Add a new describe for the fullName
 * 2. Fully test the fullName get
 * 3. Use a nested beforeEach
 */

// const Person = require('./Person')
// /Test Suite
describe(`${Person.name}`, () => {
    let model
    describe('.getFullName', () => {
        beforeEach(() =>  model = new Person({firstName: 'Royer', lastName: 'Adames', middleName: 'Gold'}))

        it('returns the full name', () => {
            //arrange
            model.middleName = 'Golden'

            // act
            const result = model.getFullName()

            // audit
            const {firstName: fn, lastName: ln, middleName: mn} = model;

            //assert
            expect(result).toBe(`${fn} ${mn[0]} ${ln}`)
        })
    })
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

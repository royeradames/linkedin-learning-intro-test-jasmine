/**
 * Unit Testing:
 * 1. Use a spy and test the method getCodeName() fully
 * 2. You will need to use spyOn and toHaveBeenCalledWith()
 * 3. Hit; you will need to chain the spy
 * example: spyOn(object, 'key').and.returnValue(value)
 */

// Test Suite
describe(`${Person.name}`, () => {
    let model
    describe('.getFullName', () => {
        beforeEach(() => model = new Person({firstName: 'Royer', lastName: 'Adames', middleName: 'Gold'}))

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
            const data = {lastName: null}

            // act
            const model = new Person(data)

            // assert
            expect(model.lastName).toBe('')
        })
        it(`middle name defaults to empty`, () => {
            // setup
            const data = {middleName: null}

            // act
            const model = new Person(data)

            // assert
            expect(model.middleName).toBe('')
        })
    });
    describe('.getCodeName', () => {
        beforeEach(() => model = new Person())

        it('selected confirmed', () => {
            //    setup
            const expected = 'TESTING GOD!'
            const input = true
            const confirm = spyOn(window, 'confirm').and.returnValue(input)
            //    act
            const result = model.getCodeName()
            //    assert
            expect(confirm).toHaveBeenCalled()
            expect(result).toBe(expected)
        })
        it('selected denied', () => {
            //    setup
            const expected = 'Scrub skipping tests in his best friend\'s ride!'
            const input = false
            const confirm = spyOn(window, 'confirm').and.returnValue(input)
            //    act
            const result = model.getCodeName()
            //    assert
            expect(confirm).toHaveBeenCalled()
            expect(result).toBe(expected)
        })
    })
})

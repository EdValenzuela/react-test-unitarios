import { suma, resta, division, multiplicacion, getRandomNum } from './numbers'

describe('Probando funciones matematicas', () => {
    test('Probando la funcion suma', () => {
        expect(suma(5,5)).toBe(10)
    })

    test('Probando la funcion resta', () => {
        expect(resta(5,5)).toBe(0)
    })

    test('Probando la funcion multiplicacion', () => {
        expect(multiplicacion(5,5)).toBe(25)
    })

    test('Probando la funcion division', () => {
        expect(division(5,5)).toBe(1)
    })

    test('Probando la funcion getRandomNum', () => {
        //Resultado sea mayor que 4
        expect(getRandomNum(5,10)).toBeGreaterThan(4)

        //Resultado sea mayor o igual que 5
        expect(getRandomNum(5,10)).toBeGreaterThanOrEqual(5)

        //Resultado sea menor que 11
        expect(getRandomNum(5,10)).toBeLessThan(11)

        //Resultado sea menor o igual que 11
        expect(getRandomNum(5,10)).toBeLessThanOrEqual(11)
    })
})
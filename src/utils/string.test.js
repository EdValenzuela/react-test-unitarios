import {saluda, getId, despide} from './strings'

describe('Prueba de strings', () => {

    const saludo = saluda('Eduardo');
    const id = getId();
    const saludoDespide = despide();

    test('Probando la función saluda', () => {
        /*
            toMatch evalua los caracteres si existen o no un texto
            también evalua expresiones regulares
        */
        expect(saludo).toMatch('Hola soy')
    })

    test('Probando la función despide', () => {
        expect(saludoDespide).toMatch('Bye')

        //No coincida con la palabra bye
        //expect(saludoDespide).not.toMatch('Bye')
    })

    test('Probando la función saluda', () => {
        expect(id).toMatch(/\d{2}-\d{3}/)
    })
})
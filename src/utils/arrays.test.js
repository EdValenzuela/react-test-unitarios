import { createStore } from './arrays'

describe('Haciendo pruebas a listas / arrays', () => {
    test('Probando agregar una nueva fruta', () => {
        const store = createStore();

        store.addFruit('fresa')
        //similiar al toBe valida si son iguales
        expect(store.getFruits()).toStrictEqual(['fresa'])
    })

    test('Probando agregar dos nueva fruta', () => {
        const store = createStore();

        store.addFruit('fresa')
        store.addFruit('melon')

        expect(store.getFruits()).toStrictEqual(['fresa', 'melon'])
    })

    test('Probando si contiene fruta especifica', () => {
        const store = createStore();

        store.addFruit('manzana')
        store.addFruit('pera')
        //store.addFruit('banana')

        //Verifica si hay un elemento en concreto
        expect(store.getFruits()).toContain('manzana')

        //Verifica si no tiene un elemento en concreto
        expect(store.getFruits()).not.toContain('banana')
    })

    test('Probando la longitud del array', () => {
        const store = createStore();

        store.addFruit('manzana')
        store.addFruit('pera')
        store.addFruit('banana')

        //Valida si la longitud del arreglo es 3
        expect(store.getFruits()).toHaveLength(3)
    })

    test('Probando agregar un objeto con informacion de frutas', () => {
        const store = createStore();

        store.addFruit({
            name: 'fruta',
            price: 10
        })

        //Para objetos compara si son iguales
        expect(store.getFruits()).toContainEqual({
            name: 'fruta',
            price: 10
        })
    })
})
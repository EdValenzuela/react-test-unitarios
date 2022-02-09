import { createStore } from './objects'

describe('Test a objetos', () => {
    test('Agregar un item en store', () => {
        const store = createStore()

        store.addItem({
            name:'gerardo',
            id: 1,
            country: 'mexico'
        })
        //toEqual valida que todas las propiedades coincidan
        expect(store.getStore()[0]).toEqual({
            name:'gerardo',
            id: 1,
            country: 'mexico'
        })
    })

    test('Buscar el item por el id', () => {
        const store = createStore()

        store.addItem({
            name:'gerardo',
            id: 1,
            country: 'mexico'
        })

        expect(store.getById(1)).toEqual({
            name:'gerardo',
            id: 1,
            country: 'mexico'
        })

        //Valida que una o mas propiedades se cumplan
        expect(store.getById(1)).toMatchObject({
            name:'gerardo',
        })

        //Valida que una propiedad exista
        expect(store.getById(1)).toHaveProperty('name')
    })
})
import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from './async'

describe('Haciendo test a operaciones asincronas', () => {
    test('Haciendo test a callback', (done) => {
        getDataCallback( (name) => {
            expect(name).toBe('gerardo gallegos')
            done()
        })
    })

    test('Haciendo test a promesa', (done) => {
        getDataPromise()
            .then( name => {
                expect(name).toBe('gerardo gallegos')
                done()
            })
            .catch( e => {

            })
    })

    test('Haciendo test a promesa rechazada', (done) => {
        getDataPromiseError()
            .then( name => {
            })
            .catch( e => {
                expect(e).toBe('error')
                done()
            })
    })

    test('Haciendo test a con expect', () => {
        return expect(getDataPromise()).resolves.toBe('gerardo gallegos') 
    })

    test('Haciendo test a promesa rechazada con expect', () => {
        return expect(getDataPromiseError()).rejects.toBe('error') 
    })

    test('Haciendo test a promesa resuelta con async await', async () => {
        const name = await getDataPromise()
        expect(name).toBe('gerardo gallegos')
            
    })

    test('Haciendo test a promesa rechazada con async await', async () => {
        try {
            const name = await getDataPromiseError()
            expect(name).toBe('gerardo gallegos')
        } catch (e) {
            expect(e).toBe('error')
        }
            
    })

    test('Probando promesa con solicitud HTTP', async () => {
        const user = await getUsers()
        expect(user).toHaveProperty('username')
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('email')
    })
})
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import List from './List'

configure({
    adapter: new Adapter()
})


describe('Probando componente <List />', () => {

    const fruits = [
        { name: 'fresa', id:1 },
        { name: 'manzana', id:2 },
        { name: 'naranja', id:3 },
        { name: 'mango', id:4 },
    ]

    let wrapper;

    //nueva instancia por cada test
    beforeEach(() => {
        wrapper = shallow(<List title='Frutas' list={fruits} />)
    })


    test('Validar nodos', () => { 
        //Validar si existe un nodo
        expect(wrapper.find('h1').exists()).toBeTruthy()

        //Validar si tiene clase css
        expect(wrapper.find('h1').hasClass('big')).toBe(true)

        //validar cantidad de elementos hijos
        expect(wrapper.find('ul').children().length).toBe(4)

        //validar el contenido de texto de un nodo
        //expect(wrapper.find('li').first()).toBe(4)
        //expect(wrapper.find('li').first().html())
        //expect(wrapper.find('li').last().html())
        //console.log(wrapper.find('ul').childAt(2).html())

        expect(wrapper.find('ul').childAt(2).text()).toBe('naranja')

        //validar tipo de nodo o elemento
        expect(wrapper.find('ul').childAt(2).type()).toBe('li')

        //validar html
        expect(wrapper.find('ul').childAt(2).html()).toBe('<li>naranja</li>')
    })

    test('Validar actualizaciones en props', () => {
        //validar cantidad de elementos list
        expect(wrapper.find('li').length).toBe(4)

        wrapper.setProps({ 
            list: [{ name:'tio kiwi', id: 5}]
        })

        //validar cantidad de elementos li
        expect(wrapper.find('li').length).toBe(1)

        wrapper.setProps({ 
            title: 'Super Frutas'
        })

        expect(wrapper.find('.big').text()).toBe('Super Frutas')

        
    })

    test('Validar que coincida con snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

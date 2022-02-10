import React from 'react';
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App, { Title } from './App'

configure({
    adapter: new Adapter()
})

describe('Probando componente <App />', () => {
    test('Probando renderizado de componente', () => {
        const wrapper = shallow(<App />)
        //expect(wrapper.find('h1').html()).toBe('<h1>Introducción a unit testing con Jest - Cypress y Enzyme</h1>')
        
        //valida la cantidad de elementos
        //expect(wrapper.find('h1')).toHaveLength(1)

        //expect(wrapper.html()).toBe('<div><h1>Introducción a unit testing con Jest - Cypress y Enzyme</h1></div>')
        
        //Buscar por clase, id, elementos, tag
        //console.log(wrapper.find('.container').html())
        //console.log(wrapper.find('div p ').html())

        //Hijo directo de un div
        //console.log(wrapper.find('div > p ').html())

        //elemento parrafo primero despues de un elemento div
        //console.log(wrapper.find('div + p ').html())

        //elementos parrafos despues de un elemento div
        //console.log(wrapper.find('div ~ p ').length)

        //busca las propiedades de un elemento
        //console.log(wrapper.find('[num=3]').html())
        //console.log(wrapper.find('[num="3"]').html())
        //console.log(wrapper.find('[type="text"]').html())

        //console.log(wrapper.find(Title).html())
    })
})
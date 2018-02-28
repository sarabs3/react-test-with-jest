import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchField from '../searchField';

Enzyme.configure({adapter: new Adapter()});

test('test search field', () => {
    const input = shallow(<SearchField />);

    expect(input.find('p').text()).toEqual('');
    input.find('input').simulate('change', {target:{value:'sarab'}});

    expect(input.find('p').text()).toEqual('sarab');
});


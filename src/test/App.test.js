import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Toggle from './toggle';
Enzyme.configure({adapter: new Adapter()});

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('toggle the text', () => {
    const component = mount(<App />);
    //const toggle = shallow(<Toggle />);
    expect(component.state().toggle).toEqual(false);
    expect(component.find(Toggle).find('h1').text()).toEqual('Toggle Off');
    component.find(Toggle).find('h1').simulate('click');
    expect(component.state().toggle).toEqual(true);
    expect(component.find(Toggle).find('h1').text()).toEqual('Toggle On');
  })
})
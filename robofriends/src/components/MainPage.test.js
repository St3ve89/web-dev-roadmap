import { shallow } from 'enzyme'
import React from 'react'
import App from '../containers/App'

it('expect to render App component', () => {
  const mockStore = {
    robots: [],
    searchField: ''
  }
    expect(shallow(<App store={mockstore}/>)).toMatchSnapshot()
})


import React from 'react'
import { expect } from '../test_helper'
import { shallow } from 'enzyme'
import App from '../../src/components/app'
import SearchBar from '../../src/containers/search_bar'
import WeatherList from '../../src/containers/weather_list'

describe('App' , () => {
  it('renders something', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.containsAllMatchingElements([
      <SearchBar />,
      <WeatherList />
    ])).to.equal(true)

    expect(wrapper.find(SearchBar)).to.have.length(1)
    expect(wrapper.find(WeatherList)).to.have.length(1)
  })

  it('should do something regarding state', () => {
    const wrapper = shallow(<App />)

  })




})

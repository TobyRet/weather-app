import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Chart from '../../src/components/chart'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

describe('Chart', () => {
  it('Renders something', () => {
    const wrapper = shallow(<Chart data={[3,3,3]} color='green' units='hPa' />)

    expect(wrapper.containsAllMatchingElements([
      <Sparklines />,
      <SparklinesLine />,
      <SparklinesReferenceLine />,
    ]))

    const averageValue = wrapper.find('p')

    expect(averageValue.text()).to.equal('3 hPa')
  })
})

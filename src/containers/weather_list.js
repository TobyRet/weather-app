import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";

export class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color='orange' units='K'/>
        </td>
        <td>
          <Chart data={pressure} color='green' units='hPa'/>
        </td>
        <td>
          <Chart data={humidity} color='black' units='%'/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='weather-list table table-hover'>
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

// es6 syntax for passing in state.weather as a variable
function mapStateToProps({weather}) {
  return {weather}
  // shorthand for when the key is the same as the value
}

export default connect(mapStateToProps)(WeatherList)



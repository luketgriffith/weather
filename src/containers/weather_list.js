import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Chart2 from '../components/chartb';
import GoogleMap from '../components/map';
class WeatherList extends Component {

  renderWeather(cityData) {
    console.log('city data: ', cityData);
    const time = cityData.list.map(weather => weather.dt_txt)
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    
    const newTemps = temps.map((temp)=>{
      return 1.8*(temp-273) + 32
    })

    return(
      <tr key={cityData.city.name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart data={newTemps} color="orange" units="F"/>
        </td>
        <td>
          <Chart data={pressures} color="black" units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>


      </tr>

      

      )
  }

  

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>  
      )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
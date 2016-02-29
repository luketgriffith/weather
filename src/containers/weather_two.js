import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherTwo extends Component {
  renderTwo(city){
    console.log(city)
    const time = city.list.map(weather => weather.dt_txt)
    const temps = city.list.map(weather => weather.main.temp);
    const newTemps = temps.map((temp)=>{
      return 1.8*(temp-273) + 32
    })

    return(
      <table className="table table-hover">
        <thead>
          <tr>
            {time.map(function(times){
              return <td key={times}>{times}</td>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {newTemps.map(function(temp){
              return <td key={temp}>{temp}</td>
            })}
          </tr>
        </tbody>
      </table>
      )
  }

  render() {
    return(
      <div>
        {this.props.weather.map(this.renderTwo)}


      </div>
      )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherTwo);
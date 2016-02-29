import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import WeatherTwo from '../containers/weather_two';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        <WeatherTwo />
      </div>
    );
  }
}

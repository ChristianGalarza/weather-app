import './App.css';
import React from 'react'

import config from './config.json'

import Weather from './components/Weather/weather.component.jsx'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      unitType:true,
      citySearched:'Ciudad Obregon'
    }
  }

  handleChange = e =>{
    // console.log(e.target.type)
    if(e.target.type==='checkbox'){
      this.setState(prevState =>({
        unitType: !prevState.unitType
      })
    )}else{
      const {name,value} = e.target
      this.setState({[name]:value})

    }
  }



  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  render(){
    return (
      <div className='app'>
        <input type='search' name='citySearched' onChange={this.handleChange}/>
        <input type='checkbox' name='unitType' onClick={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
        {
          <Weather dataSource={`https://api.openweathermap.org/data/2.5/weather?q=${this.state.citySearched}&units=${this.state.unitType  ? 'metric' : 'imperial'}&appid=${config.API_KEY}`} 
                   unitType={this.state.unitType}
                   citySearched={this.state.citySearched} 
          />
        }
      </div>
    );
  }
}

export default App;

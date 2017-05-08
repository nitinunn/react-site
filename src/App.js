import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import Header from './components/Header.react'
import Dashboard from './pages/Dashboard.react'

class App extends Component {

  state = {
    imageUrl: ""
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=joke')
    .then( res => res.json() )
    .then( json => json.data.image_url )
    .then( (imageUrl) => {
      //console.log(imageUrl)
      this.setState({
        imageUrl: imageUrl
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;

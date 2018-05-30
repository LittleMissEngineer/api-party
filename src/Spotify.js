import React, { Component } from 'react'
import { Route } from 'react-router-dom'


import './Spotify.css'
import SpotifyTitle from './SpotifyTitle'

class Spotify extends Component {
state = {
title: ' ',
}

handleChange = (ev) => {
this.setState({title: ev.target.value})

}

handleSubmit = (ev) => {
ev.preventDefault()
this.props.history.push(`/spotify/${this.state.title}`)   
this.setState({title: ''})
}

render(){
return (
<div className = "Spotify">
<img className = "logo"
src="http://andyroid.vonetize.com.edgesuite.net/website10/wp-content/uploads/2015/07/Spotify-icon.png"
alt="Spotify"
/>

<form onSubmit={this.handleSubmit}>
<div>
    <input type ="text"
        value={this.state.title}
        onChange={this.handleChange}
        />
        </div>
        <div>
              <button type="submit">Look up song</button>
            </div>
          </form>
          <Route path="/spotify/:title" component={SpotifyTitle} />
          <Route exact path="/spotify" render={() => <h3>Please enter a song to search on Spotify.</h3>} />
        </div>

)

}


}


export default Spotify
import React, { Component } from 'react'

class SpotifySong extends Component{
constructor(props){
    super(props)

    this.state = {
        song: {},
    }
    this.fetchSongData(this.props)
}
componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

fetchSongData = (props) =>{
    fetch(`https://api.spotify.com/v1/v1/tracks/{id}${props.match.params.songname}`)
.then(call => call.json())
.then(song => this.setState({ song }))
.catch((() => console.log('Oh boy!')))
}

render(){
const {song} = this.state
return (
<div className = "SpotifySong">
<h2>title: {song.name} </h2>
</div>
)
}
}




export default SpotifySong
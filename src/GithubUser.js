import React, {Component} from 'react'
import Github from './Github';

class GithubUser extends Component {
  render() {
    return (
      <div className="GithubUser">
        <h1>GitHub User: {this.props.match.params.username}</h1>
      </div>
    )
  }
}

export default GithubUser
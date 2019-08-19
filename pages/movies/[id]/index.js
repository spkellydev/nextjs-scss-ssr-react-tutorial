import React, { Component } from 'react';

export default class extends Component {
  static getInitialProps({ query: { id }}) {
    return { movieId: id }
  }

  render() {
    return (
      <div>
        <h1>My Movie Post for #{this.props.movieId}</h1>
        <p>
          lorem
        </p>
      </div>
    )
  }
}
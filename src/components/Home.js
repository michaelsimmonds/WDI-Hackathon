import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="section has-text-centered">
        <div className="container">
          <h1 className="welcome">Welcome!</h1>
          <Link to={'/events'} className="button is-primary home-button">Find Comedy Nights in London</Link>
          <p className="is-size-3">Visit our 'Discover' section to find the best upcoming comedy events in London!</p>
        </div>
      </section>

      <div className="homeImage">
        <figure/>
      </div>
    </div>
  )
}

export default Home


// <h4 className="has-text-white title is-4">Want to hear a joke about a piece of paper? Never mind… it's tearable.</h4>

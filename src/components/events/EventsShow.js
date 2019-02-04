import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Map from '../../components/Map'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = {
      event: []
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/${this.props.match.params.id}/?api_key=7cb09683e2899aeb509e27ee73dfaf8a&eventcode=COMEDY`)
      .then( res => this.setState({ event: res.data }))
      .catch(err => alert(err.message))
  }

  render() {
    if (!this.state.event.results) return null
    const { eventname, link, description, entryprice, venue, openingtimes } = this.state.event.results
    const initDate = this.state.event.results.date.split('-')
    const sortedDate = initDate[2] + '/' + initDate[1] + '/' +  initDate[0]

    return(
      <section className="section">
        <div className="container">
          <div className="columns">

            <div className="column no-marg">
              <Map
                center={{ lat: 51.508, lng: -0.09 }}
                zoom={12}
                markers={venue}
              />
            </div>

            <div className="column no-marg">

              <h1 className="title is-1">{eventname}</h1>
              <h2 className="column"><strong>{sortedDate}</strong></h2>
              <p className="column"><strong>Opening time:</strong> {openingtimes.doorsopen} </p>
              <p className="column">{description}</p>
              <div className="column">
                <p><strong>Venue: </strong> {venue.name}</p>
                <p><strong>Address: </strong> {venue.address}, {venue.town} </p>
                <p><strong>Postcode: </strong> {venue.postcode}</p>
                <p><strong>Price: </strong>{entryprice}</p>
                <hr />

                <a href={link} target="_blank" rel="noopener noreferrer"><button className="button is-primary">Get Tickets</button></a>
                <Link to={'/events'} className="button is-primary">Back</Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default EventsShow

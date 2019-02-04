import React from 'react'
import axios from 'axios'

import EventCard from './EventCard'

class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      events: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=7cb09683e2899aeb509e27ee73dfaf8a&latitude=51.508&longitude=-0.076&radius=5&eventcode=COMEDY&mindate=2019-01-25&order=&limit=100')
      .then(res => this.setState({ events: res.data }))
      .catch(err => alert(err.message))
  }

  handleSubmit(e) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=7cb09683e2899aeb509e27ee73dfaf8a&latitude=51.508&longitude=-0.076&radius=5&eventcode=COMEDY&mindate=2019-01-25&order=&limit=100&keyword=${this.state.search}`)
      .then(res =>  this.setState({ events: res.data }))
      .catch(err => alert(err.message))
    e.preventDefault()
    if(this.state.events.results === {} ){
      console.log('no results')
    }
  }

  handleChange({ target: {name,value} }){
    this.setState({...this.state.search, [name]: value })
  }

  render () {
    if(!this.state.events.results) return null
    console.log(this.state.search)
    return(
      <section className="section">
        <div className="container">
          <h1 className="title">Comedy Nights in London</h1>

          <div>
            <form onSubmit={this.handleSubmit} className="control">
              <input className="input" name="search" type="text" placeholder="Search" onChange={this.handleChange} />
            </form>
          </div>

          <div className="columns is-multiline">
            {this.state.events.results.map(event => (
              <div className="column is-one-quarter" key={event.id}>
                <EventCard {...event}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default EventsIndex

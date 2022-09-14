import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

export default class Details extends Component {
    state = {
        details:{}
    }
    fetchDetails = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=8a241491&s=${this.props.id}&plot=full`)
        const data = await response.json()
        this.setState({
            details: data,
        })
        console.log(data)
        
    }
    componentDidMount = async()=> {
       await this.fetchDetails()
    }
  render() {
    return (
      <ListGroup >
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Actors:  {this.state.details.Actors && this.state.details.Actors.split(",").map((actor)=>(<div>{actor}</div>))}</ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Awards: {this.state.details.Awards && this.state.details.Awards.split(",").map((actor)=>(<div>{actor}</div>))}</ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Genre: {this.state.details.Genre && this.state.details.Genre.split(",").map((actor)=>(<div>{actor}</div>))}</ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Released: {this.state.details.Released && this.state.details.Released.split(",").map((actor)=>(<div>{actor}</div>))}</ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Plot: {this.state.details.Plot && this.state.details.Plot.split(",").map((actor)=>(<div>{actor}</div>))}</ListGroup.Item>
    </ListGroup>
    
    )
  }
}

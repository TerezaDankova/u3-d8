import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Details extends Component {
      
    state = {
        details:{}
    }

    fetchDetails = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=8a241491&s=${this.props.id}`)
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
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Actors:  </ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Awards: </ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Genre: </ListGroup.Item>
      <ListGroup.Item className="text-left" style={{fontSize: "12px", backgroundColor: "#141414", color: "white"}}>Released: </ListGroup.Item>
    </ListGroup>
    
    )
  }
}

export default Details

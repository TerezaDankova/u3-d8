import React, { Component } from 'react'
import { Card, Button,} from "react-bootstrap"
import Details from './Details'
import { Link } from 'react-router-dom'


export default class SingleMovie extends Component {
    state = {
        showDetails:false
    }
    
    render() {
        return (
                        <Card style={{height: "200px", width: "300px"}} >
                            <Link to={'/details/' + this.props.movie.imdbID}>
                            <Card.Img style={{ width: '155px', height: "190px"}} variant="top" src={this.props.movie.Poster} />
                            </Link>
                            <Card.Body className='p-3' style={{backgroundColor: "#141414", border: "0.25px solid #9e9e96" }}>
                                <Card.Title style={{ fontSize: "10px", color: "white"}}>{this.props.movie.Title}</Card.Title>
                                <Card.Text style={{ fontSize: "12px", color: "white" }}>
                                    Made in: {this.props.movie.Year}
                                </Card.Text>
                                <Button onClick={()=>{this.setState({showDetails:!this.state.showDetails})}} variant="outline-light" size="sm">Details</Button>
                            </Card.Body>
                            {this.state.showDetails&&<Details id={this.props.movie.imdbID}/>}
                        </Card>
                   
        )
    }
}
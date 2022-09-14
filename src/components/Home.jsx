import { Component } from "react";
import {Container} from "react-bootstrap";
import Gallery from "./Gallery";


class Home extends Component {
  
      
  render() {
    return (
      <Container fluid className="p-2 ml-3">
            <div className="row " style={{ width: "100%"}}>
                        <div className="movie-card">
                        <h3 className="text-left  pl-3 mt-4 " style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>Harry Potter</h3>
                        <Gallery style={{fontSize: "20px"}} keyword="Harry Potter" />
                       </div>
            </div>
            <div className="row mt-5" style={{ width: "100%"}}>
                        <div className="movie-card">
                        <h3 className="text-left  pl-3 mt-4 " style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>The Lord of the Rings</h3>
                        <Gallery keyword="Lord of the rings" />
                       </div>
            </div> 
            <div className="row  mt-5" style={{ width: "100%"}}>
                        <div className="movie-card">
                        <h3 className="text-left  pl-3 mt-4 " style={{color: "white", fontSize: "18px", fontWeight: "bold"}}>The Twilight</h3>
                        <Gallery keyword="twilight" />
                       </div>
            </div>
      </Container>
    );
  }
}

export default Home;
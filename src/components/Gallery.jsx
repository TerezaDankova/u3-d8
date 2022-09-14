import { Component } from 'react'
import SingleMovie from './SingleMovie'
import { Container, Col, Row, } from 'react-bootstrap'


 class Gallery extends Component {

    state = {
        movies: [],
        isLoading: true,
    }
    componentDidMount = () => {
        this.fetchMovies()
    }
    fetchMovies = async () => {
        try {
            const url = `http://www.omdbapi.com/?apikey=8a241491&s=${this.props.query}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                movies: data.Search,
                isLoading: false,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (

            <Container fluid>
                 <Row className="mt-3">
                    {this.state.movies.map(movie => {
                        return (
                            <Col key={movie.imdbID} style={{padding: "3px"}}>
                                <SingleMovie movie={movie} />
                            </Col>
                        )
                    })}
                  </Row>
            </Container>

        )
    }
}
export default Gallery
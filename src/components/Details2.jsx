import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TvShows from './TvShows'
import { ListGroup, Image } from 'react-bootstrap'

 const Details2 = () => {
  
  <TvShows />

    const [movie, setMovie] = useState(null)
    const params = useParams()
    console.log(params)
    let movieId = params.movieId

    useEffect(() => {
        
        fetchMovies()
     
      }, )
    useEffect(() => {
         console.log(movie) 
      }, [movie])
      
   const fetchMovies = async () => {
        try { const url = `http://www.omdbapi.com/?apikey=8a241491&s=${movieId}`
              const response = await fetch(url)
              const data = await response.json()
              console.log(data)
              setMovie(data)
            }
        catch (err) {
            console.log(err)
        }
    }
    return (
      <>
       {movie &&  <ListGroup >
                        <Image src={movie.Poster} alt=" movie picture"/>
                        <ListGroup.Item className="text-left" style={{fontSize: "14px", backgroundColor: "#141414", color: "white"}}>Title : {movie.Title}</ListGroup.Item>
                        <ListGroup.Item className="text-left" style={{fontSize: "14px", backgroundColor: "#141414", color: "white"}}>Year : {movie.Year}</ListGroup.Item>
                        <ListGroup.Item className="text-left" style={{fontSize: "14px", backgroundColor: "#141414", color: "white"}}>Genre : {movie.Genre}</ListGroup.Item>
                  </ListGroup>}
      </>

    )
}
export default Details2
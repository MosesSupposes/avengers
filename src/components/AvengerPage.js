import React from 'react'
import { Route, Link } from 'react-router-dom'

import AvengerDetails from './AvengerDetails'
import AvengerMovies from './AvengerMovies'

export default function AvengerPage(props) {
    const id = props.match.params.id
    const avenger = props.avengers.find(avenger => `${avenger.id}` === id)

    return (
        <div>
            <img 
                className="character-image"
                src={avenger.img}
                alt={avenger.name}
            />
            <div className="character-info-wrapper">
                <h1>{avenger.name}</h1>
                <h4>({avenger.nickname})</h4>
                
            </div> 
            <Link to={`/avengers/${id}/details`}>Avenger Details</Link>
            <Link to={`/avengers/${id}/movies`}>Movies</Link>
            <Route 
                path="/avengers/:id/details" 
                render={props => <AvengerDetails details={avenger.description} />}
            />
            <Route 
                path="/avengers/:id/movies"
                render={props => <AvengerMovies movies={avenger.movies} />}
            />
        </div>
    )
}
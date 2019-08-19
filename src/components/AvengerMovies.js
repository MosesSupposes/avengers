import React from 'react'

export default function AvengerMovies(props) {
    return (
        <div>
            {props.movies.map(function renderAvengerMovies(movieList, i) {
                return (
                    <div key={i}>
                        {movieList}
                    </div>
                )
            })}
        </div>
    )
}
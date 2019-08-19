import React from 'react'
import { Link } from 'react-router-dom'


export default function AvengersList(props) {
    return (
        <div className="characters-list-wrapper">
            {props.avengers.map(function renderAvengers(avenger) {
                return (
                    <div className="character-card" key={avenger.id}>
                        <img src={avenger.thumbnail}  alt={avenger.name}/>
                        <h2>
                            <Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link>
                        </h2>
                        <p>({avenger.nickname})</p>
                    </div>
                )
            })}
        </div>
    )
}
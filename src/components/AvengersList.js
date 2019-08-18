import React from 'react'
import { Link } from 'react-router-dom'

import avengers from '../data'

export default function AvengersList() {
    return (
        <div className="characters-list-wrapper">
            {avengers.map(function renderAvengers(avenger) {
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
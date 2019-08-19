import React from 'react'


export default function AvengersList(props) {
    return (
        <div className="characters-list-wrapper">
            {props.avengers.map(function renderAvengers(avenger) {
                return (
                    <div className="character-card" key={avenger.id}>
                        <img src={avenger.thumbnail}  alt={avenger.name}/>
                        <h2>
                            <div onClick={() => routeToAvenger(props, avenger)}>
                                {avenger.name}
                            </div>
                        </h2>
                        <p>({avenger.nickname})</p>
                    </div>
                )
            })}
        </div>
    )
}


function routeToAvenger(props, avenger) {
    props.history.push(`/avengers/${avenger.id}`)
}
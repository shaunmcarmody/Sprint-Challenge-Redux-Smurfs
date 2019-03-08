import React from 'react';

const Smurf = props => (
    <article>
        <h1>{props.smurf.name}</h1>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
    </article>
)

export default Smurf;
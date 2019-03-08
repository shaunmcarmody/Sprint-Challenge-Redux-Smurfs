import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../../actions';

const Smurf = props => (
    <article>
        <h1>{props.smurf.name}</h1>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
        <button
            onClick={() => props.deleteSmurf(props.smurf.id)}
        >
            Delete Smurf
        </button>
    </article>
)

export default connect(null, { deleteSmurf })(Smurf);
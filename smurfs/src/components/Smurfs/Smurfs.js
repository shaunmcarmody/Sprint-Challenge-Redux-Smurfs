import React from 'react';
import { connect } from 'react-redux';
import Smurf from '../Smurf/Smurf';

const Smurfs = props => props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps)(Smurfs);
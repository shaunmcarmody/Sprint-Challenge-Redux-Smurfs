import axios from 'axios';

export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
export const DELETE_SMURF_REQUEST = 'DELETE_SMURF_REQUEST';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const GET_SMURFS_REQUEST = 'GET_SMURFS_REQUEST';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';
export const POST_SMURF_REQUEST = 'POST_SMURF_REQUEST';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const PUT_SMURF_FAILURE = 'PUT_SMURF_FAILURE';
export const PUT_SMURF_REQUEST = 'PUT_SMURF_REQUEST';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_REQUEST });
  axios
    .post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_FAILURE, payload: err.message });
    })
}

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_REQUEST });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
    })
}

export const updateSmurf = smurf => dispatch => {

}

export const deleteSmurf = smurf => dispatch => {

}



import {
  DELETE_SMURF_FAILURE,
  DELETE_SMURF_REQUEST,
  DELETE_SMURF_SUCCESS,
  GET_SMURFS_FAILURE,
  GET_SMURFS_REQUEST,
  GET_SMURFS_SUCCESS,
  POST_SMURF_FAILURE,
  POST_SMURF_REQUEST,
  POST_SMURF_SUCCESS,
  PUT_SMURF_FAILURE,
  PUT_SMURF_REQUEST,
  PUT_SMURF_SUCCESS
} from '../actions';

const initialState = {
   smurfs: [],
   fetchSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 export default (state = initialState, action) => {
   switch(action.type) {
     case DELETE_SMURF_FAILURE:
      return state;
     case DELETE_SMURF_REQUEST:
      return state;
     case DELETE_SMURF_SUCCESS:
      return state;
     case GET_SMURFS_FAILURE:
      return {
        ...state, fetchSmurfs: false, error: action.payload
      }
     case GET_SMURFS_REQUEST:
      return {
        ...state, fetchSmurfs: true, error: null
      }
     case GET_SMURFS_SUCCESS:
      return {
        ...state, fetchSmurfs: false, smurfs: action.payload
      }
     case POST_SMURF_FAILURE:
      return state;
     case POST_SMURF_REQUEST:
      return state;
     case POST_SMURF_SUCCESS:
      return state;
     case PUT_SMURF_FAILURE:
      return state;
     case PUT_SMURF_REQUEST:
      return state;
     case PUT_SMURF_SUCCESS:
     default:
      return state;
   }
 }

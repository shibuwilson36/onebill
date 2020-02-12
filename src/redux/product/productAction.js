import axios from 'axios'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './userType'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get('https://ece-memories.firebaseio.com/datas.json')
      .then(response => {
       
        let newData = []
        for (const key in response.data) {
           
            newData.push({
                ...response.data[key],
                idKey: key,
                edit:false,
                image:''
            })
        }
        console.log(newData);
        
       
        dispatch(fetchUsersSuccess(newData))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}


export const fetchUsersRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  }
}
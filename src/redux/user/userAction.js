import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
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

export const editUserOption = (oldData,datas) => {
  return (dispatch) => {
  
    let newData = { ...oldData }
    newData.edit = true
    let data = datas
    data[data.indexOf(oldData)] = newData;
       
       dispatch(fetchUsersSuccess(newData))
  
  }
}
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
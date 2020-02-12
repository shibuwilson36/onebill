import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import UserUI from '../components/user-info/UserUI'
function UsersContainer ({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
    console.log(userData.users);
    
  }, [])

  // const delete=()=>{

  // }
  return (
    <div className="container mt-3 mt-5">
    jnjk
</div>
    
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
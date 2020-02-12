import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers,editUserOption} from '../../redux'
import EditProductUI from './EditProductUI'

function View ({ userData, fetchUsers ,editUserOption}) {
  useEffect(() => {
    fetchUsers()
    console.log(userData.users);
    
  }, [])

let ed=(x,y)=>{
  editUserOption(x,y)
}
  
  return (
    <div className="container mt-3 mt-5">
  
         <EditProductUI
        data={userData.users}
        // delete={delete}
        editOption={ed}
        // isEdit={isEdit}
        // handelChange={handelChange}
        // error={state}
        // open={state.open}
        // addData={addData}
        // add={state.add}
        // isAdd={isAdd}


    />
   
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
    fetchUsers: () => dispatch(fetchUsers()),
    editUser:(x,y)=>dispatch(editUserOption(x,y))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)
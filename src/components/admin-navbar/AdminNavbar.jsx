import React/*  , { useContext } */ from 'react'
import { Link } from 'react-router-dom'


export default function AdminNavbar(props) {
    

    return (
        <>
       
                <ul className="navbar-nav ml-auto  mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <Link
                            to='/login'
                            className="nav-link" >
                            <i className="fas fa-user-circle"></i>Login</Link>

                    </li>
                    <li className="nav-item active">
                        <Link
                            to='/register'
                            className="nav-link" >
                            <i className="fas fa-user-circle"></i>Register</Link>

                    </li>

                </ul>}
        </>
    )
}

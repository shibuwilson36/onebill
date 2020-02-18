import React  from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import AdminNavbar from '../admin-navbar/AdminNavbar'


export default function Navbar(props) {
    
    return (
        <>


            <nav className="navbar  navbar-expand-lg  navbar-dark bg-primary ">
                <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="navbar-brand ">


                            <h4 style={{ textShadow: '3px 2px green' }}>
                            
                                HOME
                            </h4>

                        </Link>



                    </li>

                </ul>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <AdminNavbar />

                </div>
            </nav>






        </>
    )
}

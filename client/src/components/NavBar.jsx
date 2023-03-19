import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink to='/'><a class="navbar-brand" href="##">MERN CRUD APP</a></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="##">
                                    <NavLink to='/all'>All User</NavLink></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="##">
                                    <NavLink to='/add'>Add User</NavLink>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
import React from 'react'
import { editUser, getUser } from '../service/api.js'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        loadUserDetails();
    },[]);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);

    }
    const handleForm = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const editUserDetails = async (e) => {
        e.preventDefault();
        await editUser(user,id);
        navigate('/all');
    }

    return (
        <div className="container d-flex justify-content-center">
            <form class="row g-3 mt-5 d-flex justify-content-center" onSubmit={editUserDetails}>
                <div class="col-md-8">
                    <h3>Edit User</h3>
                </div>
                <div class="col-md-8">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" name="name" value={user.name} onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputUsername" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputUsername" name="username" value={user.username}onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="email" value={user.email} onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="inputPhone" name="phone" value={user.phone} onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <button type="submit" class="btn btn-primary">Edit User</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser;
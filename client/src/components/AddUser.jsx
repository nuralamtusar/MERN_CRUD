import React from 'react'
import { addUser } from '../service/api.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}
const AddUser = () => {

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const handleForm = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(user);
        navigate('/all');
    }

    return (
        <div className="container d-flex justify-content-center">
            <form class="row g-3 mt-5 d-flex justify-content-center" onSubmit={handleSubmit}>
                <div class="col-md-8">
                    <h3>Add User</h3>
                </div>
                <div class="col-md-8">
                    <label for="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" name="name" onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputUsername" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputUsername" name="username" onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" name="email" onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="text" class="form-control" id="inputPhone" name="phone" onChange={handleForm} />
                </div>
                <div class="col-md-8">
                    <button type="submit" class="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser
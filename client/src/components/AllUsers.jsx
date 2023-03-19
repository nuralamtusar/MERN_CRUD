import React, { useState } from 'react'
import { useEffect } from 'react';
import { getUsers, deleteUser } from '../service/api.js';
import { Link } from 'react-router-dom';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  let getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <div className="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr>
                  <td>
                    {user._id}
                  </td>
                  <td>
                    {user.name}
                  </td>
                  <td>
                    {user.username}
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>
                    {user.phone}
                  </td>
                  <td>
                    <Link
                      to={`/edit/${user._id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger" onClick={() => deleteUserData(user._id)}>Delete</button>
                  </td>
                </tr>)

            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllUsers
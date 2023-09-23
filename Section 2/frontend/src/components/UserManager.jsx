import React, { useEffect, useState } from 'react'

const UserManager = () => {

    const [userList, setuserList] = useState([])

    const getUserData = async () => {
        const res = await fetch ('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setuserList(data);
    }

    useEffect(() => {
      
    //when component opens
      getUserData();
    }, [])
    
    
  return (
    <div className='vh-100 bg-body-secondary'>
        <div className='container py-4'>
            <h1 className='text-center'>User Manager</h1>

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userList.map( (user, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button className='btn btn-primary'>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManager
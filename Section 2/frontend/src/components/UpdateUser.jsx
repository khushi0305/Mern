import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
//get by url parameter
    const {id} = useParams();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserData(data);
    }

    useEffect(() => {
      fetchUserData()
    }, []);

    const submitForm = async (values) => {
        const res = await fetch('https://localhost:5000/user/update/'+id, {
            method: 'PUT',
            body: JSON.stringify
        })
        console.log(values);
    }

  return (
    <div>
         <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-3">User Update Form</h2>

                {
                    userData!==null ? 
            <Formik
                initialValues={userData}
                onSubmit={submitForm}
            >
                { (signupForm) => (
                    <form onSubmit={signupForm.handleSubmit}>
                    <label>Name</label>
                    <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                      {signupForm.touched.name && signupForm.errors.name}
                    </span>
                    <input
                      id="name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name}
                      type="text"
                      className="form-control mb-3"
                    />
      
                    <label>Email</label>
                    <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                      {signupForm.touched.email && signupForm.errors.email}
                    </span>
                    <input
                      id="email"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.email}
                      type="text"
                      className="form-control mb-3"
                    />
      
                    <label>Password</label>
                    <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                      {signupForm.touched.password && signupForm.errors.password}
                    </span>
                    <input
                      id="password"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password}
                      type="password"
                      className="form-control mb-3"
                    />
      
                    <label>Confirm Password</label>
                    <span style={{ fontSize: 10, marginLeft: "10px", color: "red" }}>
                      {signupForm.touched.confirm && signupForm.errors.confirm}
                    </span>
                    <input
                      id="confirm"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.confirm}
                      type="password"
                      className="form-control mb-3"
                    />
      
                    <button type="submit" className="btn btn-primary w-100 mt-4">
                      Submit
                    </button>
                  </form>
                ) }
            </Formik>
            :
            <h1>Loading ... </h1>

                }


            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUser;
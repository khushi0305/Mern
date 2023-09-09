import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';         //copy from formik website validateschema

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required')
  .matches('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).+$', 'Password is invalid'),
  confirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {

  //initialize formik
  const signupForm = useFormik({
    initialValues:{
      name : '',
      email : '',
      password : '',
      confirm : ''
    },
  onSubmit: (values, {resetForm}) => {
    console.log(values);
  resetForm()
  // send to backend
  },

  validationSchema: SignupSchema
  })
  return (
    <div className='py-5 vh-100 bg-body-secondary'>
    <div className='col-md-4 mx-auto'>
      <div className='card'>
        <div className="card-body">
          <h2 className='my-3'>SignUp Form</h2>
          
        <form onSubmit={signupForm.handleSubmit}>
          <label>Name</label>
          
          <span style={{fontSize:10, marginLeft: '10px', color:'red'}}>{signupForm.touched.name && signupForm.errors.name}</span>
          <input id='name' onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control mb-3' />
          
          <label>Email</label>
          <span style={{fontSize:10, marginLeft: '10px', color:'red'}}>{signupForm.touched.email && signupForm.errors.email}</span>
          <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-3' />
          
          <label>Password</label>
          <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.touched.password && signupForm.errors.password}</span>
          <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-3' />

          <label>Confirm Password</label>
          <span style={{fontSize: 10, marginLeft: '10px', color: 'red'}}>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
          <input type="password" id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='form-control mb-3' />

          <button type='submit' className='btn btn-primary w-100 mt-4'>Submit</button>
        </form>
        </div>
      </div>
    </div>
</div>
//     <div>
// <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Sign-up Page</title>
//   <style
//      dangerouslySetInnerHTML={{
//       __html:
//          "\n        *{\n            font-family: Georgia, 'Times New Roman', Times, serif;\n        }\n        .mysign{\n                    border-radius: 15px;\n            box-shadow: 2px 2px 4px 5px black;\n            padding: 25px;\n            box-sizing: border-box;\n            background-color:transparent;\n        }\n        .text{\n            text-align: center;\n            text-decoration-line: underline;\n        }\n        .myinput{\n            display: block;\n                     padding: 5px;\n            box-sizing: border-box;\n            margin-bottom: 20px;\n            padding: 10px 20px;\n            border-radius: 5px;\n            border-bottom: 3px solid black;\n            /*border: none;*/\n            background-color: #eee;\n            font-size: x-large;\n        }\n        body{\n            display: flex;\n            margin: 0;\n            font-size:x-large;\n            justify-content: center;\n            align-items: center;\n                       background-image: url(\"https://www.pixelstalk.net/wp-content/uploads/images6/Blue-Minimal-Wallpaper-HD.jpg\");\n            background-size: cover;\n            color: black;\n            backdrop-filter: blur(10px);\n        }\n        .mybtn{\n            width: 70%;\n            margin-left: 100px;\n            margin-right: 100px;\n            margin-top: 100px;\n            margin-bottom: 100px;\n            font-size: 25px;\n            background-color:cadetblue;\n            padding: 10px 5px;\n            color: white;\n            margin-top: 20px;\n            margin-bottom: 30px;\n            border: none;\n            border-radius: 10px;\n            transition-property: all;\n            transition-duration: 300ms;\n        }\n        .mybtn:hover{\n            transform: scale(1.1) translateX(10px);\n            box-shadow: 0 -10px -5px #00000058;\n        }\n        .divider {\n            font-size: 30px;\n            display: flex;\n            align-items: center;\n        }\n        .divider::before, .divider::after {\n            flex: 1;\n            content: '';\n            padding: 3px;\n            background-color: beige;\n            margin: 5px;\n        }\n        .mylogo{\n            transition-property: all;\n            transition-duration: 200ms; \n        }\n        .mylogo:hover{\n            transform: scale(1.1) translateX(10px);\n            box-shadow: 0 -10px -5px #00000058;\n        }\n        a:link {\n  color: lightblue;\n}\na:visited {\n  color:darkkhaki;\n}\na:hover {\n  color: lightblue;\n}\n    "
//     }}
//   />
//   <div className="mysign">
//     <h1 className="text">SIGN UP</h1>
//     <p className="text">New User Account</p>
//     <form>
//       <label htmlFor="name">Full Name: </label>
//       <br />
//       <input className="myinput" id="name" />
//       <br />
//       {/* <br /> */}
//       <label htmlFor="email">E-mail id: </label>
//       <br />
//       <input className="myinput" id="email" />
//       <br />
//       {/* <br /> */}
//       <label htmlFor="name">Username: </label>
//       <br />
//       <input className="myinput" id="naame" />
//       <br />
//       {/* <br /> */}
//       <label htmlFor="password">Password: </label>
//       <br />
//       <input className="myinput" id="password" />
//       <br />
//       {/* <br /> */}
//       <label htmlFor="password">Confirm Password: </label>
//       <br />
//       <input className="myinput" id="password" />
//       <br />
//       {/* <br /> */}
//       <button className="mybtn">Sign-up</button>
//       <br />
//       <p className="divider">Or Sign-up with</p>
//       <img
//         className="mylogo"
//         src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
//         width="270px"
//         height="200px"
//       />
//       <img
//         className="mylogo"
//         src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
//         width="300px"
//         height="210px"
//       />
//       <img
//         className="mylogo"
//         src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG26.png"
//         width="230px"
//         height="228px"
//       />
//       <br />
//       {/* <br /> */}
//       <p className="text">
//         Already a user?
//         <a href="signin.html">Sign-in</a>.
//       </p>
//     </form>
//   </div>
// </>

//         </div>
  )
}

export default Signup
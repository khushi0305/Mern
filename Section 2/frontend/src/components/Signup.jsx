import React from 'react'

const Signup = () => {
  return (
    <div>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign-up Page</title>
  <style
     dangerouslySetInnerHTML={{
      __html:
         "\n        *{\n            font-family: Georgia, 'Times New Roman', Times, serif;\n        }\n        .mysign{\n                    border-radius: 15px;\n            box-shadow: 2px 2px 4px 5px black;\n            padding: 25px;\n            box-sizing: border-box;\n            background-color:transparent;\n        }\n        .text{\n            text-align: center;\n            text-decoration-line: underline;\n        }\n        .myinput{\n            display: block;\n                     padding: 5px;\n            box-sizing: border-box;\n            margin-bottom: 20px;\n            padding: 10px 20px;\n            border-radius: 5px;\n            border-bottom: 3px solid black;\n            /*border: none;*/\n            background-color: #eee;\n            font-size: x-large;\n        }\n        body{\n            display: flex;\n            margin: 0;\n            font-size:x-large;\n            justify-content: center;\n            align-items: center;\n                       background-image: url(\"https://www.pixelstalk.net/wp-content/uploads/images6/Blue-Minimal-Wallpaper-HD.jpg\");\n            background-size: cover;\n            color: black;\n            backdrop-filter: blur(10px);\n        }\n        .mybtn{\n            width: 70%;\n            margin-left: 100px;\n            margin-right: 100px;\n            margin-top: 100px;\n            margin-bottom: 100px;\n            font-size: 25px;\n            background-color:cadetblue;\n            padding: 10px 5px;\n            color: white;\n            margin-top: 20px;\n            margin-bottom: 30px;\n            border: none;\n            border-radius: 10px;\n            transition-property: all;\n            transition-duration: 300ms;\n        }\n        .mybtn:hover{\n            transform: scale(1.1) translateX(10px);\n            box-shadow: 0 -10px -5px #00000058;\n        }\n        .divider {\n            font-size: 30px;\n            display: flex;\n            align-items: center;\n        }\n        .divider::before, .divider::after {\n            flex: 1;\n            content: '';\n            padding: 3px;\n            background-color: beige;\n            margin: 5px;\n        }\n        .mylogo{\n            transition-property: all;\n            transition-duration: 200ms; \n        }\n        .mylogo:hover{\n            transform: scale(1.1) translateX(10px);\n            box-shadow: 0 -10px -5px #00000058;\n        }\n        a:link {\n  color: lightblue;\n}\na:visited {\n  color:darkkhaki;\n}\na:hover {\n  color: lightblue;\n}\n    "
    }}
  />
  <div className="mysign">
    <h1 className="text">SIGN UP</h1>
    <p className="text">New User Account</p>
    <form>
      <label htmlFor="name">Full Name: </label>
      <br />
      <input className="myinput" id="name" />
      <br />
      {/* <br /> */}
      <label htmlFor="email">E-mail id: </label>
      <br />
      <input className="myinput" id="email" />
      <br />
      {/* <br /> */}
      <label htmlFor="name">Username: </label>
      <br />
      <input className="myinput" id="naame" />
      <br />
      {/* <br /> */}
      <label htmlFor="password">Password: </label>
      <br />
      <input className="myinput" id="password" />
      <br />
      {/* <br /> */}
      <label htmlFor="password">Confirm Password: </label>
      <br />
      <input className="myinput" id="password" />
      <br />
      {/* <br /> */}
      <button className="mybtn">Sign-up</button>
      <br />
      <p className="divider">Or Sign-up with</p>
      <img
        className="mylogo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
        width="270px"
        height="200px"
      />
      <img
        className="mylogo"
        src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
        width="300px"
        height="210px"
      />
      <img
        className="mylogo"
        src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG26.png"
        width="230px"
        height="228px"
      />
      <br />
      {/* <br /> */}
      <p className="text">
        Already a user?
        <a href="signin.html">Sign-in</a>.
      </p>
    </form>
  </div>
</>

        </div>
  )
}

export default Signup
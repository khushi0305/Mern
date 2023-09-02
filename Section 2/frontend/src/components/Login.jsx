import React from 'react'

const Login = () => {
  return (
    <div>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LOGIN FORM</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n        *{\n            font-family: Arial, Helvetica, sans-serif;\n        }\n        .mycard{\n                  border-radius: 10px;\n            box-shadow: 2px 3px 5px 5px black;\n            padding: 50px;\n            /*padding-top: 60px;*/\n            box-sizing: border-box;\n            background-color: transparent;\n        }\n        body{\n            display: flex;\n            margin: 0;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            background-image: url("https://www.pixelstalk.net/wp-content/uploads/images6/Blue-Minimal-Wallpaper-HD.jpg");\n            background-size: cover;\n            backdrop-filter: blur(10px);\n        }\n        .myinput{\n            display: block;\n            width: 100%;\n            padding: 5px;\n            box-sizing: border-box;\n            margin-bottom: 20px;\n            padding: 10px 20px;\n            border-radius: 5px;\n            border-bottom: 3px solid black;\n            /*border: none;*/\n            background-color: #eee;\n        }\n\n        .brand{\n            font-size: 40px;\n            font-weight: bold;\n            letter-spacing: 4px;\n            text-align: center;\n        }\n\n        .text{\n            text-align: center;\n        }\n\n        .mybtn{\n            width: 100%;\n            background-color: blueviolet;\n            padding: 10px 5px;\n            color: white;\n            margin-top: 20px;\n            margin-bottom: 30px;\n            border: none;\n            border-radius: 5px;\n            transition-property: all;\n            transition-duration: 300ms;\n        }\n        form{\n            margin-top: 50px;\n        }\n        \n        .mybtn:hover{\n            transform: scale(1.1) translateY(5px);\n            box-shadow: 0 -10px -5px #00000058;\n        }\n    '
    }}
  />
  <div className="mycard">
    <p className="brand">Brand Logo</p>
    <h2 className="text">Member Login</h2>
    {/* <p className="text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ut soluta
      error assumenda exercitationem saepe, eligendi necessitatibus ipsam!
      Accusamus, dolores.
    </p> */}
    <form>
      <label htmlFor="email">Email</label>
      <input className="myinput" type="email" />
      <label htmlFor="password">Password</label>
      <input className="myinput" type="password" />
      <button className="mybtn">Login</button>
    </form>
  </div>
</>

        </div>
  )
}

export default Login
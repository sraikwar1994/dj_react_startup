import React from "react";
import PropTypes from 'prop-types';
import './auth_form.css';

function SignupForm(props) {
    require('./backgroud.css');
    require('../../assets/landing/assets/css/theme.css');

    const [user, setUserCreds] = React.useState({
        'username': '',
        'password': '',
        'email': '',
    })

    const handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;

        setUserCreds(user => {
            const newState = {...user};
            newState[name] = value;
            return newState;
        })
        
    }

    return (
      <>
        <div className="background_image"></div>
      
        <main className="form-sigin">
          <form  onSubmit={e => props.handle_signup(e, user)}>
            <h1 className="h3 mb-3 fw-normal">Please signup </h1>
            <div className="form-floating my-2">
              <input 
              className="form-control" 
              id="floatingInput" 
              placeholder="username"
              type="text"
              name="username"
              value={user.username}
              onChange={handle_change}
              required />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating my-2">
              <input 
              type="email" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Email" 
              name="email"
              value={user.email}
              onChange={handle_change}
              required />
              <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating my-2">
              <input 
              type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password" 
              name="password"
              value={user.password}
              onChange={handle_change}
              required />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
    </>

    )
  
}


export default SignupForm;

SignupForm.prototype = {
    handle_signup: PropTypes.func.isRequired,
}
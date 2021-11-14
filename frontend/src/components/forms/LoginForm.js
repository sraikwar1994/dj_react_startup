import React from "react";
import PropTypes from 'prop-types';
import './auth_form.css';

function LoginForm(props) {
    const [user, setUserCreds] = React.useState({
        'username': '',
        'password': '',
    })

    const handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUserCreds(user => {
            const newState = {...user};
            newState[name] = value;
            return newState;
        });
    };

    return (
      <main className="form-sigin">
        <form  onSubmit={e => props.handle_login(e, user)}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
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
          <div className="form-floating">
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
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
    )

}

export default LoginForm;

LoginForm.prototype = {
    handle_login: PropTypes.func.isRequired,
}
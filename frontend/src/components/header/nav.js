import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Nav(props) {
    const handle_logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        props.set_auth_data({
            token: null,
            refresh: null,
            logged_in: false,
            username: ''
        })
    };
    const logged_out_nav = (
        <>
            <button type="button" className="btn btn-success me-2"><Link className="text-white" to="/login">Login</Link></button>
            <button type="button" className="btn btn-success me-2"><Link className="text-white" to="/signup">Signup</Link></button>
        </>
    );

    const logged_in_nav = (
        <>
        <button type="button" className="btn btn-primary me-2"><Link className="text-white" to="/dashboard">Dashboard</Link></button>
        <button onClick={handle_logout } type="button" className="btn btn-danger me-2">Logout</button>
        </>
    );

    return <div className="text-end">{ props.logged_in_nav ? logged_in_nav : logged_out_nav }</div>

}

export default Nav;

Nav.prototype = {
    set_auth_data: PropTypes.func.isRequired,
}

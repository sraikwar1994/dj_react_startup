import React from "react";
import SignupForm from "../components/forms/SignupForm";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp(props) {
    const navigate = useNavigate();

    const handle_signup = (e, data, set_auth_data) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/user/create/', data)
          .then((res) => {
              console.log(res)
            if(res.status === 201) {
                navigate('/login', 
                    { 
                        replace: true, auth_data: 
                        props.auth_data, set_auth_data: 
                        props.set_auth_data
                    }
                );
            }
          })
      };
    return (
        <>
            {<SignupForm handle_signup={handle_signup} />}
        </>
    );
}

export default SignUp;


SignUp.prototype = {
    set_auth_data: PropTypes.func.isRequired,
    auth_data: PropTypes.object.isRequired,
}

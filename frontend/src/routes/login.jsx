import React from "react";
import LoginForm from "../components/forms/LoginForm";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (props.auth_data.logged_in && props.auth_data.username === '') {
            try{
                fetch('http://localhost:8000/api/auth/user', {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                    if(res.status === 200) {
                        const json = res.json();
                        props.set_auth_data({
                            logged_in: true,
                            username: json.username
                        })

                    }else{
                        localStorage.removeItem('token');
                        localStorage.removeItem('refresh');
                        props.set_auth_data({
                            logged_in: false,
                            username: ''
                        })
    
                    }
                })
            } catch(e){
                console.log(e)
            }
        }

        if (props.auth_data.logged_in) {
            navigate('/dashboard', 
                { 
                    replace: true, auth_data: 
                    props.auth_data, set_auth_data: 
                    props.set_auth_data
                }
            );
        }

    }, [props, navigate]);

    const handle_login = (e, data) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/auth/token/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            localStorage.setItem('token', json.access);
            localStorage.setItem('refresh', json.refresh);
            props.set_auth_data({
                logged_in: true,
                username: json.username
            })
          });
      };
    

    return (
        <div>
            {<LoginForm handle_login={handle_login} />}
        </div>
    );
}

export default Login;


Login.prototype = {
    set_auth_data: PropTypes.func.isRequired,
    auth_data: PropTypes.object.isRequired,
}

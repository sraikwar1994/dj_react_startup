import React from "react";
import LoginForm from "../components/forms/LoginForm";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login(props) {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (props.auth_data.logged_in && props.auth_data.username === '') {
            try{
                fetch('/api/auth/user', {
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

        axios.post('/api/auth/token/', data)
          .then((res) => {
            const json = res.data;
            if(res.status === 200) {
                localStorage.setItem('token', json.access);
                localStorage.setItem('refresh', json.refresh);
                props.set_auth_data({
                logged_in: true,
                username: json.username
            })
            }
          })
      };


      return (
        <>
            {<LoginForm handle_login={handle_login} />}
        </>
    );
}

export default Login;


Login.prototype = {
    set_auth_data: PropTypes.func.isRequired,
    auth_data: PropTypes.object.isRequired,
}

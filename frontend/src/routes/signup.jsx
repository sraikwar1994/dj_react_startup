import React from "react";
import SignupForm from "../components/forms/SignupForm";
import PropTypes from 'prop-types';

function SignUp(props) {

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

    }, [props]);

    const handle_signup = (e, data, set_auth_data) => {
        e.preventDefault();
        fetch('http://localhost:8000/api/auth/user/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(json => {
            // Todo: implement success message
          });
      };
    return (
        <div>
            {<SignupForm handle_signup={handle_signup} />}
        </div>
    );
}

export default SignUp;


SignUp.prototype = {
    set_auth_data: PropTypes.func.isRequired,
    auth_data: PropTypes.object.isRequired,
}

import React from "react";
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!props.auth_data.logged_in) {
            navigate('/login', 
                { 
                    replace: true, auth_data: 
                    props.auth_data, set_auth_data: 
                    props.set_auth_data
                }
            );
        }

    }, [props, navigate])
    return (
        <div>
            Dashboard page
        </div>
    );
}

export default Dashboard;

import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './routes/login';
import SignUp from './routes/signup';
import Home from './routes/home';
import Dashboard from './routes/dashboard';

function App() {
  const [auth_data, set_auth_data] = React.useState({
    token: localStorage.getItem('token'),
    refresh: localStorage.getItem('refresh'),
    logged_in: localStorage.getItem('token', null) === null ? false : true,
    username: ''
  })


  React.useEffect(() => {
    if (auth_data.logged_in && localStorage.getItem('token') === null) {
      set_auth_data({
        token: '',
        refresh: '',
        logged_in: false,
        username: ''
      })
    }
  }, [auth_data])

  if (!localStorage.getItem('api_url')) {
      const api_url = window.location.href === 'http://localhost:3000/' ? 'http://localhost:8000/' : '/';
      localStorage.setItem('api_url', api_url);
  }

  return (
        <BrowserRouter>
          {/* <header className="p-3 bg-dark text-white">
              <div className="container">
                  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                          <li><Link className="nav-link px-2 text-white" to="/"> <strong> Home </strong> </Link></li>
                      </ul>
                      <Nav auth_data={auth_data} set_auth_data={set_auth_data} logged_in_nav={auth_data.logged_in ? true : false } />
                  </div>
              </div>
          </header> */}
          <Routes>
            <Route path="/" element={<Home auth_data={auth_data} set_auth_data={set_auth_data} /> } />
            <Route path="login" element={<Login auth_data={auth_data} set_auth_data={set_auth_data} />} />
            <Route path="signup" element={<SignUp auth_data={auth_data} set_auth_data={set_auth_data} />} />
            <Route path="dashboard" element={<Dashboard auth_data={auth_data} set_auth_data={set_auth_data} />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

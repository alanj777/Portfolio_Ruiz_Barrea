import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogInCircle } from 'react-icons/bi';
import Spinner from '../Loaders/Spinner';
import { ServiceContext } from '../../../ServiceContext';
import './Login.css';

const Login = () => {
  const [pvalue, setPvalue] = useState(0);
  const [admin, setAdmin] = useState({
    username: '',
    password: '',
  });
  const { uri, isDarkMode, getAuth } = useContext(ServiceContext);
  const url = `${uri}/${process.env.REACT_APP_QUERY_LOG}/login`;
  const navigate = useNavigate();

  const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
  };

  const handleInputs = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value });
  };

  const dataPost = async (event) => {
    event.preventDefault();
    setPvalue(1);
    const { username, password } = admin;
    const checkOptions = {
      username,
      password,
    };
    console.log(checkOptions);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkOptions),
      });

      console.log(res);
      const data = await res.json();

      setPvalue(0);
      if (res.status === 201) {
        toast.success(data.message, toastOptions);
        localStorage.setItem('AdminUser', data.message);
        getAuth();
        navigate('admin');
      } else {
        toast.error('Invalid credentials', toastOptions);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.', toastOptions);
    }
  };

  return (
    <div className={`login__container ${isDarkMode ? 'dark' : 'light'}`}>
      <form className="login__card" onSubmit={dataPost}>
        <ToastContainer />
        <h1>Admin Contact info</h1>
        <div className="input__field">
          <label htmlFor="username">Your UserName</label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={admin.username}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="input__field">
          <label htmlFor="password">Correct Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={admin.password}
            onChange={handleInputs}
            required
          />
        </div>
        <button
          type="submit"
          disabled={pvalue !== 0}
          style={{
            background: pvalue !== 0 ? '#4a3c53' : '',
            border: pvalue !== 0 ? '#d2b3e5' : '',
            color: pvalue !== 0 ? '#919191' : '',
          }}
        >
          {pvalue ? (
            <Spinner id="your_spinner_d" style={pvalue ? 'flex' : 'none'} />
          ) : (
            <BiLogInCircle />
          )}
          Check In
        </button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../../states/user.state';
import { selectedPostState } from '../../states/selectedPost.state';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const setUser = useSetRecoilState(userState);
    const resetSelectedPost = useResetRecoilState(selectedPostState);

  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (username === 'admin' && password === 'password') { // Simple validation
        setUser({ username, isLoggedIn: true, role: 'admin'});
        setError('');
        resetSelectedPost();
        navigate('/edit');
      } else {
        setError('Invalid username or password');
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
};

export default LoginPage;

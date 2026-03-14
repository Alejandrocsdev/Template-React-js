// CSS Module
import S from './style.module.css';
// Libraries
import { useState } from 'react';
// Components
import Turnstile from '../../components/Turnstile';
// Custom Functions
import { api, axiosPublic } from '../../api';

const Home = () => {
  const [token, setToken] = useState(null);

  const submit = async () => {
    if (!token) {
      return;
    }

    await api(axiosPublic.post('/api/auth/login', { turnstileToken: token }), {
      onSuccess: (data) => {
        console.log(data);
      },
    });
  };

  const onUsers = async () => {
    await api(axiosPublic.get('/api/users'));
  };

  const onArticles = async () => {
    await api(axiosPublic.get('/api/articles'));
  };

  return (
    <main className={S.main}>
      <h1>Home Page</h1>

      <button onClick={onUsers}>Fetch users</button>
      <button onClick={onArticles}>Fetch articles</button>

      <Turnstile onVerify={setToken} />
      <button onClick={submit}>Login</button>
    </main>
  );
};

export default Home;

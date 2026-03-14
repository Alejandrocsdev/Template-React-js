// CSS Module
import S from './style.module.css';
// Custom Functions
import { api, axiosPublic } from '../../api';

function Home() {
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
    </main>
  );
}

export default Home;

import './App.css';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;

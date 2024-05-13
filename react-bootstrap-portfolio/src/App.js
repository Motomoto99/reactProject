
import './App.css';
import { BlogPage } from './components/BlogPage';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <BlogPage />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { getPosts } from './services/postService';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Posts></Posts>
    </div>
  );
}

export default App;

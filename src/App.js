import './App.css';
import Nav from './features/posts/Nav';
import PostAdded from './features/posts/PostAdded';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
    <Nav Title='Textmedia'/>
    <PostAdded/>
    <PostsList/>
    </div>
  );
}

export default App;

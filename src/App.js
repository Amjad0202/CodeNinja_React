
import './App.css';
import Navbar  from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      
      <div className="content">
        <h1>{title}</h1>
        <Navbar></Navbar>
        <Home></Home>
        <p>Liked {likes} Timese </p>
        <p>{Math.random() * 20}</p>

        <a href={link}>google sites</a>
      </div>
    </div>
  );
}

export default App;

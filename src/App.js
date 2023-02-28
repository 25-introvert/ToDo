import logo from './logo.svg';
import './App.css';

// Compoments
import Nav from "./Components/Nav"
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App text-white bg-slate-800 h-screen w-screen overflow-y-scroll scrollbar-hide">
      <Nav />
      <Todo />
    </div>
  );
}

export default App;

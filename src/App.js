import logo from './images/book-reader.png';
import './App.css';

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} alt="logo" />
       <a>Welcome to <strong>Reader's Guild</strong> !!!</a>
     </header>
   </div>
 );
}

export default App;
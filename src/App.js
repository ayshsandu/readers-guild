import logo from './images/book-reader.png';
import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";

function App() {

const { state, signIn, signOut } = useAuthContext();

 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} alt="logo" />
       <a>Welcome to <strong>Reader's Guild</strong> !!!</a>
       <button className="sing-in-button" onClick={ () => signIn() }>Login</button>
     </header>
   </div>
 );
}

export default App;
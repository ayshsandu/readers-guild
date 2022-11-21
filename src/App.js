import logo from './images/book-reader.png';
import OpenBook from './images/open-book.jpeg';
import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";

function App() {

const { state, signIn, signOut } = useAuthContext();
 console.log(state);
 return (

   <div className="App">
     <header className="App-header">
     { state.isAuthenticated
     ? (
        <div className="greeting">
            <h1>
                Hello { state.username }!
            </h1>
            <h2>We are glad you are here.</h2>
            <p>Browse the books from our catalog and start reading today.</p>
            <button onClick={ () => signOut() }>Logout</button>
        </div>
       ) : (
         <div>
          <img src={logo} alt="logo" />
          <br/>
          <h1>Welcome to <strong>Reader's Guild</strong> !!!</h1>
          <br/>
          <button onClick={ () => signIn() }>Login</button>
       </div>

       )}
     </header>
   </div>
 );
}

export default App;
import OpenBook from './images/open-book.jpeg';
import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import { Library } from './components/Library.js'
import { Home } from './components/Home.js'
import BookList from './components/BookList';
import { Navbar } from "./components/Navbar";

function App() {

  const { state } = useAuthContext();
  console.log(state);
  return (

    <div className="App">
      <header className="App-header">
        <Navbar />
        {state.isAuthenticated
          ? (
            <><Library /><BookList /></>
          ) : (
            <><Home /><BookList /></>

          )}
      </header>
    </div>
  );
}

export default App;
import OpenBook from './images/open-book.jpeg';
import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import { Home } from './components/Home.js'
import BookList from './components/BookList';
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  const { state } = useAuthContext();
  console.log(state);
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={BookList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
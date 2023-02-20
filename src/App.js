import './App.css';
import { Home } from './components/Home.js'
import BookList from './components/BookList';
import { Navbar } from "./components/Navbar";
import BookDetails from './components/BookDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={BookList} />
          <Route path="/books/:isbn" component={BookDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
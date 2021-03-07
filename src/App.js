
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>App</h1>
        <Nav />
        <Switch>
          {/* exaxt dava primo ten komponent */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* fix problem s ukazkou itemu */}
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (

  <div>
    <h1> Home</h1>
  </div>

)

export default App;

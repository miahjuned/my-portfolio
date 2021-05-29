import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Component/About/About/About';
import NavigastionBar from './Component/Home/Navbar/NavigastionBar';
import FooterBar from './Component/Home/Footer/Footer';

function App() {
  return (
    <Router>
      <NavigastionBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>
      </Switch>
      <FooterBar/>
    </Router>
  );
}

export default App;

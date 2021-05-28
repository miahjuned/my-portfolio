import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
      <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

import './App.css';
import Home from './Component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Component/About/About/About';
// import NavigastionBar from './Component/Home/Navbar/NavigastionBar';
// import FooterBar from './Component/Home/Footer/Footer';
import Blog from './Component/Home/Blog/Blog';
import Work from './Component/Home/Work/Work';
import Contract from './Component/Contract/Contract';
import NoMatch from './Component/404/noMatch';
import SmoothScroll from './Component/Home/SmoothScroll/SmoothScroll';
import Deshboard from './Component/Home/Deshboard/Deshboard/Deshboard';
import Sidebar_home from './Component/Home/Deshboard/ApointmentByDate/Sidebar_page/Sidebar_home';
import SidebarBlog from './Component/Home/Deshboard/ApointmentByDate/Sidebar_page/SidebarBlog';
import Sidebarproject from './Component/Home/Deshboard/ApointmentByDate/Sidebar_page/Sidebarproject';

function App() {
  return (
    <Router>
      <SmoothScroll></SmoothScroll>
      {/* <NavigastionBar/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="/work">
          <Work></Work>
        </Route>

        <Route path="/sidebarhome">
          <Sidebar_home></Sidebar_home>
        </Route>

        <Route path="/sidebarblog">
          <SidebarBlog></SidebarBlog>
        </Route>

        <Route path="/sidebarproject">
          <Sidebarproject></Sidebarproject>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/contract">
          <Contract></Contract>
        </Route>

        <Route path="/deshboard">
         <Deshboard></Deshboard>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
      {/* <FooterBar/> */}
    </Router>
  );
}

export default App;

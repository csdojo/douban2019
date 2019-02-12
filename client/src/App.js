import React from 'react';
// import components from react router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import components and pages to use
import Navbar from './components/Navbar';
import Search from './pages/search';
import Home from './pages/home';


// import Saved from './pages/Saved';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
          {/* <Route exact path="/saved" component={Saved}/> */}
          {/* <Route
            render={() =>
              
            } /> */}

        </Switch>
      </div>
    </Router>
  )
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import JobPage from './jobPage/JobPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/job' component={JobPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

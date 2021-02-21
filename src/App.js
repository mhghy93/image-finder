import { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SearchImage from './components/pages/SearchImage';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search/images" component={SearchImage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';

// import Fee2 from './pages/Fee/Fee2';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet}  />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

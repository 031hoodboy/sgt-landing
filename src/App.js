import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Greet from './Pages/About/Greet';
import History from './Pages/About/History';
import BusinessPartner from './Pages/About/BusinessPartner';
import Vision from './Pages/About/Vision';
import WayToCome from './Pages/About/WayToCome';
import OrganizeChart from './Pages/About/OrganizeChart';

// import Fee2 from './pages/Fee/Fee2';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/greet" component={Greet}  />
        <Route path="/vision" component={Vision}  />
        <Route path="/history" component={History}  />
        <Route path="/business-partner" component={BusinessPartner}  />
        <Route path="/way-to-come" component={WayToCome}  />
        <Route path="/organize-chart" component={OrganizeChart}  />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

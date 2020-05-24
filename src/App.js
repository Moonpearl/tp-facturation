import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CompaniesPage, NotFoundPage } from './pages';

const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/companies" component={CompaniesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

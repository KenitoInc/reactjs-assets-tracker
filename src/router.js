import React from 'react';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';

import AppRoot from './app-root';
import Home from './components/home';
import Test from './components/test';
import About from './components/about';
import NotFoundPage from './components/Common/notfound';
//import Laptops from './components/LaptopList/index';
import Laptops from './components/Laptop/laptops';
import LaptopView from './components/Laptop/laptop-view';
import LaptopEdit from './components/Laptop/laptop-edit';
import LaptopAdd from './components/Laptop/laptop-add';
import LaptopAssign from './components/Laptop/laptop-assign';

const AppRouter = () => {
  return (
    <Router history={browserHistory}> 
      <Route path="/" component={AppRoot}>
        <IndexRoute component={Home}/>
        <Route path="/phones" component={Home}/>
        <Route path="/laptops" component={Laptops}/>
        <Route path="/laptops/:id" component={LaptopView}/>
        <Route path="/laptops/edit/:id" component={LaptopEdit}/>
        <Route path="/laptops/add/one" component={LaptopAdd}/>
        <Route path="/laptops/assign/:id" component={LaptopAssign}/>
        <Route path="/branch" component={About}/>
        <Route path="/audit" component={Test}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  );
};

export default AppRouter;
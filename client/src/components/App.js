import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () =>{
  return (
    <div className="ui container">
      {/* <BrowserRouter> */}
      <Router history={history}>
        <Header />
          <Switch>
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/edit/:id' exact component={StreamEdit}/>
            <Route path='/streams/delete/:id' exact component={StreamDelete}/>
            <Route path='/streams/:id' exact component={StreamShow}/>
          </Switch>
      </Router>
      {/* </BrowserRouter> */}
    </div>);
}

export default App;
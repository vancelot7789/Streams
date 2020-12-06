import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

const App = () =>{
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList}/>
        <Route path='/streams/new' exact component={StreamCreate}/>
        <Route path='/streams/edit' exact component={StreamEdit}/>
        <Route path='/streams/delete' exact component={StreamDelete}/>
        <Route path='/streams/show' exact component={StreamShow}/>
      </BrowserRouter>
    </div>);
}

export default App;
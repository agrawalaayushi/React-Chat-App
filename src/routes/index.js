import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Home from '../components/home';
// import MovieDetailPage from '../components/Movie/movie-detail-page';

import '../styles/index.css';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      {/* <Route path="/upcoming" exact render={props => <Home {...props}/>} />
      <Route exact path="/:movieImdbId" render={(props)=> <MovieDetailPage {...props}/>} />
      <Route exact path="/:searchKeyword" render={(props)=> <Home {...props}/>} /> */}
    </Switch>
   </BrowserRouter>
 )
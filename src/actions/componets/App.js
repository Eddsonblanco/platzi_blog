import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu'
import users from './usuarios'
import posts from './Posts';




const jobs = () => <div>
  Jobs
</div>

const App = ()  => (
  <BrowserRouter>
  <Menu/>
  <div className='margin'>
      <Route exact path='/' component={ users } />
      <Route exact path='/job' component={ jobs } />
      <Route exact path='/posts/:key' component={ posts } />
  </div>
  
  
  
  </BrowserRouter>
);


export default App;
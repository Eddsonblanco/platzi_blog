import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './menu'
import users from './usuarios'




const jobs = () => <div>
  Jobs
</div>

const App = ()  => (
  <BrowserRouter>
  <Menu/>
  <div className='margin'>
      <Route exact path='/' component={ users } />
      <Route exact path='/job' component={ jobs } />
  </div>
  
  
  
  </BrowserRouter>
);


export default App;
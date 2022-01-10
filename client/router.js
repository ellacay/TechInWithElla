


              import React from 'react';
import { Switch, Route } from 'react-router';

export default (
       <Switch>
              <Route path="/" />
              <Route path="/authorHome" />
              <Route path="/writeTechInWithElla"  />
              <Route path="/post/:id"  />
              <Route path="/editPost/:id" />
              <Route path="/about" />
              <Route path="/filter/:category" />
        
           </Switch>
)
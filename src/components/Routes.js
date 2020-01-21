import React, { Component } from 'react'
import {
    Switch, 
    Route,
    Redirect
  } from 'react-router-dom'

  import Home from '../pages/Home'
  import Favorites from '../pages/Favorites'
  
  class Routes extends Component{
      render(){
          return(
              <section>
                  <Switch>
                    <Route exact path='/' component={Home} />                  
                    <Route path='/favorites' component={Favorites} />
                    <Redirect to="/" />
                  </Switch>
              </section>
          )
      }
  }

  export default Routes
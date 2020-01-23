import React, { Component } from 'react'
import {
    Switch, 
    Route,
    Redirect
  } from 'react-router-dom'

  import Home from '../pages/Home'
  import Favorites from '../pages/Favorites'
import Search from './search/Search'
  
  class Routes extends Component{
      render(){
          return(
              <section>
                  <Switch>
                    <Route exact path='/' component={Home} />                  
                    <Route path='/favorites' component={Favorites} />
                    { /* SB: Adding the dynamic route. */}
                    { /*     Test this by typing in the url ending with .../search/books/ */}
                    <Route path='/search/:searchQuery' component={Search} />
                    <Redirect to="/" />
                  </Switch>
              </section>
          )
      }
  }

  export default Routes
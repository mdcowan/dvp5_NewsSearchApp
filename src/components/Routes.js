import React, { Component } from 'react'
import {
    Switch, 
    Route
  } from 'react-router-dom'

  import Home from '../pages/Home'
  import Articles from '../pages/Articles'
  import Favories from '../pages/Favorites'
  
  class Routes extends Component{
      render(){
          return(
              <section>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/articles' component={Articles} />
                    <Route exact path='/favorites' component={Favories} />
                  </Switch>
              </section>
          )
      }
  }

  export default Routes
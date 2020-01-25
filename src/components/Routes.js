import React, { Component } from 'react'
import {
    Switch, 
    Route,
    Redirect
  } from 'react-router-dom'

  import Home from '../pages/Home'
  import ReadLater from '../pages/ReadLater'
  import Search from './search/Search'
  import Topic from './topic/Topic'
  
  class Routes extends Component{
      render(){
          return(
              <section>
                  <Switch>
                    <Route exact path='/' component={Home} />                  
                    <Route path='/readLater' component={ReadLater} />
                    <Route path='/search/:searchQuery' component={Search} />
                    <Route path='/topic/:topicId' component={Topic}/>  
                    <Redirect to="/" />
                  </Switch>
              </section>
          )
      }
  }

  export default Routes
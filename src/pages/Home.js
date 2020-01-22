import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/header/Header'
import Articles from '../components/articles/Articles'
import HomeDisplay from '../components/homeDisplay/HomeDisplay'

class Home extends Component{
    //create an object to hold the user input

    render(){

        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomeDisplay} />
                    <Route path='/:task/:topicId' children={<Articles/>}/>  
                </Switch>
            </div>
        )
    }
}

export default Home
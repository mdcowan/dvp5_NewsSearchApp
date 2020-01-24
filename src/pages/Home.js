import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/header/Header'
import HomeDisplay from '../components/homeDisplay/HomeDisplay'

class Home extends Component{

    render(){

        return(
            <div>
                <Header/>
                <Route exact path='/' component={HomeDisplay} />
            </div>
        )
    }
}

export default Home
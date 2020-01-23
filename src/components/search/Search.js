import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import BusinessIcon from '../../images/business.png'
import EntertainmentIcon from '../../images/entertainment.png'
import HealthIcon from '../../images/health.png'
import NationIcon from '../../images/nation.png'
import ScienceIcon from '../../images/science.png'
import SportsIcon from '../../images/sports.png'
import TechIcon from '../../images/tech.png'
import WorldIcon from '../../images/world.png'
import { withRouter } from "react-router";

/*
  SB: This file began as a copy of HomeDisplay.
    Obviously, you'd want to optimize the code, but this is just a demo.
 */

class Search extends Component{
 

    //create an object to hold the user input
    state = {
        searchLoading: true,
        newsSearchList:{
            articleCount: 0,
            articles: []
        },
        searchQuery: ""
    }
 
    // SB: Triggers upon loading this component.
    componentDidMount(){
        // SB: First, fetch the user's query from the router.
        // console.log(this.props);
        let queryString = this.props.match.params.searchQuery;
        // console.log(queryString);

        // SB: Now, let's trigger the search.
        this.loadSearch(queryString);
    }

    async loadSearch(queryString) {
        console.log("LoadSearch: ", queryString);
        try{
            let url = new URL("https://gnews.io/api/v3/search?q="+ queryString +"&token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            console.log(data.articleCount)
            if (data.articleCount > 0) {
                console.log(`Setting search data for: ${queryString}`, data)
                this.setState({newsSearchList: data})//add the parsed JSON to the state   
            } 

        }
        catch(error){
            console.log('Search Error: \n', error) //write out any error in the console
        }
    }
    


    render(){
        
        //The map object holds key-value pairs
        //Objects & Maps set keys to values, retrieve those values. 
        //delete keys, and detect whther something is stored as a key. 

        //Syntax: array.map(function(currentValue, index, arr), thisValue)
        //currrentValue Required: the value of the current element
        //index Optional: The array index of the current element
        //arr Optional: The array object the current element belongs to

        return(
            <div>
                 {
                     this.state.newsSearchList.articles.map((item,idx)=>{
                        return (
                           // SB: instead of h3, this would be a custom component that received
                           //     the article data as an object property (item, above), and display
                           //     the details accordingly.
                           //     the "Key" property is used by react to differentiate difference instances
                           //     of the same item, resulting from a map.  It just needs to be unique. 
                            <h3 key={item.image}>{ item.title }</h3>
                            )
                     })
                }
            </div>
        )
    }
}


export default withRouter(Search)
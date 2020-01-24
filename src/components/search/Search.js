import React, { Component } from 'react'
import Header from '../../components/header/Header'
import NewsItem from '../../components/newsitem/NewsItem'
import { withRouter } from "react-router";

class Search extends Component{
    state = {
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
        return(
            <div>
                <Header/>
                {
                     this.state.newsSearchList.articles.map((item,idx)=>{
                        return (
                           //   Send article data to custom component that receives
                           //   it as an object property (item, above), and displays
                           //   the details accordingly.
                           //   the "Key" property is used by react to differentiate difference instances
                           //   of the same item, resulting from a map.  It just needs to be unique. 
                            <NewsItem key={idx} val={item} />
                            )
                     })
                }
            </div>
        )
    }
}


export default withRouter(Search)
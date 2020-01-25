import React, { Component } from 'react'
import Header from '../../components/header/Header'
import NewsItem from '../../components/newsitem/NewsItem'
import { withRouter } from "react-router"
import SearchLogo from '../../images/search.png'

class Search extends Component{
    state = {
        newsSearchList:{
            articleCount: 0,
            articles: []
        },
        searchQuery: "",
        rList: []
    }
 
    // SB: Triggers upon loading this component.
    componentDidMount(){
        // SB: First, fetch the user's query from the router.
        // console.log(this.props);
        let queryString = this.props.match.params.searchQuery;
        // console.log(queryString);

        // SB: Now, let's trigger the search.
        this.loadSearch(queryString);

        //If there is something in local storage, save it to the state
        if(localStorage.getItem('rList')){
            let newList = JSON.parse(localStorage.getItem('rList'))
            this.setState({
                rList: newList
            });
        }
    }

    async loadSearch(queryString) {
        console.log("LoadSearch: ", queryString);
        try{
            let url = new URL("https://gnews.io/api/v3/search?q="+ queryString +"&token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            //console.log(data.articleCount)
            if (data.articleCount > 0) {
                console.log(`Setting search data for: ${queryString}`, data)
                this.setState({searchQuery: queryString})
                this.setState({newsSearchList: data})//add the parsed JSON to the state   
            } 

        }
        catch(error){
            console.log('Search Error: \n', error) //write out any error in the console
        }
    }

    addReadLater = (event,obj) => {
        event.preventDefault()
        //console.log(obj)
        let newList = [...this.state.rList, obj]

        this.setState({
            rList: newList
        });
        //console.log(`rList: ${newList}`)
        //save the list to local storage
        localStorage.setItem('rList', JSON.stringify(newList))
    }

    render(){
        return(
            <div>
                <Header/>
                <div style={styles.sectionHeader}>
                    <img src={SearchLogo} style={styles.sectionLogo} alt="search results"/>
                    <h2 style={styles.sectionHeaderText}>Searching: {this.state.searchQuery}</h2>
                </div>
                {  this.state.newsSearchList.articleCount > 0 ? 
                    <div>
                        {
                            this.state.newsSearchList.articles.map((item,idx)=>{
                                return (
                                    //   Send article data to custom component that receives
                                    //   it as an object property (item, above), and displays
                                    //   the details accordingly.
                                    //   the "Key" property is used by react to differentiate difference instances
                                    //   of the same item, resulting from a map.  It just needs to be unique. 
                                    <NewsItem key={idx} val={item} 
                                    saveMe={(event,obj)=>this.addReadLater(event,obj)}/>
                                )
                            })
                        }
                    </div>:
                    <div>
                        <h3>Oops!</h3>
                        <p>There are no results to display. Please try again.</p>
                    </div>}
            </div>
        )
    }
}

const styles = {
    sectionHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flext start',
        alignItems: 'flex-end',
        margin: '1em 0'
    },
    sectionLogo:{
        height: '4em',
        width: '4em'
    },
    sectionHeaderText:{
        margin: '0 .5em'
    }
}

export default withRouter(Search)
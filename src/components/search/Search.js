import React, { Component } from 'react'
import Header from '../../components/header/Header'
import NewsItem from '../../components/newsitem/NewsItem'
import NewsItemDetail from '../../components/newsItemDetail/NewsItemDetail'
import { withRouter } from "react-router"
import SearchLogo from '../../images/search.png'

class Search extends Component{
    state = {
        newsSearchList:{
            articleCount: 0,
            articles: []
        },
        searchQuery: "",
        rList: [],

        //set the modal view to not render and 
        //declare a value to hold the modal article data
        modal: false,
        article: ""
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
        //console.log("LoadSearch: ", queryString);
        try{
            let url = new URL("https://gnews.io/api/v3/search?q="+ queryString +"&token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            //console.log(data.articleCount)
            if (data.articleCount > 0) {
                console.log(`Setting search data for: ${queryString}`, data)

                //test to see if there were filters set in the query string
                //if so, remove the filter text before setting the searchQuery in state
                //the value of this variable is shown to the user as to what they searched
                let filterIndex = queryString.indexOf("&")
                let mainQuery = ''
                if(filterIndex >= 0){
                    mainQuery = queryString.slice(0,filterIndex)
                    //console.log(mainQuery)
                }
                else{
                    mainQuery = queryString
                }
                this.setState({searchQuery: mainQuery})
                this.setState({newsSearchList: data})//add the parsed JSON to the state   
            } 

        }
        catch(error){
            console.log('Search Error: \n', error) //write out any error in the console
        }
    }

    //method to add the article to local storage
    addReadLater = (event,obj) => {
        event.preventDefault()
        //console.log(obj)

        //create a new array of the current and add the new object selected by the user
        let newList = [...this.state.rList, obj]

        //update the state with the newly created list 
        this.setState({
            rList: newList
        });
        //console.log(`rList: ${newList}`)
        //save the list to local storage
        localStorage.setItem('rList', JSON.stringify(newList))
    }

    //method to change the state to allow the details modal to render
    launchModal = (event,obj) => {
        event.preventDefault()

        if (obj){
            this.setState({article: obj});
            this.setState({modal: true})
        }
    }

    //method to change the state to disallow the details modal to render
    closeModal(){
        this.setState({article: ''});
        this.setState({modal: false})
    }

    render(){
        return(
            <div>
                <Header/>
                <div className='sectionHeader'>
                    <img src={SearchLogo} className='sectionLogo' alt="search results"/>
                    <h2 className='sectionHeaderText'>Search Results: {this.state.searchQuery}</h2>
                </div>
                {  this.state.newsSearchList.articleCount > 0 ? 
                    <div className='cardsContainer'>
                        {
                            this.state.newsSearchList.articles.map((item,idx)=>{
                                return (
                                    //   Send article data to custom component that receives
                                    //   it as an object property (item, above), and displays
                                    //   the details accordingly.
                                    //   the "Key" property is used by react to differentiate difference instances
                                    //   of the same item, resulting from a map.  It just needs to be unique. 
                                    <NewsItem key={idx} val={item} 
                                        launchModal={(event,obj)=>this.launchModal(event,obj)} 
                                        saveMe={(event,obj)=>this.addReadLater(event,obj)}/>
                                )
                            })
                        }
                    </div>:
                    <div>
                        <h3>Oops!</h3>
                        <p>There are no results to display. Please try again.</p>
                    </div>}
                <div>
                    {this.state.modal ? 
                    <NewsItemDetail val={this.state.article} 
                        closeModal={(event)=>this.closeModal(event)}
                        saveMe={(event,obj)=>this.addReadLater(event,obj)}/>:null}
                </div>
            </div>
        )
    }
}

export default withRouter(Search)
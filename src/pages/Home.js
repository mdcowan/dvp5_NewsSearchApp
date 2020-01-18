import React, { Component } from 'react'
import Header from '../components/header/Header'
import { MdSearch } from 'react-icons/md'
import NewsItem from '../components/newsitem/NewsItem'
import BusinessIcon from '../images/business.png'
import EntertainmentIcon from '../images/entertainment.png'
import HealthIcon from '../images/health.png'
import NationIcon from '../images/nation.png'
import ScienceIcon from '../images/science.png'
import SportsIcon from '../images/sports.png'
import TechIcon from '../images/tech.png'
import WorldIcon from '../images/world.png'

class Home extends Component{
    //create an object to hold the user input
    state = {
        searchLoading: true,
        newsSearchList:{
            articleCount: 0,
            articles: []
        } 
    }

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        try{
            let url = new URL("https://gnews.io/api/v3/search?q="+ this.state.value +"&token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            console.log(data.articleCount)
            if (data.articleCount > 0) {
                console.log('setting data')
                this.setState({newsSearchList: data, searchLoading: false})//add the parsed JSON to the state   
                console.log(this.state.newsSearchList) 
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
        let newsList = ''

        if (this.state.newsSearchList){
            newsList = this.state.newsSearchList.articles.map((element, i) => {
                //pass through the key and value from the props comp.
                return <NewsItem key={i} val={element} />
              })
            
        }

        return(
            <div>
                <Header/>
                <div>
                {this.state.searchLoading || !this.state.newsSearchList ? 
                    <div>
                        <form onSubmit={this.handleSubmit} style={styles.searchForm}>
                            <MdSearch />
                            <input 
                                type="text" 
                                value={this.state.value} 
                                placeholder='Search'
                                onChange={this.handleChange} 
                                style={styles.searchInput}/>
                            <input type="submit" hidden/>
                        </form>
                        <div>
                            <img src={BusinessIcon} alt="business"/>
                            <img src={EntertainmentIcon} alt="entertainment"/>
                            <img src={HealthIcon} alt="health"/>
                            <img src={NationIcon} alt="nation"/>
                            <img src={ScienceIcon} alt="science"/>
                            <img src={SportsIcon} alt="sports"/>
                            <img src={TechIcon} alt="technology"/>
                            <img src={WorldIcon} alt="world"/>
                        </div>  
                    </div>: 
                    <div>
                        {newsList}                        
                    </div>
                }
                </div>


            </div>
        )
    }
}

const styles = {
    searchform:{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    searchInput:{

    },
    searchIcon:{
        color: '#3d2622'
    }
}


export default Home
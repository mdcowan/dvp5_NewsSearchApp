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

class HomeDisplay extends Component{
 

    //create an object to hold the user input
    state = {
        searchLoading: true,
        newsSearchList:{
            articleCount: 0,
            articles: []
        },
        value: '',
        topic: ''
    }

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopicClick = this.handleTopicClick.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        // SB: the "submit" event need only trigger a url update.
        //      as an aside, please add a suitably styled button for submission.
        
        event.preventDefault();
        
        // SB: Navigates to the search page, which is responsible for loading it's query.
        this.props.history.push("/search/" + this.state.value)
    }
    
    async handleTopicClick(event){
        event.preventDefault();
        this.state.topic = event.target.alt
        try{
            let url = new URL("https://gnews.io/api/v3/topics/"+ this.state.topic +"?token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            console.log(data.articleCount)
            if (data.articleCount > 0) {
                console.log(`Setting topic data for: ${this.state.topic}`)
                this.setState({newsSearchList: data})//add the parsed JSON to the state   
                this.props.history.push(`/search/${this.state.topic}`)
                console.log(this.props.history)
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

        return(
            <div>
                <form onSubmit={this.handleSubmit} style={styles.searchForm}>
                    <MdSearch style={styles.searchIcon}/>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        placeholder='Search'
                        onChange={this.handleChange} 
                        style={styles.searchInput}/>
                    <input type="submit" hidden/>
                </form>
                <div style={styles.topicDisplay}>
                    <Link to={`/`} onClick={this.handleTopicClick}><img src={BusinessIcon} alt="business"  style={styles.topicImage}/></Link>
                    <Link to={`/`} onClick={this.handleTopicClick}><img src={EntertainmentIcon} alt="entertainment"   style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={HealthIcon} alt="health"   style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={NationIcon} alt="nation" style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={ScienceIcon} alt="science" style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={SportsIcon} alt="sports" style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={TechIcon} alt="technology" style={styles.topicImage}/></Link>
                    <Link to={'/'} onClick={this.handleTopicClick}><img src={WorldIcon} alt="world" style={styles.topicImage}/></Link>
                </div>  
            </div>
        )
    }
}

const styles = {
    searchform:{

        margin: '0 auto',
        display: 'flex', 
        flexflow: 'row wrap',
        justifyContent: 'space-between'
    },
    topicDisplay: {
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    searchInput:{
        height: '2.25em',
        width: '18.75em'
    },
    searchIcon:{
        height: '2.25em',
        width: '2.25em',
        color: '#3d2622',
        margin: '.5em'
    },
    topicImage:{
        cursor: 'pointer'
    }
}


export default withRouter(HomeDisplay)
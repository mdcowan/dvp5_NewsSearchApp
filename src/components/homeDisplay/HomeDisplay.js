import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import BusinessIcon from '../../images/business.png'
import EntertainmentIcon from '../../images/entertainment.png'
import HealthIcon from '../../images/health.png'
import NationIcon from '../../images/nation.png'
import ScienceIcon from '../../images/science.png'
import SportsIcon from '../../images/sports.png'
import TechIcon from '../../images/tech.png'
import WorldIcon from '../../images/world.png'


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
        this.history = useHistory();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopicClick = this.handleTopicClick.bind(this);
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
                console.log(`Setting search data for: ${this.state.value}`)
                this.setState({newsSearchList: data})//add the parsed JSON to the state   
                this.state.history.push(`/search/${this.state.value}`)
                console.log(this.state.history)
            } 

        }
        catch(error){
            console.log('Search Error: \n', error) //write out any error in the console
        }
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
                this.state.history.push(`/topic/${this.state.topic}`)
                console.log(this.state.history)
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
                    <Link to={`/topic/business`}><img src={BusinessIcon} alt="business" onClick={this.handleTopicClick} style={styles.topicImage}/></Link>
                    <Link to={`/topic/entertainment`}><img src={EntertainmentIcon} alt="entertainment" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/health'}><img src={HealthIcon} alt="health" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/nation'}><img src={NationIcon} alt="nation" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/science'}><img src={ScienceIcon} alt="science" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/sports'}><img src={SportsIcon} alt="sports" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/technology'}><img src={TechIcon} alt="technology" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
                    <Link to={'/topic/world'}><img src={WorldIcon} alt="world" onClick={this.handleTopicClick}  style={styles.topicImage}/></Link>
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


export default HomeDisplay
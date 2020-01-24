import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

//icons and images
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
        console.log(event)
        this.props.history.push("/topic/" + event.target.alt)
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
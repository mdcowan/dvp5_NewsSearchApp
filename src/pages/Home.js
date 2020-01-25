import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router"
import Header from '../components/header/Header'

//icons and images
import { MdSearch } from 'react-icons/md'
import { MdFilterList } from 'react-icons/md'
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
        value: '',
        topic: ''
    }

    constructor(props) {
        super(props);

        //event handler binding
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopicClick = this.handleTopicClick.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    async handleSubmit(event) {
        //      TODO: Add a suitably styled button for submission.
        
        event.preventDefault();
        // SB: the "submit" event need only trigger a url update.
        // SB: Navigates to the search page, which is responsible for loading it's query.
        this.props.history.push("/search/" + this.state.value)
    }
    
    async handleTopicClick(event){
        event.preventDefault();
        // Clicking the topic button will navigate to the Topic page via the routes, which will load it's query
        this.props.history.push("/topic/" + event.target.alt)
    }

    render(){

        return(
            <div>
                <Header />
                <div>
                    <form onSubmit={this.handleSubmit} style={styles.searchForm}>
                        <MdSearch style={styles.searchIcon}/>
                        <input 
                            type="text" 
                            value={this.state.value} 
                            placeholder='Search'
                            onChange={this.handleChange} 
                            style={styles.searchInput}/>
                        <input type="submit" style={styles.searchButton}/>
                        <MdFilterList style={styles.searchIcon}/>
                    </form>
                    <div style={styles.topicDiv}>
                        <div style={styles.topicDisplay}>
                            <img src={BusinessIcon} alt="business" onClick={this.handleTopicClick} style={styles.topicImage}/>
                            <img src={EntertainmentIcon} alt="entertainment" onClick={this.handleTopicClick}  style={styles.topicImage}/>
                            <img src={HealthIcon} alt="health" onClick={this.handleTopicClick}  style={styles.topicImage}/>
                            <img src={NationIcon} alt="nation"onClick={this.handleTopicClick} style={styles.topicImage}/>
                            <img src={ScienceIcon} alt="science" onClick={this.handleTopicClick} style={styles.topicImage}/>
                            <img src={SportsIcon} alt="sports" onClick={this.handleTopicClick} style={styles.topicImage}/>
                            <img src={TechIcon} alt="technology" onClick={this.handleTopicClick} style={styles.topicImage}/>
                            <img src={WorldIcon} alt="world" onClick={this.handleTopicClick} style={styles.topicImage}/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    searchForm:{       
        display: 'flex', 
        flexflow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topicDiv:{
        textAlign: "center",
    },
    topicDisplay: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        justifyItems: "center"
    },
    searchInput:{
        height: '2.25em',
        width: '18.75em'
    },
    searchButton:{
        border: 'none',
        height: '2.70em'
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


export default withRouter(Home)
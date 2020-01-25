import React, { Component } from 'react'
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
        maxDate: undefined,
        minDate: undefined,
        topic: ''
    }

    constructor(props) {
        super(props);

        //event handler binding
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopicClick = this.handleTopicClick.bind(this);
        this.handleMaxDateChange = this.handleMaxDateChange.bind(this);
        this.handleaMinDateChange = this.handleaMinDateChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleMaxDateChange(day){
        this.setState({maxDate: day})
    }

    handleaMinDateChange(day){
        this.setState({minDate: day})
    }

    async handleSubmit(event) {
       
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
                        <button type="submit" style={styles.searchButton}>Search</button>
                        <MdFilterList style={styles.searchIcon}/>
                    </form>
                    <div style={styles.topicGrid}>
                        <div style={styles.topicDisplay}><img src={WorldIcon} alt="world" onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>World</h3></div>
                        <div style={styles.topicDisplay}><img src={NationIcon} alt="nation"onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>National</h3></div>
                        <div style={styles.topicDisplay}><img src={BusinessIcon} alt="business" onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>Business</h3></div>
                        <div style={styles.topicDisplay}><img src={TechIcon} alt="technology" onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>Technology</h3></div>
                        <div style={styles.topicDisplay}><img src={EntertainmentIcon} alt="entertainment" onClick={this.handleTopicClick}  style={styles.topicImage}/><h3 style={styles.topicText}>Entertainment</h3></div>
                        <div style={styles.topicDisplay}><img src={SportsIcon} alt="sports" onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>Sports</h3></div>
                        <div style={styles.topicDisplay}><img src={ScienceIcon} alt="science" onClick={this.handleTopicClick} style={styles.topicImage}/><h3 style={styles.topicText}>Science</h3></div>
                        <div style={styles.topicDisplay}><img src={HealthIcon} alt="health" onClick={this.handleTopicClick}  style={styles.topicImage}/><h3 style={styles.topicText}>Health</h3></div>
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
        alignItems: 'center',
        margin: '2em 0'
    },
    topicGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        justifyItems: "center"
    },
    topicDisplay:{
        marginBottom: '1em'
    },
    topicText:{
        margin:'.125em 0 0 0',
        textAlign: 'center'
    },
    searchInput:{
        height: '2.25em',
        width: '18.75em',
        borderWidth: '1px', 
        borderColor:'#3d2622'
    },
    searchButton:{
        border: 'none',
        height: '2.70em',
        backgroundColor: '',
        cursor: 'pointer'
    },
    searchIcon:{
        height: '2.25em',
        width: '2.25em',
        color: '#3d2622',
        margin: '.5em'
    },
    topicImage:{
        cursor: 'pointer'
    },

}


export default withRouter(Home)
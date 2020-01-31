import React, { Component } from 'react'
import { withRouter } from "react-router"
import Header from '../components/header/Header'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "react-day-picker/lib/style.css";

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
        country: '',
        searchIn: true,
        topic: '',
        filter: false
    }

    constructor(props) {
        super(props);

        //event handler binding
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopicClick = this.handleTopicClick.bind(this);
        this.handleMaxDateChange = this.handleMaxDateChange.bind(this);
        this.handleMinDateChange = this.handleMinDateChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSearchInChange = this.handleSearchInChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleMaxDateChange(date){
        let dateQuery = this.constructDate(date)
        this.setState({maxDate: dateQuery})
        console.log(dateQuery)
    }

    handleMinDateChange(date){
        let dateQuery = this.constructDate(date)
        this.setState({minDate: dateQuery})
        console.log(dateQuery)
    }

    handleSearchInChange(event){
        event.preventDefault()
        this.setState({searchIn: event.currentTarget.value})
    }

    //method used by the min and max date event handlers to
    //construct the date text into the format accepted by the API
    constructDate(date){
        if (date){
            let month = (date.getMonth() + 1)
            let day = date.getDate()
            if (month < 10){
                month = '0' + month
            }
            if (day < 10){
                day = '0' + day
            }

            let dateQuery = date.getFullYear()
            dateQuery += '-' + month
            dateQuery += '-' + day
            return dateQuery
        }
    }

    handleCountryChange(event){
        event.preventDefault()
        //console.log(event.currentTarget.value)
        this.setState({country: event.currentTarget.value})
    }

    //event handler to allow the filter part of the form to appear
    handleFilterChange(event){
        event.preventDefault()
        if (this.state.filter){
            this.setState({filter: false})
            //console.log('closing filter')
        }
        else{
            this.setState({filter: true})
            //console.log('opening filter')
        }
    }

    async handleSubmit(event) {       
        event.preventDefault();
        // SB: the "submit" event need only trigger a url update.
        // SB: Navigates to the search page, which is responsible for loading it's query.

        let queryString = this.state.value

        //set any filters that are present in the query string
        if (this.state.minDate){
            queryString += '&mindate=' + this.state.minDate
        }
        if (this.state.maxDate){
            queryString += '&maxdate=' + this.state.maxDate
        }
        if (this.state.country){
            let cntry = ''
            if (this.state.country === 'Canada'){
                cntry = 'ca'
                console.log(cntry)
            }
            if (this.state.country === 'Mexico'){
                cntry = 'mx'
                console.log(cntry)
            }
            queryString += '&country=' + cntry
        }
        if (this.state.searchIn === 'title'){
            queryString += '&in=title'
        }

        this.props.history.push("/search/" + queryString)
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
                        <div style={styles.mainSearch}>
                            <MdSearch style={styles.searchIcon}/>
                            <input 
                                type="text" 
                                value={this.state.value} 
                                placeholder='Search'
                                onChange={this.handleChange} 
                                style={styles.searchInput}/>
                            <button type="submit" style={styles.searchButton}>Search</button>
                            <MdFilterList style={styles.searchFilter} onClick={this.handleFilterChange}/>
                        </div>
                        {this.state.filter ?
                            <div style={styles.filterContainer}>
                                <div style={styles.filterSearch}>
                                    <label>Minimum publish date</label>
                                    <DayPickerInput onDayChange={this.handleMinDateChange} style={styles.datePicker}/>
                                    <label>Maximum publish date</label>
                                    <DayPickerInput onDayChange={this.handleMaxDateChange} style={styles.datePicker}/>
                                    <div>
                                        <label>Country</label>
                                        <select onChange={this.handleCountryChange} value={this.state.country} >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Search in: </label>
                                        <select onChange={this.handleSearchInChange} value={this.state.searchIn} >
                                            <option>all</option>
                                            <option>title</option>

                                        </select> 
                                    </div>                                
                                </div>
                            </div>:null}
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
        margin: '2em 0 0 0',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainSearch:{
        display: 'flex', 
        flexflow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer:{
        position: 'relative',
        display: 'inline-block'
    },
    filterSearch:{
        backgroundColor:'#3d2622',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '10px 10px 10px 10px rgba(255, 255, 255, 0.2)',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1em',
        maxWidth: '24.5em',
        position: 'absolute',
        zIndex: 1
    },
    topicGrid: {
        margin: '2em 0 0 0',
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
    searchFilter:{
        height: '2.25em',
        width: '2.25em',
        color: '#3d2622',
        margin: '.5em',
        cursor: 'pointer'
    },
    datePicker:{
        color: '#3d2622'
    },
    topicImage:{
        cursor: 'pointer'
    },

}


export default withRouter(Home)
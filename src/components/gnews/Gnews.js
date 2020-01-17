import React, {Component} from 'react'

class Gnews extends Component{
    state = {
        loading: true,
        searchLoading: true
    }

    constructor(props) {
        super(props);
        this.state = {value: '', search: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    async handleSubmit(event) {
        this.setState({search: this.state.value});
        console.log(this.state.search);
        event.preventDefault();
        try{
            let url = new URL("https://gnews.io/api/v3/search?q="+ this.state.search +"&token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
            if (!results.ok) throw Response.statusText //check for ok status
            const data = await results.json() //convert the response to JSON
            console.log(data.articleCount)
            if (data.articleCount > 0) this.setState({newsSearchList: data, searchLoading: false})//add the parsed JSON to the state     
        }
        catch(error){
            console.log('Search Error: \n', error) //write out any error in the console
        }
      }

    async componentDidMount(){
        try{
            let url = new URL("https://gnews.io/api/v3/top-news?token=e72915371331d48c65a29e76c771da57")
            const results = await fetch(url)
        if (!results.ok) throw Response.statusText //check for ok status
        const data = await results.json() //convert the response to JSON
        console.log(data.articleCount)
        this.setState({newsList: data, loading: false})//add the parsed JSON to the state
        }
        catch(error){
            console.log('Error: \n', error) //write out any error in the console
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search: 
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
                {this.state.loading || !this.state.newsList ? 
                    <div>Loading...</div>: 
                    <div>
                        <h2>GNews API Top News Results</h2>
                        <h3>{this.state.newsList.articles[0].title}</h3>
                        <a href={this.state.newsList.articles[0].url}>URL: {this.state.newsList.articles[0].url}</a>
                        <h3>{this.state.newsList.articles[1].title}</h3>
                        <a href={this.state.newsList.articles[1].url}>URL: {this.state.newsList.articles[0].url}</a>
                    </div>}
                {this.state.searchLoading || !this.state.newsSearchList ? 
                    <div>Loading...</div>: 
                    <div>
                        <h2>GNews API Search News Results</h2>
                        <h3>{this.state.newsSearchList.articles[0].title}</h3>
                        <a href={this.state.newsSearchList.articles[0].url}>URL: {this.state.newsSearchList.articles[0].url}</a>
                        <h3>{this.state.newsSearchList.articles[1].title}</h3>
                        <a href={this.state.newsSearchList.articles[1].url}>URL: {this.state.newsList.articles[0].url}</a>
                    </div>
                }
            </div>
        )
    }
}

export default Gnews;
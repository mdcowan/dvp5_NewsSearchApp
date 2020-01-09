import React, {Component} from 'react'

class Gnews extends Component{
    state = {
        loading: true
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
                {this.state.loading || !this.state.newsList ? 
                    <div>Loading...</div>: 
                    <div>
                        <h2>GNews API Top News Results</h2>
                        <h3>{this.state.newsList.articles[0].title}</h3>
                        <a href={this.state.newsList.articles[0].url}>URL: {this.state.newsList.articles[0].url}</a>
                        <h3>{this.state.newsList.articles[1].title}</h3>
                        <a href={this.state.newsList.articles[1].url}>URL: {this.state.newsList.articles[0].url}</a>
                    </div>
                }
            </div>
        )
    }
}

export default Gnews;
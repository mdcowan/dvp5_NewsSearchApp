import React, { Component } from 'react'

class Comicvine extends Component{
    state = {
        loading: true
    }

    async componentDidMount(){
        try{
            let url = new URL("https://comicvine.gamespot.com/api/search/?api_key=5d5fafb47c1601ec892dd3b6ae70e1fa04ee1cae&format=json&sort=name:asc&resources=issue&query=%22Wonder%20Woman%22")
            const results = await fetch(url)
        if (!results.ok) throw Response.statusText //check for ok status
        const data = await results.json() //convert the response to JSON
        console.log(data.number_of_page_results)
        this.setState({comicList: data, loading: false})//add the parsed JSON to the state
        }
        catch(error){
            console.log('Error: \n', error) //write out any error in the console
        }
    }

    render(){
        return(
            <div>
                {this.state.loading || !this.state.comicList ? 
                    <div>Loading...</div>: 
                    <div>
                        <h2>Comic Vine API Search Results</h2>
                        <h3>{this.state.comicList.results[0].name} Issue # {this.state.comicList.results[0].issue_number}</h3>
                        <a href={this.state.comicList.results[0].site_detail_url}>URL: {this.state.comicList.results[0].site_detail_url}</a>
                        <h3>{this.state.comicList.results[1].name} Issue # {this.state.comicList.results[0].issue_number}</h3>
                        <a href={this.state.comicList.results[1].site_detail_url}>URL: {this.state.comicList.results[0].site_detail_url}</a>
                    </div>
                }
            </div>
        )
    }
}

export default Comicvine
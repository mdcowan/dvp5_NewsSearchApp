import React, { Component } from 'react'

class Edaman extends Component{
    state = {
        loading: true
    }

    async componentDidMount(){
        try{
            let url = new URL("https://api.edamam.com/search"),
            params = {
                "q": "chocolate",
                "app_id": "7c183016",
                "app_key": "03d9678cc4495624359c1daf2ff7f22c",
                "mealType": "snack"
              }
              Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
            const results = await fetch(url)
        if (!results.ok) throw Response.statusText //check for ok status
        const data = await results.json() //convert the response to JSON
        console.log(data)
        this.setState({recipeList: data, loading: false})//add the parsed JSON to the state
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
                        <h2>Recipe API Search Results</h2>
                        {/* <h3>{this.state.comicList.results[0].name} Issue # {this.state.comicList.results[0].issue_number}</h3>
                        <a href={this.state.comicList.results[0].site_detail_url}>URL: {this.state.comicList.results[0].site_detail_url}</a>
                        <h3>{this.state.comicList.results[1].name} Issue # {this.state.comicList.results[0].issue_number}</h3>
                        <a href={this.state.comicList.results[1].site_detail_url}>URL: {this.state.comicList.results[0].site_detail_url}</a> */}
                    </div>
                }
            </div>
        )
    }
}

export default Edaman
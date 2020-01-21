import React from 'react'
import NewsItem from '../../components/newsitem/NewsItem'
import { useParams } from 'react-router-dom'
import HomeDisplay from '../../components/homeDisplay/HomeDisplay'

function Articles (props) {
    if (props.newsSearchList && props.newsSearchList.articleCount != 0){
        props.newsList = props.newsSearchList.articles.map((element, i) => {
            //pass through the key and value from the props comp.
            return <NewsItem key={i} val={element} />
          })

          return(
                <div>
                    <h2>Displaying {props.newsSearchList.articleCount} results</h2>
                    <div>                
                        {props.newsList}
                    </div>
                </div>

          )
        
    }
    else{
        return(
            <div>
                <h2>No results found. Please try again.</h2>
                <HomeDisplay />
            </div>
        )
    }
}

export default Articles
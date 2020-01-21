import React from 'react'
import NewsItem from '../../components/newsitem/NewsItem'
import { useParams } from 'react-router-dom'

const Articles = () => {
    let match = useParams();
    if (this.state.newsSearchList){
        let  newsList = this.state.newsSearchList.articles.map((element, i) => {
            //pass through the key and value from the props comp.
            return <NewsItem key={i} val={element} />
          })
        
    }
}

export default Articles
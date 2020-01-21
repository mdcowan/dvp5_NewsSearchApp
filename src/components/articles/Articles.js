import React from 'react'
import NewsItem from '../../components/newsitem/NewsItem'

const Articles = (props) => {

    if (props.newsSearchList){
        props.newsSearchList.articles.map((element, i) => {
            //pass through the key and value from the props comp.
            return <NewsItem key={i} val={element} />
          })
        
    }
}

export default Articles
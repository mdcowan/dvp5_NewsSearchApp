import React from 'react'
import { MdFavorite } from "react-icons/md"

const NewsItem = props => {
    console.log(props)
    return(
        <article key={props.id} style={styles.list}>
            <div style={styles.articleTitle}>
                <h3>{props.val.title}</h3>
                <MdFavorite onClick={(e)=>{props.saveMe(e,props.val)}}/>
            </div>            
            <p>{props.val.description}</p>          
        </article>
    )    
}

const styles = {
    list:{

    }, 
    articleTitle:{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default NewsItem;
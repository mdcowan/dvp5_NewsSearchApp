import React from 'react'
import { MdFavorite } from "react-icons/md"

const TopicItem = props => {
    console.log(props)
    return(
        <article key={props.id} style={styles.list}>
            <div style={styles.articleTitle}>
                <h3 style={styles.articleHeading}>{props.val.title}</h3>
                <MdFavorite onClick={(e)=>{props.saveMe(e,props.val)}}/>
            </div>                   
        </article>
    )    
}

const styles = {
    list:{

    }, 
    articleTitle:{
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    articleHeading:{
        marginBlockStart: '0',
        marginBlockEnd: '0'
    }
}

export default TopicItem;
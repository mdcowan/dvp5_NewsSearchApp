import React from 'react'
import { MdDelete } from "react-icons/md"

const ReadItem = props => {
    console.log(props)
    let tag = String(props.num)
    return(
        <article key={props.id} style={styles.list}>
            <div style={styles.articleTitle}>
                <h3>{props.val.title}</h3>
                <MdDelete onClick={(e)=>{props.removeMe(e,tag)}}/>
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

export default ReadItem;
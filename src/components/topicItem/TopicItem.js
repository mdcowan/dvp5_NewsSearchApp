import React from 'react'
import { MdFavorite } from "react-icons/md"

const TopicItem = props => {
    //console.log(props)
    return(
        <article key={props.id} className='article'>
            <div className='articleTitle'>
                <h3 onClick={(e)=>{props.launchModal(e,props.val)}} className='articleTitleText'>{props.val.title}</h3>
                <MdFavorite onClick={(e)=>{props.saveMe(e,props.val)}} className='articleActionIcon'/>
            </div>                   
        </article>
    )    
}

export default TopicItem;
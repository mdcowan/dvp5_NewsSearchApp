import React from 'react'
import { MdDelete } from "react-icons/md"

const ReadItem = props => {
    //console.log(props)

    //convert the item's index (props.num) into a string, 
    //which makes it an object that can be passed in
    //the event callback
    let tag = String(props.num)
    return(
        <article key={props.id} className='article'>
            <div className='articleTitle'>
                <h3 onClick={(e)=>{props.launchModal(e,props.val)}} className='articleTitleText'>{props.val.title}</h3>
                <MdDelete onClick={(e)=>{props.removeMe(e,tag)}} className='articleActionIcon'/>
            </div>            
            <p>{props.val.description}</p>          
        </article>
    )    
}

export default ReadItem;
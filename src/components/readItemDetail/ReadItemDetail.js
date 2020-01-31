import React from 'react'
import { MdDelete } from "react-icons/md"
import { MdClose } from 'react-icons/md'

const ReadItemDetail = props => {
    console.log(props)
    return(
        <div className='modal'>
            <article key={props.id} className='article modalArticle'>
                <div className='articleTitle'>
                    <MdClose onClick={props.closeModal} className='articleActionIcon'/>
                    <MdDelete onClick={(e)=>{props.removeMe(e,props.val)}} className='articleActionIcon'/>
                </div>
                { props.val.image ?
                    <div>
                        <img src={props.val.image} alt={props.val.title} className='modalImage'/>
                    </div>:null
                }
                <h3>{props.val.title}</h3>           
                { props.val.description ?
                    <div>
                        <p>{props.val.description}</p>
                    </div>:null
                }
                <p>Published: {props.val.publishedAt}</p>  
                <p>Source: {props.val.source.name}</p>
                <div className='buttonContainer'>
                    <a href={props.val.url} target="_blank" rel="noopener noreferrer" className='button'>GO</a>  
                </div>
            </article>
        </div>
    )
}

export default ReadItemDetail;
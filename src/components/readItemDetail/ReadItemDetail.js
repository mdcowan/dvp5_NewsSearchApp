import React from 'react'
import { MdDelete } from "react-icons/md"

const ReadItemDetail = props => {
    console.log(props)
    return(
        <div className='modal' onClick={(e)=>props.closeModal(e)} >
            <article key={props.id} className='article modalArticle'>
                { props.val.image ?
                    <div>
                        <img src={props.val.image} alt={props.val.title} className='modalImage'/>
                    </div>:null
                }
                <div className='articleTitle'>
                    <h3>{props.val.title}</h3>
                    <MdDelete onClick={(e)=>{props.removeMe(e,props.val)}} className='articleActionIcon'/>
                </div>            
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
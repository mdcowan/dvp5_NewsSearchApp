import React, { Component } from 'react'
import Header from '../components/header/Header'
import ReadItem from '../components/readItem/ReadItem'

class ReadLater extends Component{
    state = {
        rList: []
    }

    

    componentDidMount(){
        //If there is something in local storage, save it to the state
        if(localStorage.getItem('rList')){
            let newList = JSON.parse(localStorage.getItem('rList'))
            this.setState({
                rList: newList
            });
        }
    }

    removeReadLater = key =>{
        //copy the list array
        let newList = this.state.rList
        //remove the clicked item
        newList.splice(key, 1)
        //set the state with the updated list
        this.setState({
            rList: newList
        });
        //save the updated list to local storage
        localStorage.setItem('rList', JSON.stringify(newList))
    }


    render(){
        return(
            <div>
                <Header/>
                <h2>Articles to Read Later</h2>
                {this.state.rList.length > 0 ?                    
                    <div>
                        {
                            this.state.rList.map((item,idx)=>{
                            return (
                                //   Send article data to custom component that receives
                                //   it as an object property (item, above), and displays
                                //   the details accordingly.
                                //   the "Key" property is used by react to differentiate difference instances
                                //   of the same item, resulting from a map.  It just needs to be unique. 
                                <ReadItem key={idx} val={item} 
                                removeMe={(idx)=>this.removeReadLater(idx)}/>
                                )
                            })
                        }
                </div>
                :
                <div>
                    <h3>Opps!</h3>
                    <p>There isn't anything in your read list! Add something by finding an article you like and clicking the heart icon next to it.</p>
                </div>}

            </div>
        )
    }
}

export default ReadLater
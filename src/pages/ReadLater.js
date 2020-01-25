import React, { Component } from 'react'
import Header from '../components/header/Header'
import ReadItem from '../components/readItem/ReadItem'

//images
import ReadLaterLogo from '../images/favorites.png'


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

    removeReadLater = (event, key) =>{
        event.preventDefault()
        //console.log(`Event current target:`)
        //console.log(event.currentTarget.parentElement.parentElement)
        console.log(key)
        let i = parseInt(key)
        console.log(i)
        //copy the list array
        let newList = this.state.rList
        //remove the clicked item
        newList.splice(i, 1)
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
                <div style={styles.sectionHeader}>
                    <img src={ReadLaterLogo} style={styles.sectionLogo} alt="read later results"/>
                    <h2 style={styles.sectionHeaderText}>Articles to Read Later</h2>
                </div>
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
                                <ReadItem key={idx} val={item} num={idx}
                                removeMe={(event, key)=>this.removeReadLater(event, key)}/>
                                )
                            })
                        }
                </div>
                :
                <div>
                    <h3>Oops!</h3>
                    <p>There isn't anything in your read list! Add something by finding an article you like and clicking the heart icon next to it.</p>
                </div>}

            </div>
        )
    }
}

const styles = {
    sectionHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flext start',
        alignItems: 'flex-end',
        margin: '1em 0'
    },
    sectionLogo:{
        height: '4em',
        width: '4em'
    },
    sectionHeaderText:{
        margin: '0 .5em'
    }
}

export default ReadLater
import React from 'react'
import logo from '../../images/logo.png'
import { MdSearch } from "react-icons/md"

//dummy component
const Header = props => {
    return (
        <header style={styles.header}>
            <div>
                <img src={logo} alt="Morning Coffee logo"/>
                <h1>Morning Coffee</h1>
            </div>
            <div>
                <h2>Some stuff here</h2>
            </div>
            
        </header>
    )
}

export default Header

const styles={
    header: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        color:'grey'
    }, 
    searchForm:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 1rem 0 1rem'
    },
    searchInput:{
        marginLeft: '1rem',
        border: 'none',
        flexGrow:'2'
    }
}
import React from 'react'
import logo from '../../images/logo.png'
import { MdFavorite } from "react-icons/md"
import { Link } from 'react-router-dom'

//dummy component
const Header = props => {
    return (
        <header style={styles.header}>
            <div style={styles.logoDisplay}>
                <Link to='/'><img src={logo} alt="Morning Coffee logo" style={styles.logoImage}/></Link>
                <h1>Morning Coffee</h1>
            </div>
            <div>
                <Link to='/favorites'><MdFavorite style={styles.fav}/></Link>
            </div>
            
        </header>
    )
}

export default Header

const styles={
    header: {
        backgroundColor: '#3d2622',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        color:'grey'
        
    }, 
    logoDisplay:{
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
    },
    fav:{
        color: 'FFF',
        marginTop: '1.5em',
        height: '3em',
        width: '3em'
    }
}
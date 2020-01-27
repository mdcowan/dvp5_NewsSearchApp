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
                <h1 style={styles.logoText}>Morning Coffee</h1>
            </div>
            <Link to='/readlater'><MdFavorite style={styles.fav}/></Link>
            
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
        color:'grey',
        padding: '.5em 0'
        
    }, 
    logoDisplay:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 .5em'
    },
    logoText:{
        margin: '0 .5em'
    },
    searchInput:{
        marginLeft: '1rem',
        border: 'none',
        flexGrow:'2'
    },
    fav:{
        color: 'FFF',
        height: '2em',
        width: '2em',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 .5em'
    },
    pageHeadingText:{

    }
}
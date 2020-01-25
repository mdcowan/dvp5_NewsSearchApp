import React from 'react'

//icons and images
import BusinessIcon from '../../images/business.png'
import EntertainmentIcon from '../../images/entertainment.png'
import HealthIcon from '../../images/health.png'
import NationIcon from '../../images/nation.png'
import ScienceIcon from '../../images/science.png'
import SportsIcon from '../../images/sports.png'
import TechIcon from '../../images/tech.png'
import WorldIcon from '../../images/world.png'

const TopicHeader = props => {
    return(
        <div>
            <div>
                { props.topic === "business" ? 
                    <div style={styles.sectionHeader}>
                        <img src={BusinessIcon} style={styles.sectionLogo} alt="business results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Business</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic ==="entertainment" ?
                    <div style={styles.sectionHeader}>
                        <img src={EntertainmentIcon} style={styles.sectionLogo} alt="entertainment results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Entertainment</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="health" ?
                    <div style={styles.sectionHeader}>
                        <img src={HealthIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Health</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="nation" ?
                    <div style={styles.sectionHeader}>
                        <img src={NationIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: National</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="science" ?
                    <div style={styles.sectionHeader}>
                        <img src={ScienceIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Science</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="sports" ?
                    <div style={styles.sectionHeader}>
                        <img src={SportsIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Sports</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="technology" ?
                    <div style={styles.sectionHeader}>
                        <img src={TechIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: Technology</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="world" ?
                    <div style={styles.sectionHeader}>
                        <img src={WorldIcon} style={styles.sectionLogo} alt="search results"/>
                        <h2 style={styles.sectionHeaderText}>Topic: World</h2>
                    </div>: null}
            </div>
        </div>
    )  
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

export default TopicHeader
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
                    <div className='sectionHeader'>
                        <img src={BusinessIcon} className='sectionLogo' alt="business results"/>
                        <h2 className='sectionHeaderText'>Topic: Business</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic ==="entertainment" ?
                    <div className='sectionHeader'>
                        <img src={EntertainmentIcon} className='sectionLogo' alt="entertainment results"/>
                        <h2 className='sectionHeaderText'>Topic: Entertainment</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="health" ?
                    <div className='sectionHeader'>
                        <img src={HealthIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: Health</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="nation" ?
                    <div className='sectionHeader'>
                        <img src={NationIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: National</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="science" ?
                    <div className='sectionHeader'>
                        <img src={ScienceIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: Science</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="sports" ?
                    <div className='sectionHeader'>
                        <img src={SportsIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: Sports</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="technology" ?
                    <div className='sectionHeader'>
                        <img src={TechIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: Technology</h2>
                    </div>: null}
            </div>
            <div>
                {props.topic==="world" ?
                    <div className='sectionHeader'>
                        <img src={WorldIcon} className='sectionLogo' alt="search results"/>
                        <h2 className='sectionHeaderText'>Topic: World</h2>
                    </div>: null}
            </div>
        </div>
    )  
}

export default TopicHeader
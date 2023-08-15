import {useEffect} from 'react'

import {BiCodeAlt} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {FiLink2} from 'react-icons/fi'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import AOS from 'aos'

import 'react-vertical-timeline-component/style.min.css';

import 'aos/dist/aos.css';
import './index.css'



const projectsList = [
    {id: 1,   projectTitle: 'Todo Lists', gitLink: 'https://github.com/Agastinmellimi/TodoListWebsite.git',  projectUrl: 'https://agastintodo.ccbp.tech/', publishLink: 'agastintodo.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073976/uwrnwh1ax7ycfdncdfvr.png', technologies: ['HTML', 'CSS', 'JS', 'Bootstrap']},
    {id: 2,  projectTitle: 'IPL Dashboard', gitLink: 'https://github.com/Agastinmellimi/IplDashBoardAgastin.git',  projectUrl: 'https://agastinipl.ccbp.tech/',publishLink: 'agastinipl.ccbp.tech',  imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073983/ts7vztghmbi040ivhrwd.png', technologies: ['React JS', 'CSS', 'JS', 'Routing', 'REST API Calls']},
    {id: 3,   projectTitle: 'Jobby App', gitLink: 'https://github.com/Agastinmellimi/jobbyAgastin.git', projectUrl:'https://agastinjobby.ccbp.tech/', publishLink: 'agastinjobby.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073978/ygp9fato04foceri7hwo.png', technologies: ['React JS', 'JS', 'CSS', 'Routing', 'REST API Calls', 'Local Storage', 'JWT Token',
    'Authorization', 'Authentication']},
    {id: 4,  projectTitle: 'CCBP Timeline', gitLink: 'https://github.com/Agastinmellimi/tutorial.git',  projectUrl: 'https://agastintimeline.ccbp.tech/', publishLink: 'agastintimeline.ccbp.tech', imageUrl: 'https://res.cloudinary.com/dkrpgt9kd/image/upload/v1692073982/oia9iscx33mkamy5up4y.png', technologies: ['React JS', 'CSS', 'JS', 'React Chrono']},
]

const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
    return (
        <div className='project-container'>
             <h1 className='heading' data-aos='flip-down'>Projects</h1>
             <div className='card-timeline'>
             <VerticalTimeline className='card-timeline'>
                {projectsList.map(eachItem => (
                    <VerticalTimelineElement
                    contentStyle={{ backgroundImage: 'linear-gradient(to right, #16f582, #2eb06d)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #16f582' }}
                    className="vertical-timeline-element--work"
                    iconStyle={{ backgroundImage: 'linear-gradient(to right, #16f582, #2eb06d)', color: '#fff' }}
                    icon={<BiCodeAlt/>}
                    >
                        <div className='project-name-container'>
                            <h1 className="project-name vertical-timeline-element-title" data-aos='fade'>{eachItem.projectTitle}</h1>
                            <a href={eachItem.gitLink} target='_blank' rel='noreferrer' data-aos='fade-right'><BsGithub size={23}/></a>
                        </div>
                        <p className='topics-heading' data-aos='flip-down'>Technologies Used</p>
                        <ul className='topics-container'>
                            {eachItem.technologies.map(item => (
                                <li className='topic' data-aos='zoom-in'>{item}</li>
                            ))}
                        </ul>
                        <a href={eachItem.projectUrl} data-aos='fade' className='link-container' target='_blank' rel='noreferrer'><FiLink2 size={20} className='link-icon'/>{eachItem.publishLink}</a>
                    </VerticalTimelineElement>
                ))}
             </VerticalTimeline>
             </div>
        </div>
    )
}
export default Projects




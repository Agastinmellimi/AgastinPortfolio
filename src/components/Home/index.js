import {useEffect} from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

import AOS from 'aos'
import {TypeAnimation} from 'react-type-animation'

import './index.css'
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
      return (
        <div className='home-container'>
        <div className='profile-container'>
         <div className='profile-content'>
             <h1 className='name' data-aos='flip-down'>Hello, I am Agastin</h1>
             <TypeAnimation sequence={[
              'I am Fresher', 1000,
              'Looking for Job', 1000,
              "Open to Work", 1000
             
             ]} wrapper="span"
             speed={55}
             className='anim-text'
             repeat={Infinity}/>
             <p data-aos='flip-down' className='bio'>
                 Passionate MERN Stack Developer, weaving creativity and code to craft seamless digital experiences. Eager to embark on a journey of innovation, learning, and growth. Let's bring ideas to life through elegant and efficient solutions.
             </p>
             <ul className='options-container' data-aos='flip-down'>
                 <li>
                  <a href='https://www.linkedin.com/in/agastin/' target='_blank' className='link' rel="noreferrer"><AiFillLinkedin size={28} /></a>
                 </li>
                 <li>
                 <a href='https://github.com/Agastinmellimi' target='_blank' className='link' rel="noreferrer"><AiFillGithub  size={28}/></a>
                 </li>
             </ul>
             <button type='button' className='btn-grad'>
                <a href='https://drive.google.com/file/d/1Ohv7vnGP243r3TT6Ggz_oWlx_aKm8xEM/view?usp=sharing' download='resume' className='link-resume' target='_blank' rel='noreferrer'>Resume</a>
             </button>
         </div>
         <img src='https://res.cloudinary.com/dkrpgt9kd/image/upload/v1691991079/scxvdny99gqwwm3fmjrx.png' alt='agastin' data-aos='flip-right' className='profile'/>
         </div>
       </div>
      )
}
export default Home

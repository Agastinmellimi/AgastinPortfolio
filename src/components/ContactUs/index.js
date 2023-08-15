
import { useEffect } from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BsPersonCircle, BsTelephoneFill} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'
import AOS from 'aos'

import './index.css'
import 'aos/dist/aos.css';

const ContactUs = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
   }, []);
   return (
        <div className='contact-container'>
            <div className='contact-content'>
            <h1 className='contact-heading' data-aos='flip-down'>Contact Us</h1>
            <p className='details'><BsPersonCircle  size={20} className='icon'/>Agastin Mellimi</p>
            <p className='details'><BiLogoGmail  size={20} className='icon'/>agastinmellimi2001@gmail.com</p>
            <p className='details'><BsTelephoneFill  size={20} className='icon'/>+917569956320</p>
            <ul className='contact-options-container'>
                <li className='contact-option'>
                    <a href='https://www.linkedin.com/in/agastin/' target='_blank' className='link icon-trans' rel="noreferrer"><AiFillLinkedin size={30} /></a>
                </li>
                <li className='contact-option'>
                    <a href='https://github.com/Agastinmellimi' target='_blank' className='link icon-trans' rel="noreferrer"><AiFillGithub  size={30}/></a>
                </li>
                <li className='contact-option'>
                    <a href='https://www.facebook.com/chintu.agastin' target='_blank' className='link icon-trans' rel="noreferrer"><FaFacebook  size={30}/></a>
                </li>
            </ul>
            </div>
        </div>
   )

}
export default ContactUs
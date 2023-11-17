import React from 'react'
import './footer.css'
import logo from '../../assets/CBIT-LOGO.png' 
import {ImFacebook} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'
import {AiOutlineCopyright} from 'react-icons/ai'

const footer = () => {
  return(
    <div className="footer">
        <div className="secContainer container grid">
            <div className="logoDiv">

                <div className="footerLogo">
                    <a href="#" className="logo flex">
                        <img style={{height:70,width:'75%'}} src={logo} alt="CBIT" />
                     </a>
                    <div className="footerLinks">
                     <span className="linkTitle">
                        College Contact Info
                    </span>
                    <span>Gandipet, Hyderabad, Telangana,</span>
                    <span>PIN : 500075</span>
                    <span>Phone: 040-24193276</span>
                    <span>Mobile: 8466997201</span>
                    <span>For Admissions Enquiry: 8466997216</span>
                    <span> Email: principal@cbit.ac.in</span>
                    </div>
                </div>
            </div>

            <div className="footerLinks">
                <span className="linkTitle">
                    Information
                </span>
                <li>
                    <a href="#">Contact Us</a>
                </li>

                <li>
                    <a href="#">Registrations</a>
                </li>

                <li>
                    <a href="#">Placements</a>
                </li>

                <li>
                    <a href="#">Research & Consultancy</a>
                </li>

                <li>
                    <a href="#">Research & Consultancy</a>
                </li>

                <li>
                    <a href="#">Research & Consultancy</a>
                </li>

                <li>
                    <a href="#">Research & Consultancy</a>
                </li>

                <div className="footerLinks">
                <div className="socials flex">
                    <ImFacebook className="icon"/>
                    <BsTwitter className="icon"/>
                    <AiFillInstagram className="icon"/>
                    <FaXTwitter className='icon'/>
                </div>
            </div>
            </div>

            <div className="footerLinks">
                <span className="linkTitle">
                    Helpful Links
                </span>
                <li>
                    <a href="#">Academics</a>
                </li>

                <li>
                    <a href="#">NPTEL</a>
                </li>

                <li>
                    <a href="#">Online Grievance</a>
                </li>

                <li>
                    <a href="#">Blog</a>
                </li>

                <li>
                    <a href="#">Blog</a>
                </li>

                <li>
                    <a href="#">Blog</a>
                </li>

                <li>
                    <p><AiOutlineCopyright/>  2022 - IT | Developed by IT</p>
                </li>
            </div>
        </div>
    </div>
)
}

export default footer


import React from 'react'
import { CiMail } from "react-icons/ci";
import '../../SCSS/Footer.css';

function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

function Footer() {
  return (
    <>
        <div className='footer'>
        <div className="box-container">
            <div className="box" id='bento'>
                <h3>BENTO</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='links'>About Us</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Culture</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Investors</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Careers</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Contact</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Our Benefits</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Sitemap</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Landlords</a>
            </div>

            <div className="box" id='information'>
                <h3>INFORMATION</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Blog</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Support Home</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Documents Required</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Annual Returns</a>
            </div>

            <div className="box" id='policies'>
                <h3>POLICIES</h3>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Shipping Policy</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Cancellation & Return</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Privacy Policy</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Rental Terms & Conditions</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className='links'>Referral Terms & Conditions</a>
            </div>

            <div className="box" id='need_help'>
                <h3>NEED HELP?</h3>
                <a href="mailto:info@yescode.in" className='links' id='mail'>
                <div className="mail_logo"><CiMail/></div>
                <div className="mail_id">info@yescode.in</div>
                </a>
                <div className="download" id='download'>
                    <h4>Download</h4>
                    <div className="images" id='store'>
                    <img src='/images/play-store1.png' alt='' width={200} height={100} />
                    <img src='/images/app-store1.png' alt='' width={178} height={70} />
                    </div>

                </div>
            </div>

        </div>


        <div className="box-container" id='row2'>
                <div className="box" id='copyright'>
                    <p className='copyRight'>&copy; 2024. Yescode.in</p>
                </div>
                <div className="box">
                    <div className="images" id='social_media'>
                        <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><img src="/images/fb.png" alt="" width={50} height={50} /> </a>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"><img src="/images/li.png" alt="" width={50} height={50}/></a>
                        <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer"><img src="/images/twitter.png" alt="" width={50} height={50}/></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src="/images/yt.png" alt="" width={50} height={50}/></a>
                        
                        
                        
                        
                    </div>
                </div>
                <div className="box" id='go_up' onClick={scrollToTop}>
                    <p className='go-up'>Go Up
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                        </svg>
                    </p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Footer
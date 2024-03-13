import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState,useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet';


const Contact=()=>{
    const [letterClass, setLetterClass]=useState('text-animate')
    const [fname,setFname]=useState();
    const [mail,setMail]=useState();
    const [mess,setMess]=useState();

    const refForm=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()

        const formData = {
            from_name:fname,
            email_id: mail,
            message: mess,
          };
        

        emailjs
        .sendForm(
            'service_milg109','template_y0n02cq',refForm.current,'M-1H703RKQnD_zQ8L',formData)
            .then(()=>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },()=>{
                alert('Failed to send message,please try again')
            })
    }
    
     return(
        <>
            <div className="container contact-page">
            <div className="text-zone">
                <h1>
                  <AnimatedLetters letterClass={letterClass}  strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I am interested in freelance oppurtunities - especially ambitious or large Projects.However, if you have other request or question, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half' >
                            <input type="text" name="name" placeholder='Name' onChange={(e)=>setFname(e.target.value)} required/>
                        </li>
                        <li className='half' >
                            <input type="email" name="email" placeholder="Email" onChange={(e)=>setMail(e.target.value)} required/>
                        </li>
                        <li>
                           <input placeholder="Subject" type="text" name="subject"  required />
                        </li>
                        <li>
                            <textarea placeholder="Message"
                            name="message" onChange={(e)=>setMess(e.target.value)} required ></textarea>
                        </li>
                        <li>
                          <input type="submit" className='flat-button'  value= "SEND" />
                        </li>
                    </ul>
                </form>

                </div>
            </div>
            <div className='info-map'>
                Sai Kiran,
                <br/>
                National Institute of Technology Durgapur,
                <br/>
                West Bengal <br/>
                India<br/>
                <span>saikirank103@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                      <Popup>Kiran lives here, come over for a cup of coffee:)</Popup>
                    </Marker>
                </MapContainer>
            </div>
            </div>
            <Loader type="pacman"/>
        </>
     )
}

export default Contact;
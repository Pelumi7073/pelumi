import React,{useState} from 'react'
import './mine.css'
import {BsPersonFill,BsBookHalf,BsFillPencilFill,BsLinkedin,BsSnapchat} from 'react-icons/bs'
import {BiSolidFolderOpen,BiSolidBriefcase,BiMoviePlay,BiSolidPlaneAlt,BiLogoGmail,BiCloudDownload} from 'react-icons/bi'
import {MdContactPhone,MdOutlineSportsSoccer,MdGames} from 'react-icons/md'
import {PiFacebookLogoBold} from 'react-icons/pi'
import {FaMicrophoneAlt,FaTwitter,FaYoutube,FaTiktok} from 'react-icons/fa'
import {LuArrowUpRightFromCircle} from 'react-icons/lu'

const Mysite = () =>{
  const [showHire, setShowHire] = useState(false);

  const toggleDivVisibilty= () =>{
    setShowHire(!showHire);
  }

  const handleFormClick = (e) => {
    // Prevent the click event from propagating to the button
    e.stopPropagation();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };
  
  const handleDownload = () =>{
    const pdfFilePath = 'My_CV.pdf';
  
    const link = document.createElement('a');

    link.href = pdfFilePath;

    link.download = 'My_CV.pdf';

    link.click();
  }

  return(
      <div className='mine'>
          {/* <div className='bg'><span style={{fontSize:'1.5rem'}}><span style={{fontFamily:'Pacifico, cursive'}}>Sirpee</span></span></div> */}
          <div className='upperdiv'>
            <div className='up'>
              <div><img src={require('./images/1665409478212_1.jpg')} id='im1' alt='img'/></div>
              <div className='upperdivside'>
                <div>
                  <div className='name'>Ewebiyi Pelumi</div>
                  <div className='pos'>Web Developer</div>
                </div>
                <div>
                <p style={{textAlign:'justify',marginLeft:'4rem',fontSize:'0.97rem',color:'black'}} id='pp'>
                  Hello there! I'm a passionate web developer with a love for crafting dynamic and user-friendly
                  websites. With a keen eye for design and a strong foundation in coding, I thrive on turning
                  creative ideas into functional digital experiences. My journey in web development has led me
                  to master a variety of programming languages, front-end frameworks, and responsive design
                  techniques. I'm dedicated to staying up-to-date with the latest industry trends and 
                  technologies to ensure that the websites I create are both modern and effective. whether it's
                  building e-commerce platforms or interactive portfolios, I'm excited to bring innovaive 
                  concepts to life through clean and efficient code. let's collaborate and turn your web vision
                  into reality! 
                </p>
                </div>
              </div>
            </div>
           
          </div>
          <div className='lowerdiv'>
              <div id='nn1'>
                <BsPersonFill style={{marginRight:'5px'}}/>
                Profile
              </div>
              <div id='nn2'>
                <BiSolidFolderOpen style={{marginRight:'5px'}}/>
                `<span>Resume</span>
              </div>
              <div id='nn3'>
                <BiSolidBriefcase style={{marginRight:'5px'}}/>
                Projects
                <div className='con2'>
                <b>Spotify(Desktop site)</b><br/> 
                <a href="https://spotify-landing-page-cloned.netlify.app/" target="_blank" rel="noopener noreferrer">https://spotify-landing-page-cloned.netlify.app</a>
                </div>
              </div>
              <div id='nn4'>
                <MdContactPhone style={{marginRight:'5px'}}/>
                Contact
                <div className='con'>
                  <span style={{fontWeight:'bold'}}>Mobile No: </span> +2348132537073<br/><br/>
                  <span style={{fontWeight:'bold'}}> Email:</span> ewebiyipelumi@gmail.com<br/><br/>
                  <span style={{fontWeight:'bold'}}>Twitter:</span> @Sir_passion
                </div>
              </div>
              <div id='nn5'>
                <BsBookHalf style={{marginRight:'5px'}}/>
                Certification
                <div className='con1'>
                  <span style={{fontWeight:'bold'}}>Ceriticate of Participation:</span><br/> 
                  Hacklab Hackathon Nigeria 2022 <br/><br/>
                  <span style={{fontWeight:'bold'}}>Ceriticate of Achievement:</span><br/> 
                  Jobberman Soft-Skills Training 2021 <br/><br/>
                </div>
              </div>
            </div>
            <div className='lowerdiv2'>
              <div className='low1'>
                <span><h4>Hobbies</h4></span>
                <div id='nm'>
                  <div>
                    <MdOutlineSportsSoccer style={{marginRight:'5px',marginTop:'2px'}}/>
                    Football
                  </div>
                  <div>
                    <BiMoviePlay style={{marginRight:'5px',marginTop:'2px'}}/>
                    Movies
                  </div>
                  <div>
                    <FaMicrophoneAlt style={{marginRight:'5px',marginTop:'2px'}}/>
                    Singing
                  </div>
                </div>
                <div id='nm'>
                  <div>
                    <BiSolidPlaneAlt style={{marginRight:'5px',marginTop:'2px'}}/>
                    Travels
                  </div>
                  <div>
                    <MdGames style={{marginRight:'5px',marginTop:'2px'}}/>
                    Games
                  </div>
                  <div>
                    <BsFillPencilFill style={{marginRight:'5px',marginTop:'2px'}}/>
                    Writing
                  </div>
                </div>
                <span><h4>References</h4></span>
              </div>
              <div className='low2'>
                <span><h4>Skills</h4></span>
                <div>
                  <div id='nm'>
                    <div className='nm1'>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>Html</div>
                        <div className='skb'>
                          <div className='nl'>75%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>Javascript</div>
                        <div className='skb'>
                          <div className='nl2'>75%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>React.js</div>
                        <div className='skb'>
                          <div className='nl3'>80%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                    </div>
                    <div className='nm2'>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>Css</div>
                        <div className='skb'>
                          <div className='nl2'>70%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>Express.js</div>
                        <div className='skb'>
                          <div className='nl2'>75%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                      <div className='nm1d'>
                        <div style={{width:'7rem'}}>Teamwork</div>
                        <div className='skb'>
                          <div className='nl4'>90%</div>
                          <div style={{backgroundColor:'black'}}><h3></h3></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='low3'>
                  <div className='low3left'>
                    <div className='hr' onClick={toggleDivVisibilty}>
                      <LuArrowUpRightFromCircle style={{marginRight:'5px',marginTop:'2px'}}/>
                      Hire me
                      {showHire  &&(
                        <div className='frm'>
                            <form className="fancy-form" onSubmit={handleSubmit}  onClick={handleFormClick}>
                            <h2>Welcome, How Can I help You</h2>
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                ></textarea>
                              </div>
                              <button type="submit">Submit</button>
                            </form>  
                      </div>
                      )}
                    </div>
                    <div className='dl' onClick={handleDownload} >
                      <BiCloudDownload style={{marginRight:'5px',marginTop:'2px'}}/>
                      {/* <a href="My_CV.pdf" download >Download CV</a> */}
                      Download CV
                    </div>
                  </div>
                  <div className='icn'>
                    <PiFacebookLogoBold style={{marginRight:'5px',marginTop:'2px',fontSize:'1.2rem',color:'blue'}}/>
                    <FaTwitter style={{marginRight:'5px',marginTop:'2px',color:'blue'}}/>
                    <BsLinkedin style={{marginRight:'5px',marginTop:'2px',color:'blue'}}/>
                    <FaYoutube style={{marginRight:'5px',marginTop:'2px',color:'blue'}}/>
                    <BiLogoGmail style={{marginRight:'5px',marginTop:'2px',color:'blue'}}/>
                    <FaTiktok style={{marginRight:'5px',marginTop:'2px',color:'blue'}}/>
                    {/* <BsSnapchat style={{marginRight:'5px',marginTop:'2px',fontSize:'1.4rem',fontWeight:'bold',padding:'2px',color:'blue'}}/> */}
                  </div>
              </div>
              <div className='low4'>
                <div className='det'>
                  <div className='l4'>
                   <div className='l4q'><span ><span style={{fontWeight:'bold'}}>Nationality: </span>Nigerian</span></div>
                   <div className='l4q'><span ><span style={{fontWeight:'bold'}}>Date of Birth:</span> 25-02-1998</span></div>
                   <div className='l4q'><span ><span style={{fontWeight:'bold'}}>Employment:</span> Freelancer</span></div>
                 </div>
                </div>
                <div className='det'>
                 <div className='l4'>
                   <div className='l4q'><span><span style={{fontWeight:'bold'}}>Experience:</span> 3+ Years</span></div>
                   <div className='l4q'><span><span style={{fontWeight:'bold'}}>Language:</span> English</span></div>
                   <div className='l4q'><span><span style={{fontWeight:'bold'}}>Education:</span> BSc(Physics)</span></div>
                 </div>
                
                </div>
              </div>
              </div>
            </div>
      </div>
  )
}
 export default Mysite
import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import image from './assests/newplot.png'
import SkillBar from './components/Skills';
import pako from 'pako';
import Blocks from './components/blocks';
function App() {
  const educationSectionRef = useRef(null);
  const ProjectsSectionRef = useRef(null);
  const CerificateSectionRef = useRef(null);
  const [email, setEmail] = useState('umamahesh.b@snapperit.com')
  const [validMail, setValidMail] = useState(true)
  const [userData, setUserData] = useState([])
  const reqData = []

  useEffect(() => {
    console.log('in useEffect')
    const handleSubmit = async () => {
      try {
        const data = await fetch(`http://localhost:8000?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'Application/JSON'
          },
        })
        const res = await data.json()
        setUserData(res.data)
        if (res.data === 'User Not Found') {
          alert(res.data)
        }
        else {
          setValidMail(true)
        }
        console.log(res)
      } catch (error) {
        console.log(error)
      }

    }
    handleSubmit()
  }, [])


  const handleLeft = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollBy({ left: -educationSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  const handleRight = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollBy({ left: educationSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  //Projects 
  const handleLeftProjects = () => {
    if (ProjectsSectionRef.current) {
      ProjectsSectionRef.current.scrollBy({ left: -ProjectsSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  const handleRightProjects = () => {
    if (ProjectsSectionRef.current) {
      ProjectsSectionRef.current.scrollBy({ left: ProjectsSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  //Certificates
  const handleLeftCertificate = () => {
    if (CerificateSectionRef.current) {
      CerificateSectionRef.current.scrollBy({ left: -CerificateSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  const handleRightCertificate = () => {
    if (CerificateSectionRef.current) {
      CerificateSectionRef.current.scrollBy({ left: CerificateSectionRef.current.clientWidth / 2, behavior: 'smooth' });
    }
  };

  // Function to decompress a Base64 string using pako
  function decompressBase64(compressedBase64) {
    // Convert Base64 string to binary string
    const compressedBinaryString = atob(compressedBase64);

    // Convert binary string to Uint8Array
    const compressedBinaryData = new Uint8Array(compressedBinaryString.length);
    for (let i = 0; i < compressedBinaryString.length; i++) {
      compressedBinaryData[i] = compressedBinaryString.charCodeAt(i);
    }

    // Decompress the binary data using pako
    const decompressedData = pako.ungzip(compressedBinaryData);

    // Convert decompressed binary data back to a binary string
    const decompressedBinaryString = String.fromCharCode.apply(null, new Uint8Array(decompressedData));

    // Convert the binary string back to Base64
    const decompressedBase64 = btoa(decompressedBinaryString);

    return decompressedBase64;
  }

  return (
    <>
      {
        validMail ?

          <>
            <main className='.mainSection'>
              <header>
                <ul>
                  <li className='active'>About</li>
                  <li><a href='#EducationId'>Education</a></li>
                  <li><a href='#ExperienceId'>Experience</a></li>
                  <li><a href='#ProjectsId'>Projects</a></li>
                  <li><a href='#SkillsId'>Skills</a></li>
                  <li><a href='#CertificatesId'>Certificates</a></li>
                  <li><a href='#ContactId'>Contact</a></li>
                </ul>
              </header>
              <section className='headingSection'>
                <h1 className='head'>About Me</h1>
              </section>
              <section className='aboutSection'>
                <div className='intro'>
                  {/* <h1>{
                    `${userData?.about[0].name} ${userData.about[0].position}`
                  }</h1>
                  <p>{userData?.about[0].description}</p> */}
                  {/* {console.log(userData.about[0].name)}
          {/* <h1>Umamahesh Full Stack Developer</h1> */}
                  {/* <p>USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”d that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”</p>
          <button class="button-63" role="button">Resume</button> */}
                </div>
                <div className='imageSection'>
                  <img src={image} alt='mahesh' />
                </div>
              </section>

              <section className='headingSection' id='EducationId'>
                <h1 className='head'>Education</h1>
                <div>
                  <i class="fa-solid fa-angle-left" onClick={() => handleLeft()}></i>
                  <i class="fa-solid fa-angle-right" onClick={() => handleRight()}></i>
                </div>
              </section>

              <section className='educationSection' ref={educationSectionRef}>
                <div className='graduate'>
                  <h2>G Pulla Reddy Engineering College.</h2>
                  <p>
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                  </p>
                </div>
                <div className='intermediate'>
                  <h2>G Pulla Reddy Engineering College.</h2>
                  <p>
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                  </p>
                </div>
                <div className='scholling'>
                  <h2>G Pulla Reddy Engineering College.</h2>
                  <p>
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                    The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                  </p>
                </div>
              </section>

              <section className='headingSection' id='ExperienceId'>
                <h1 className='head'>Experience</h1>
              </section>

              <section className='experience'>
                <section style={{display:'flex',flexDirection:`${1%2 ? 'row' : 'row-reverse'}`}}>
                  <section className='imgsection'>
                    <img src={image} alt='Photo' />
                  </section>
                  <section className='companyInfo'>
                    <h1>Company Name</h1>
                    <p>SAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety.</p>
                  </section>
                </section>
                <section style={{display:'flex',flexDirection:`${2%2 ? 'row' : 'row-reverse'}`}}>
                  <section className='imgsection'>
                    <img src={image} alt='Photo' />
                  </section>
                  <section className='companyInfo'>
                    <h1>Company Name</h1>
                    <p>SAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
                      “Using Mattermost offers a huge benefit in mission velocity and safety.</p>
                  </section>
                </section>
              </section>

              <section className='headingSection' id='ProjectsId'>
                <h1 className='head'>Projects</h1>
                <div>
                  <i class="fa-solid fa-angle-left" onClick={() => handleLeftProjects()}></i>
                  <i class="fa-solid fa-angle-right" onClick={() => handleRightProjects()}></i>
                </div>
              </section>

              <section className='projects'>
                <section className='educationSection' ref={ProjectsSectionRef}>
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>G Pulla Reddy Engineering College.</h2>
                      <p>
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                      </p>
                    </div>
                  </div>
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>G Pulla Reddy Engineering College.</h2>
                      <p>
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                      </p>
                    </div>
                  </div>
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>G Pulla Reddy Engineering College.</h2>
                      <p>
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                        The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
                      </p>
                    </div>
                  </div>
                </section>
              </section>

              <section className='headingSection' id='SkillsId'>
                <h1 className='head'>Skills</h1>
              </section>
              <section className='skillsSection'>
                {/* {
                  userData.skills?.map((item) => {
                    return (
                      <SkillBar skillName={item.skillName} percentage={item.skillPercentage} />
                    )
                  })
                } */}
                <SkillBar skillName={'HTML'} percentage={70} />
              </section>
              <section className='headingSection' id='CertificatesId'>
                <h1 className='head'>Certificates</h1>
                <div>
                  <i class="fa-solid fa-angle-left" onClick={() => handleLeftCertificate()}></i>
                  <i class="fa-solid fa-angle-right" onClick={() => handleRightCertificate()}></i>
                </div>
              </section>

              <section className='projects'>
                <section className='educationSection' ref={CerificateSectionRef}>
                  {/* {
                    userData?.certificates.map((i, certificate) => {
                      return (
                        <div className='graduate' key={i}>
                          <div className='projectImage'>
                          </div>
                        </div>
                      )
                    })
                  } */}
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>Certicate1.</h2>
                    </div>
                  </div>
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>Certicate2.</h2>
                    </div>
                  </div>
                  <div className='graduate'>
                    <div className='projectImage'>
                      <img src={image} alt='image' />
                    </div>
                    <div className='projectDescription'>
                      <h2>Certicate3.</h2>
                    </div>
                  </div>
                </section>
              </section>
              <section className='headingSection' id='SkillsId'>
                <h1 className='head'>Contact</h1>
              </section>

              <section className='contact' id='ContactId'>
                <section className="contact-main">
                  <section className="section1">
                    <Blocks linkto={"mailto:bandaumamahesh1919@gmail.com"} text={"Email"} icon={<i class="fa-solid fa-envelope"></i>} />
                    <Blocks linkto={"tel:+919392508242"} text={"Phone"} icon={<i class="fa-solid fa-phone"></i>} />
                    <Blocks linkto={"https://www.linkedin.com/in/callasumamahesh/"} text={"Linkedin"} icon={<i class="fa-brands fa-linkedin"></i>} />
                    <Blocks linkto={"https://github.com/callasumamahesh"} text={"Github"} icon={<i class="fa-brands fa-github"></i>} />
                    <Blocks linkto={"https://app.netlify.com/teams/callasumamahesh/sites"} text={"Netlify"} icon={<></>} />
                  </section>
                  <section className="section2">
                    <form action="https://submit-form.com/cezoFOlaz">
                      <input type="text" name="name" placeholder="Please Enter your name" required />
                      <input type="text" name="email" placeholder="Enter your Email / Phone number" required />
                      <textarea name="textarea" placeholder="Description" id="text" cols="30" rows="10" required></textarea>
                      <input type="submit" value="Submit" />
                    </form>
                  </section>
                </section>
              </section>
            </main>
          </>

          : <>
            <input type='text' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <button>Submit </button>
          </>
      }
    </>
  )
}

export default App

import React, { useRef } from 'react'
import './App.css'
function App() {
  const educationSectionRef = useRef(null);

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
  return (
    <main>
      <header>
        <ul>
          <li className='active'>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </header>
      <section className='aboutSection'>
          <div className='intro'>
              <h1>About Me</h1>
              {/* <h1>Umamahesh Full Stack Developer</h1> */}
              <p>USAF improves mission information availability by 4x
              “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
              “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
              “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”d that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”USAF improves mission information availability by 4x
              “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”</p>
              {/* <button class="button-63" role="button">Resume</button> */}
          </div>
          <div className='imageSection'>
              <img src='' alt='mahesh'/>
          </div>
      </section>
        <i className='right-icon' onClick={() => handleRight()}> Right</i>
        <i className='left-icon'  onClick={() => handleLeft()}>Left</i>
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
      
    </main>
  )
}

export default App

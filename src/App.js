import React, { useRef } from 'react'
import './App.css'
// import image1 from './public/newplot.png'
import SkillBar from './components/Skills';
function App() {
  const educationSectionRef = useRef(null);
  const ProjectsSectionRef = useRef(null)
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
  return (
    <main>
      <header>
        <ul>
          <li className='active'>About</li>
          <li><a href='#EducationId'>Education</a></li>
          <li><a href='#ExperienceId'>Experience</a></li>
          <li><a href='#ProjectsId'>Projects</a></li>
          <li><a href='#SkillsId'>Skills</a></li>
          <li><a href='#ContactId'>Contact</a></li>
        </ul>
      </header>
      <section className='headingSection'>
        <h1 className='head'>About Me</h1>
      </section>
      <section className='aboutSection'>
        <div className='intro'>
          {/* <h1>Umamahesh Full Stack Developer</h1> */}
          <p>USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”d that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”We found that also gave us a lot more time to fix cargo and fuel problems before the crew even shows up at the airplane.”</p>
          {/* <button class="button-63" role="button">Resume</button> */}
        </div>
        <div className='imageSection'>
          <img src='' alt='mahesh' />
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
        <section className='imgsection'>
          <img src='../image' alt='Photo' />
        </section>
        <section className='companyInfo'>
          <h1>Company Name</h1>
          <p>SAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. USAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety. We founUSAF improves mission information availability by 4x
            “Using Mattermost offers a huge benefit in mission velocity and safety.</p>
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
            <h2>G Pulla Reddy Engineering College.</h2>
            <p>
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
            </p>
          </div>
          <div className='graduate'>
            <h2>G Pulla Reddy Engineering College.</h2>
            <p>
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
            </p>
          </div>
          <div className='graduate'>
            <h2>G Pulla Reddy Engineering College.</h2>
            <p>
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
              The College is known for its quality initiatives which is amply reflected in accreditations. All the UG courses in the institute are accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with ‘A’ Grade. The college got 150-300 Band by NIRF Innovation Rank-2022 rankings.
            </p>
          </div>
        </section>
      </section>

      <section className='headingSection' id='SkillsId'>
        <h1 className='head'>Skills</h1>
      </section>

      <section className='skillsSection'>
        <SkillBar skillName="JavaScript" percentage={75} />
        <SkillBar skillName="React" percentage={85} />
        <SkillBar skillName="CSS" percentage={90} />
      </section>
      <section className='headingSection' id='SkillsId'>
        <h1 className='head'>Contact</h1>
      </section>

      <section className='contact' id='ContactId'>
        <main className="contact-main">
          <section className="section1">
            <h2>Contact</h2>
            <div>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+919392508242" target="_blank" rel="noreferrer">Phone Number</a>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:bandaumamahesh1919@gmail.com" target="_blank">Email</a>
            </div>
            <div>
              <i class="fa-brands fa-linkedin"></i>
              <a id="linked_in" href="https://www.linkedin.com/in/callasumamahesh/">Linkedin</a>
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/callasumamahesh">Github</a>
            </div>
            <div>
              <a href="https://app.netlify.com/teams/callasumamahesh/sites" target="_blank" rel="noreferrer">Netlify</a>
            </div>
          </section>
          <section className="section2">
            <form action="https://submit-form.com/cezoFOlaz">
              <input type="text" name="name" placeholder="Please Enter your name" required />
              <input type="text" name="email" placeholder="Enter your Email / Phone number" required />
              <textarea name="textarea" placeholder="Description" id="text" cols="30" rows="10" required></textarea>
              <input type="submit" value="Submit" />
            </form>
          </section>
        </main>
      </section>
    </main>
  )
}

export default App

import React from 'react'

const About = () => {
  const linkedin = 'https://www.linkedin.com/in/jonathan-arsola'
  const github = 'https://github.com/arsoljon'
  return (
    <section className="section about-section">
      <h2 className="section-title">About</h2>
      <p>
        I am a recent graduate from UTRGV and have been working at Target for the past 8 years.
        Over these years, I have narrowed down my interest to software
        development, IoT securtiy, and cloud management. My hobbies include
        guitar, golf, and chess. However, I enjoy new things that challenge me.
        I created this site using ReactJS. The code is located in the 'Website'
        repository on my Github.
        <p>Contact information and other links are below.</p>
      </p>

      <div className="work-links">
        <ul>
          <li>
            <h3>email: </h3>
            <a>jdanarsola@gmail.com</a>
          </li>
          <li> </li>
          <li>
            <a href={linkedin}>Linkedin</a>
          </li>
          <li>
            <a href={github}>Github</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About

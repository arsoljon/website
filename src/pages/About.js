import {useState, React} from 'react'
import ClipboardJS from 'clipboard'

const About = () => {
  const linkedin = 'https://www.linkedin.com/in/jonathan-arsola'
  const github = 'https://github.com/arsoljon'
  const copyText = 'jdanarsola@gmail.com'
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const clipboard = new ClipboardJS('.copy-button',{
      text: function() {
        return copyText
      }
    })
    clipboard.on('success', function() {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
      console.log('Email copied!')
    })
  }
  return (
    <section>
      <div className='container'>
        <h2 className="section-title">About</h2>
        <div className="container border my-2">
          <div className="row my-3">
            <p>
              I am a recent graduate from UTRGV and have been working at Target for the past 8 years.
              Over these years, I have narrowed down my interest to software
              development, IoT securtiy, and cloud management. My hobbies include
              guitar, golf, and chess. However, I enjoy new things that challenge me.
              I created this site using ReactJS. The code is located in the 'Website'
              repository on my Github.
            </p>
          </div>
        </div>
      <div className="border container my-5">
        <p>Contact information and other links:</p>
        <div clasName='row'>
          <a className="copy-button" onClick={handleCopyClick}>jdanarsola@gmail.com</a>
          {copied && <div className="popup">Email Copied!</div>}
        </div>
        <div clasName='row'><a href={linkedin}>Linkedin</a></div>
        <div clasName='row'><a href={github}>Github</a></div>
          
      </div>
    </div>
    </section>
  )
}

export default About

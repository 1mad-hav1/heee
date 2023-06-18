import React from 'react';
import './Aboutstyle.css';  
const About=()=> {
    return (
        <div>
          <div className='p2'>
        <h1>Expensify</h1>
    </div>
      <h2 className='p7' >Overview</h2>
      <p className='p2' >This website aims to provide information about Financial services and serve as a platform for users to interact with our AI Expense and Income Tracker.<p></p>Discover the power and convenience of our website, designed to simplify your experience with our brand.</p>
      <p className='p2' >At our website, we strive to deliver a seamless online experience to our users.Feel free to explore the various sections and features of the website to learn more about what we offer.</p>

      <div className="collaborators">
        <h2 className='p7' >Our Collaborators</h2>
        <div className="collaborator">
        <img className='collaboratorimg' src="/Karthi.jpg" alt="Collaborator 1" />
          <p className='p2'>Karthik Dileep</p>
        <div className="collaborator">
          <img className='collaboratorimg' src="/abhi.jpg" alt="Collaborator 1" />
          <p className='p2'>Abhimanyu R</p>
        <div className="collaborator">
        <img className='collaboratorimg' src="/madhu.jpg" alt="Collaborator 1" />
          <p className='p2'>Madhav Vijayan</p>
        </div>
        <div className="collaborator">
        <img className='collaboratorimg' src="/jaisappi.jpg" alt="Collaborator 1" />
          <p className='p2'>Jaisappi Kaliyar</p>
          <div className="collaborator">
        <img className='collaboratorimg' src="/sui.jpg" alt="Collaborator 1" />
          <p className='p2'>Steve Abraham</p>
        </div>
      </div>
    </div>
</div>
</div>
<br />
<p className='p2' >Isn't it Wonderful that something as small as</p>
<p className='p2' >the flutter of a butterfly's wing can ultimately</p>
<p className='p2' >cause a typhoon halfway around the world!</p>
<p className='p2' >-Chaos Thoery</p>
</div>
    );
}
export default About;
      
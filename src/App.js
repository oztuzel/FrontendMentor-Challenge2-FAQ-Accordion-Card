import React, {Fragment} from 'react';
import './index.css';
import boxImg from '/home/oztuzel/Documents/FrontendMentor/faq-accordion-card-main/faq-accordion-card/src/images/illustration-box-desktop.svg';
import womanImg from '/home/oztuzel/Documents/FrontendMentor/faq-accordion-card-main/faq-accordion-card/src/images/illustration-woman-online-desktop.svg';
import Row from './components/Row.js';



function App() {
  return (
    <Fragment>
      
      <div className='wrapper'>
        <div className='text-part'>
          <h1 className='title'> FAQ</h1>
          <div className='quests'> 
            
            <Row  quest={"How many team members can I invite?"} 
                  response={'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'}
            />
            <Row  quest={'What is the maximum file upload size?'}
                  response={'No more than 2GB. All files in your account must fit your allotted storage space.'} 
            />
            <Row  quest={'How do I reset my password?'}
                  response={'Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.'} 
            />
            <Row  quest={'Can I cancel my subscription?'}
                  response={'Yes! Send us a message and we’ll process your request no questions asked.'} 
            />
            <Row  quest={'Do you provide additional support?'}
                  response={'Chat and email support is available 24/7. Phone lines are open during normal business hours.'} 
            />
          </div>  
          <div className='img'>
          <img src={womanImg} alt='womanImg' />
        </div>
        </div>
        
        
          
        <img className='logo' src={boxImg} alt='logo'/>
          
          
        
        </div>

      </Fragment>
  );
}

export default App;

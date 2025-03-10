import './Contact.css'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { useState } from 'react'
const Contact = () => {
  const [formInputData,setFormInputData]=useState({
    userName:"",
    emailId:"",
    message:""
  })

  const onChangeInput=(event)=>{
const {name,value}=event.target
setFormInputData((previous)=>({...previous,[name]:value}))
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "59406f4b-ff1a-4cab-8f53-487f7aff48e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message has been sent Successfully");
      setFormInputData({userName:"", emailId:"",message:""})
    }
  };
  return (
    <section className='a' id='contact'>
      <h1 className="contact">Contact</h1>
      <div className="keep-side-by-side">
      <div className="left-container">
<h1 className='letsTalk-heading'>Lets Talk</h1>
<p className="para">i am ready to accept freelancing Mern full Stack projects as per your requirements
feel to message and contact through email and Call </p>
  <div className='image_container'><img src={call_icon} alt="call" /><h2>Contact: 888 666 9589</h2></div>
 <div className='image_container'><img src={mail_icon} alt="call" /><h2>
  <a className='email-link' href="mailto:katkamvamshisde@gmail.com">katkamvamshisde@gmail.com</a>
</h2>
</div>
 <div className='image_container'><img src={location_icon} alt="call" /><h2>Hyderabad , gachibowli</h2></div>

     </div>
 <form className="right-container" onSubmit={onSubmit}>
  <div  className='input-label-container'>
    <label className='label' htmlFor="username">User Name </label>
    <input className='input' onChange={onChangeInput} value={formInputData.userName} id='username' type="text" name='userName' placeholder='Enter your name'/>
 
    </div>

  <div className='input-label-container'>
    <label htmlFor="email"> Email Id</label>
      <input className='input' onChange={onChangeInput} id='email' type="email" value={formInputData.emailId} name='emailId' placeholder='Enter your email'/>
      </div>

  <div className='input-label-container'>
    <label htmlFor="message"> Message  </label>
  <textarea className='input textarea' value={formInputData.message} onChange={onChangeInput} placeholder='Enter your requirements' name="message" id="message"></textarea>
     </div>
     <button className='form-button' type='submit'>Submit</button>
 </form>

      </div>
    </section>
  )
}

export default Contact

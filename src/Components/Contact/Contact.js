import React from 'react';
import './Contact.css';
import CONTACTPAGE from '../../assets/contactpage.jpg';
import Swal from 'sweetalert2'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "951d458e-2c36-4e65-8308-e18fdd4bde5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contactpage' id="contactSection">
      <div className='contactbox'>
        <div className='aboutcontact'>
          <div className='contactoutside'>
            <div className='card-container'>
              <div className='contactinside'>
                <h2><b>GET IN TOUCH</b></h2>
                <div className='form-container'>
                  <form className='custom-form' onSubmit={onSubmit}>
                    <h2>Contact Us</h2>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="about">Write Message</label>
                      <textarea id="about" name="about" rows="3" placeholder="Write Message..."></textarea>
                    </div>
                    <button type="submit" className="custom-button">Submit</button>
                  </form>
                  {result && <p>{result}</p>} {/* Display form result */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

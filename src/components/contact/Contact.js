import { useEffect, useState } from 'react';
import './contact.css';
import gsap from 'gsap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const endpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const { name } = formData;
        const successMessage = `${name}, your message has been sent successfully!`;
        alert(successMessage);

        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {

        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const [animationsPlayed, setAnimationsPlayed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });


  useEffect(() => {
    if (inView && !animationsPlayed) {
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
      tl.set('.contact-form', { x: '50%', opacity: 0 });
      tl.to('.contact-form', { x: '0%', opacity: 1, duration: 1.2 });
      setAnimationsPlayed(true);
    }
  }, [inView, animationsPlayed]);

  useEffect(() => {
    if (inView && !animationsPlayed) {
      const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
      tl.set('.contact-info', { x: '-50%', opacity: 0 });
      tl.to('.contact-info', { x: '0%', opacity: 1, duration: 1.2 });
      setAnimationsPlayed(true);
    }
  }, [inView, animationsPlayed]);

  return (
    <section ref={ref} className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-info">
          <div className="location">
            <h3 className="location-title title">Main Office</h3>
            <p className="location-info"><span><FaMapMarkerAlt /></span> 123 Street Name, City, Country</p>
            <p className="location-info"><span><FaPhone /></span> +383 123 000</p>
            <p className="location-info"><span><FaEnvelope /></span> info@yen.com</p>
          </div>
          <div className="location">
            <h3 className="location-title title">Branch Office</h3>
            <p className="location-info"><span><FaMapMarkerAlt /></span> 456 Avenue Name, City, Country</p>
            <p className="location-info"><span><FaPhone /></span> +383 122 000</p>
            <p className="location-info"><span><FaEnvelope /></span> branch@yen.com</p>
          </div>
        </div>
        <div className="contact-form">
          <h2 className="form-title title">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="button submit-btn"><FaCheck />&nbsp; Send a Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

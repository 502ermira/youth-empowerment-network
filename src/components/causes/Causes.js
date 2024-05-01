import {useEffect, useState} from 'react';
import './causes.css'; 
import gsap from 'gsap';
import { causes } from '../../constants';
import { useInView } from 'react-intersection-observer';

const Causes = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
    
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.set('.cause-item', { y: '50%', opacity: 0 });

    causes.forEach((_, index) => {
      tl.to(`.cause-item:nth-child(${index + 1})`, { y: '0%', opacity: 1, duration: 1 });
    }); 
  }
}, [inView]);

useEffect(() => {
  if (inView) {
    const tl1 = gsap.timeline({ defaults: { ease: 'power2.easeInOut' } });
    tl1.set(['.title', '.description'], { opacity: 0 , y : '-100%'});
    tl1.to(['.title', '.description'], { opacity: 1, y: '0%', duration: 2 });
  }
}, [inView]);

  const handleButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <section ref={ref} className="causes-section">
      <div className="causes-container">
        <div className="causes-header">
          <h3 className='title'>Youth Empowerment Network's Latest Causes</h3>
          <p className='description'>At Youth Empowerment Network, we're dedicated to various charity causes and projects aimed at empowering young people. Join us in making a difference by learning more about our current initiatives below.</p>
        </div>
        <div className="causes-grid">
          {causes.map((cause, index) => (
            <div key={index} className="cause-item">
              <div className="cause-image">
                <img src={cause.image} alt={`Cause ${index + 1}`} />
                <a href="" onClick={handleButtonClick} className="donate-button button">Donate</a>
              </div>
              <div className="cause-details">
                <h4>{cause.title}</h4>
                <p>
                  <span className="raised-amount">{cause.raisedAmount}</span> of <span className="total-amount">{cause.totalAmount}</span> raised
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Causes;

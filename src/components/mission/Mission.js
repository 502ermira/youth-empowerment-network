import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { animate1, animate2, animate3, animate4, animate6 } from '../../assets';
import { missions } from '../../constants';
import './mission.css'; 
import { useInView } from 'react-intersection-observer';

const MissionCard = ({ title, icon, description }) => {
  return (
    <div className="mission-icon">
      <img className="mission-icon-img" src={icon} alt={title}/>
      <div className="mission-icon-inner"></div>
      <div className='mission-icon-description'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div> 
  );
}


const Mission = () => {

  const animatedImages = [animate1, animate2, animate3, animate4, animate6];
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.set('.image-grid-item', { x: '-100%', opacity: 0 });

    animatedImages.forEach((_, index) => {
      tl.to(`.image-grid-item:nth-child(${index + 1})`, { x: '0%', opacity: 1, duration: 0.9 });
      
    });
  }
}, [inView]);

  useEffect(() => {
    if (inView) {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.set('.mission-icon', { x: '30%', opacity: 0 });

    missions.forEach((_, index) => {
     
      tl.to(`.mission-icon:nth-child(${index + 1})`, { x: '0%', opacity: 1, duration: 1 });
      
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


  return (
    <section ref={ref} id="mission" className="mission-section">
      <div className="mission-container">
        <div className="mission-row">
          <div className="image-container">
            <div className="image-grid">
              {animatedImages.map((animated, index) => (
                <div className="image-grid-item" key={index}>
                  <img src={animated} alt="animated-img"/>
                </div>
              ))}
            </div>
          </div>
          <div className="mission-content">
            <h3 className="mission-title title">Our Mission</h3>
            <p className="mission-description description">Our organization pursues several goals that can be identified as our mission. Learn more about them below.</p>
            <div className="mission-icons">
              {missions.map((mission, index) => (
                <MissionCard key={index} {...mission}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;

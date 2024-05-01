import { useEffect, useState } from 'react';
import './partners.css';
import { fundingPartners } from '../../constants';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const FundingPartners = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.set('.partner-icon', { x: '50%', opacity: 0 });

    fundingPartners.forEach((_, index) => {
      tl.to(`.partner-icon:nth-child(${index + 1})`, { x: '0%', opacity: 1, duration: 0.7 });
   
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

    <section ref={ref} className="funding-partners-section">
      <div className="funding-partners-container">
        <h2 className="title">Our Funding Partners</h2>
        <div className="funding-partners-icons">
          {fundingPartners.map((partner, index) => (
            <img key={index} src={partner} alt={`Partner ${index + 1}`} className="partner-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FundingPartners;

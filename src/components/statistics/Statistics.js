import { useEffect, useState } from 'react';
import './statistics.css';
import { statistics } from '../../constants';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (inView) {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
        tl.set('.statistics-item', { y: '50%', opacity: 0 });
    
        statistics.forEach((_, index) => {
          tl.to(`.statistics-item:nth-child(${index + 1})`, { y: '0%', opacity: 1, duration: 0.85 });
        });
      }
      }, [inView]);

  return (
    <section ref={ref} className="statistics-section">
      <div className="statistics-container">
        {statistics.map((statistic, index)=>(
           <div key={index} className='statistics-item'>
            <h3>{statistic.number}</h3>
            <p>{statistic.title}</p>
           </div> 
        ))}
      </div>
    </section>
  );
}

export default Statistics;

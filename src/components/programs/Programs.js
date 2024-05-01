import { useEffect } from 'react';
import './programs.css';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { programs } from '../../constants';

const Programs = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.easeInOut' } });
      tl.set('.program-card', { x: '-100%', opacity: 0 });

      programs.forEach((_, index) => {
        tl.to(`.program-card:nth-child(${index + 1})`, { x: '0%', opacity: 1, duration: 1.4 }, '-=0.4');
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
    <section ref={ref} id='programs' className="programs-section">
      <div className="programs-container">
        <h2 className="title">Our Programs</h2>
        <p className="description">Explore our range of programs designed to empower youth:</p>
        <div className="program-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <h3 className="program-title">{program.title}</h3>
              {program.options ? (
                <div className="program-options-container">
                  {program.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="program-option">
                      <img src={option.icon} alt="image" /> 
                      <p className="program-description">{option.description}</p>
                      <a href="" className="program-button button" onClick={handleButtonClick}>{option.btnText}</a>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="program-description">{program.description}</p>
                  <a href="#" className="program-button button">{program.btnText}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;

import React, { useState, useEffect } from 'react';
import './events.css';
import { events } from '../../constants';
import { right } from '../../assets';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const EventCalendar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [transitioningLeft, setTransitioningLeft] = useState(false);
  const [transitioningRight, setTransitioningRight] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setStartIndex(0); 
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const filteredEvents = selectedCategory === 'All' ? events :
    events.filter(event => event.categories.includes(selectedCategory));

  const numEvents = filteredEvents.length;
  let displayEventsCount;
  if (window.innerWidth < 677) {
    displayEventsCount = Math.min(filteredEvents.length, 1);
  }
  else if (window.innerWidth < 952) {
    displayEventsCount = Math.min(filteredEvents.length, 2);
  }
  else if (window.innerWidth < 1059) {
    displayEventsCount = Math.min(filteredEvents.length, 3);
  } else if (window.innerWidth < 1235) {
    displayEventsCount = Math.min(filteredEvents.length, 4);
  }
 else {
    displayEventsCount = Math.min(filteredEvents.length, 4); 
  }
  
  const nextSlide = () => {
    setTransitioningLeft(true);
    setTransitioning(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % numEvents);
      setTransitioningLeft(false);
      setTransitioning(false);
    }, 800); 
  };
  
  const prevSlide = () => {
    setTransitioningRight(true);
    setTransitioning(true);

    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 1 + numEvents) % numEvents);
      setTransitioning(false);
      setTransitioningRight(false);
    }, 800); 
  };

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power2.easeInOut' } });
      tl.set(['.title', '.description', '.navigation-buttons', '.category-filter'], { opacity: 0 , y : '-100%'});
      tl.to(['.title', '.description', '.navigation-buttons', '.category-filter'], { opacity: 1, y: '0%', duration: 2 });
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.set('.event-item', { x: '-100%', opacity: 0 });

    events.forEach((_, index) => {
      tl.to(`.event-item:nth-child(${index + 1})`, { x: '0%', opacity: 1, duration: 0.9 });
      
    });
  }
}, [inView]);

const handleButtonClick = (event) => {
  event.preventDefault();
};
 
  return (
    <div ref={ref} id="events" className="event-calendar">
      <h2 className="calendar-title title">Upcoming Events</h2>
      <div className="category-filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          {Array.from(new Set(events.flatMap(event => event.categories))).map((category, index) => (
            <option className="category-filter" key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className={`calendar-events ${transitioning ? 'transitioning' : ''}`}>
      {Array.from({ length: displayEventsCount }, (_, index) => filteredEvents[(startIndex + index) % numEvents]).map((event, index) => (
        <div key={index} className={`event-item 
        ${transitioningLeft ? (index === 0 ? 'slide-out' : index === 3 ? 'slide-in' : index === 2 ? 'slide-in' : index === 1  ? 'slide-in':'') : ''} 
        ${transitioningRight ? (index === 0 ? 'slide-from-right' : index === 3 ? 'slide-from-right' : index === 2 ? 'slide-from-right' : index === 1  ? 'slide-from-right':'') : ''}`}>
            <div className='event-date-container'>
            <div className="event-date">{formatDate(event.date)}</div>
            <a href='' className='register-text' onClick={handleButtonClick}>Register</a>
            </div>
            <div className="event-details">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-location">Location:<span>&nbsp;{event.location}</span></p>
              <p className="event-description">{event.description}</p>
              <div className="event-host-container">
              <span className='event-host-inner'>Host: </span>
              <div>
                <p className="event-host">{event.name}</p>
                <p className="event-host-details">{event.designation} of {event.company}</p>
              </div>
              <img className="event-host-img" src={event.image} alt='user'></img>
            </div>
            </div>
        </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={prevSlide}>
        <img src={right} alt='right-arrow' className='prev-button' />
        </button>
        <button onClick={nextSlide}>
        <img src={right} alt='right-arrow' className='next-button' />
        </button>
      </div>
    </div>
  );
}

export default EventCalendar;

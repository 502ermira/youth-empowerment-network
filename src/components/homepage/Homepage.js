import { useRef, useEffect } from 'react';
import './homepage.css';
import { wallpapers } from '../../constants';
import { TweenMax, Power0 } from 'gsap/all'; 

const Homepage = () => {
  const wallpaperRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const currentWallpaperIndex = useRef(0);

  useEffect(() => {
    const changeWallpaper = () => {
      currentWallpaperIndex.current = (currentWallpaperIndex.current + 1) % wallpapers.length;
      const nextWallpaper = wallpapers[currentWallpaperIndex.current];

      TweenMax.to(wallpaperRef.current, 0.7, { 
        opacity: 0,
        ease: Power0.easeNone,
        onComplete: () => {
          wallpaperRef.current.src = nextWallpaper.image;
          TweenMax.to(wallpaperRef.current, 1, { 
            opacity: 1,
            ease: Power0.easeNone,
          });

          titleRef.current.textContent = nextWallpaper.title;
          descriptionRef.current.textContent = nextWallpaper.description;

          TweenMax.fromTo(titleRef.current, 1, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, ease: Power0.easeNone });
          TweenMax.fromTo(descriptionRef.current, 1, { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, ease: Power0.easeNone, delay: 0.2 });
        },
      });
    };

    const wallpaperInterval = setInterval(changeWallpaper, 6000); 

    return () => {
      clearInterval(wallpaperInterval); 
    };
  }, []);

  return (
    <section id="home" className="homepage-section">
      <div className="homepage-banner">
        <img
          ref={wallpaperRef}
          src={wallpapers[currentWallpaperIndex.current].image}
          alt="image"
          className="homepage-banner-image"
        />
      </div>
      <div className="homepage-content">
        <div className="homepage-container">
          <div className="homepage-row">
            <div className="homepage-column">
              <div className="homepage-text">
                <h1 ref={titleRef} className="homepage-title">{wallpapers[currentWallpaperIndex.current].title}</h1>
                <p ref={descriptionRef} className="homepage-description">{wallpapers[currentWallpaperIndex.current].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

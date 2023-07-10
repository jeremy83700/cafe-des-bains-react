import React, { useEffect, useRef } from 'react';
import './brasserie.css';
import LocomotiveScroll from 'locomotive-scroll';

function BrasserieComponent() {
  const scrollContainerRef = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    scroll.current = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true
    });

    scroll.current.update();

    return () => {
      if (scroll.current) {
        scroll.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="brasserie-container" data-scroll-container>
      <div data-scroll-section>
        <h1 data-scroll data-scroll-speed="2" data-scroll-direction="vertical">Bienvenue</h1>
      </div>
    </div>
  );
}

export default BrasserieComponent;



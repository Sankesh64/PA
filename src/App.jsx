import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header';
import Hero from './components/Hero';
import AdaptiveMarketDemo from './components/AdaptiveMarketDemo';
import VoiceInterviewDemo from './components/VoiceInterviewDemo';
import Footer from './components/Footer';
import './App.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let scroll;
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Header outside of scroll container for native stickiness, or inside with data-scroll-sticky */}
      <div data-scroll-container ref={scrollRef} id="main-scroll-container">
        <div data-scroll-section>
          <Header />
          <main>
            <Hero />
            <AdaptiveMarketDemo />
            <VoiceInterviewDemo />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

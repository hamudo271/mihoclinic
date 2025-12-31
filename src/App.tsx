import { HashRouter, useLocation } from 'react-router-dom';
import { AppRoutes } from './router';
import ScrollToTop from './components/ScrollToTop';
import { useLayoutEffect, useState } from 'react';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useLayoutEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`transition-opacity duration-300 ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      } bg-white`}
      onTransitionEnd={onAnimationEnd}
    >
      <AppRoutes />
    </div>
  );
}

// Actually, a simpler way for "White Fade" (fade out white overlay or fade content)
// "Page fade in/out with white" usually means the page fades to white then new page fades in.
// Or just opacity fade.
// Let's stick to a simple opacity transition first which is standard.
// If user specifically asked for "White", I can ensure the background is white.
// A common simple implementation without Framer Motion is key-based animation.

function ContentWrapper() {
   const location = useLocation();
   return (
      <div key={location.pathname} className="animate-fade-in bg-white min-h-screen">
          <AppRoutes />
      </div>
   )
}


function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ContentWrapper />
    </HashRouter>
  );
}

export default App;

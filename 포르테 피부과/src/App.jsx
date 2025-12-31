import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './pages/Main';
import Doctor from './pages/about/Doctor';
import Come from './pages/about/Come';

// Import CSS
import './assets/css/common.min.css';
import './assets/css/main.min.css';
import './assets/css/sub.min.css';
import './assets/css/header_fix.css';

function App() {
  return (
    <Router>
      <div className="main-body">
        <Header isMain={true} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about/doctor" element={<Doctor />} />
          <Route path="/about/come" element={<Come />} />
        </Routes>
        <div className="quick-menu">
          <a href="/reservation/inquiry" className="inquiry-btn">
            <picture>
              <source media="(min-width: 768px)" srcSet="/images/main/quick_img.svg" />
              <source media="(min-width: 0px)" srcSet="/images/main/quick_img_m.svg" />
              <img src="/images/main/quick_img_m.svg" alt="예약하기" className="img" />
            </picture>
          </a>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


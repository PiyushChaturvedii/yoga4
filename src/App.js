
import './App.css';
import Header from './pages/Header';
import About from './pages/About';
import Features from './pages/Features';
import Retreats from './pages/Retreats';
import Stories from './pages/Stories';
import Booking from './pages/Booking';
import Footer from './pages/Footer';
import WaterMark from 'watermark-component-for-react';

function App() {
  return (
    <div className="App">
      <WaterMark content="Sample">
        
      <Header />
      <About />
      <Features />
      <Retreats />
      <Stories/>
      <Booking />
      <Footer />
      
      </WaterMark>
    </div>
  );
}

export default App;

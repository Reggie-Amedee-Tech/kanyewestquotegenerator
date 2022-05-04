import logo from './logo.svg';
import './App.css';
import LandingPage from './views/LandingPage';
import QuoteSection from './views/QuoteSection'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <LandingPage />
      <QuoteSection />
      </div>
    </div>
  );
}

export default App;

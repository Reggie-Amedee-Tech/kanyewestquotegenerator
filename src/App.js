import logo from './logo.svg';
import './App.css';
import LandingPage from './views/LandingPage';
import QuoteSection from './views/QuoteSection'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Refresh The Page</h1>
      <div className='container'>
      <LandingPage />
      <QuoteSection />
      </div>
    </div>
  );
}

export default App;

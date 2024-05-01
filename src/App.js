import logo from './logo.svg';
import './App.css';
import { Navbar, Homepage, Mission, Causes, Statistics, Programs, Contact, Footer, FundingPartners, EventCalendar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
     <Navbar />
     <Homepage />
     <Mission />
     <Causes />
     <Programs />
     <Statistics />
     <EventCalendar />
     <FundingPartners />
     <Contact />
     <Footer />


     </Router>
  );
}

export default App;

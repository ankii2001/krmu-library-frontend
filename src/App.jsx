import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/HomePages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/HomePages/Overview';
import ContactUs from './components/HomePages/ContactUs';
import LoginHere from './components/HomePages/LoginHere';
import Admin from './components/LoginPages/Admin.login';
import Librarian from './components/LoginPages/Librarian.login'
import Student from './components/LoginPages/Student.login'
import RegisterHere from './components/HomePages/Books/RegisterHere';
import Book1 from './components/HomePages/Books/Book1';
import Book2 from './components/HomePages/Books/Book2';
import Book3 from './components/HomePages/Books/Book3';
import Book4 from './components/HomePages/Books/Book4';
import Book5 from './components/HomePages/Books/Book5';
import Book6 from './components/HomePages/Books/Book6';
import { AnimatePresence} from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTop from './components/ScrollToTop';
function App() {
  return (
    <>
      <Router>
       <GoTop scrollStepInPx="50" delayInMs="30"/>
        <Navbar />
        <AnimatePresence>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Overview' component={Overview} />
          <Route path='/ContactUs' component={ContactUs} />
          <Route path='/LoginAs' component={LoginHere} />
          <Route path='/AdminLogin' component={Admin} />
          <Route path='/LibrarianLogin' component={Librarian} />
          <Route path='/StudentLogin' component={Student} />
          <Route path='/register' component={RegisterHere} />
          <Route path='/YouCanAchieveMore' component={Book1} />
          <Route path='/RichDadPoorDad' component={Book2} />
          <Route path='/SteveJobs' component={Book3} />
          <Route path='/AtomicHabits' component={Book4} />
          <Route path='/TuesdaysWithMorrie' component={Book5} />
          <Route path='/SwamiVikekananda-Meditation' component={Book6} />
        </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
};
export default App;
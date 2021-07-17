import { Component } from 'react';
import './App.scss';

import NavBar from './components/UI/NavBar/NavBar';
import Home from './container/Home/Home';
import Services from './container/Services/Services';
import Projects from './container/Projects/Projects';
import Contact from './container/Contact/Contact';


let lastScrollTop = 0;

class App extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  /* Detetcing scroll for nav bar. */
  handleScroll() {
    const nav = document.querySelector('.nav-bar');
    let st = window.pageYOffset || document.documentElement.scrollTop; 

    if (st > lastScrollTop){
        nav.classList.remove('nav-bar-is-open');
        nav.classList.add('nav-bar-is-closed');
    } else {
      nav.classList.remove('nav-bar-is-closed');
      nav.classList.add('nav-bar-is-open');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;

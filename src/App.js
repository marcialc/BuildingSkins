import './App.css';

import NavBar from './components/UI/NavBar/NavBar';
import Home from './container/Home/Home';
import Services from './container/Services/Services'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;

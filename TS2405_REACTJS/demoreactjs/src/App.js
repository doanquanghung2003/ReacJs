import Button from './components/Button/Button';
import './App.css'
import NavBar from './components/Header/NavBar';
import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <main>
          <Route>
            <Route path='/' Component={Home}></Route>
            <Route path='/about-us' Component={About}></Route>
          </Route>
        </main>
    </div>
  );
}

export default App;
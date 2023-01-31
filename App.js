import Site from './components/stateless/site/Site';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/stateless/navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Site/>
              
        </div> 
        </BrowserRouter>

   );
}

export default App;

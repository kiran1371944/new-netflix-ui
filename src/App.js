import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Register from './components/register/Register';
import Dashboard from './components/dasboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>        
        </Routes>
    </div>
  );
}

export default App;

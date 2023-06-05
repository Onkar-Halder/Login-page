import {Route,Routes} from "react-router-dom";
import './App.css';
import Form from './components/Form';
import Struct from './components/Struct'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/struct" element={<Struct/>}/>
    </Routes>
    </div>
  );
}

export default App;

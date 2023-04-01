import './App.css';
import { useState } from 'react';
import SampleParts from './SampleParts';

function App() {

  const [count] = useState(100);


  return (
    <>
    <SampleParts count={count}/>
    <div className="App">Hello React</div>
    </>
  );
}

export default App;

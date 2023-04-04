import './App.css';
import { useState } from 'react';
import SampleParts from './SampleParts';
import Sample_multiprops from './Sample_multiprops';

function App() {

  const [count] = useState(100);
  const [multiProps] = useState(["first Props", "second Props"]);
  return (
    <>
      <SampleParts count={count} />
      <Sample_multiprops multiProps={multiProps} />
      <div className="App">Hello React</div>
    </>
  );
}

export default App;

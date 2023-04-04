import './App.css';
import { useRef, useState } from 'react';
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

/**
const list = useRef();

const handleClick = () => {
  //テキストボックスの値を取得する
  const inputText = document.getElementById("add-text").value;
  //リストに追加する
  const newTodo = [...todo, inputText];
  setTodoList(newTodo);
}; */

//ボタンを押されたときのハンドラー
//テキストボックスから入力された値を取得して、リストに追加する


export default App;

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import SampleParts from './SampleParts';
import SampleMultiprops from './Sample_multiprops';

function SamplePage_Main() {

	const [count] = useState(100);
	const [multiProps, setTodoList] = useState([{ key: 1, text: "first Props", completed: false }, { key: 2, text: "second Props", completed: true }]);

	const todoTextInput = useRef();

	const navigate = useNavigate();

	const handleClickAddTodoButton = () => {
		console.log(todoTextInput.current.value);
		//テキストボックスから入力された値を取得して、リストに追加する
		setTodoList([...multiProps, { key: multiProps.length + 1, text: todoTextInput.current.value, completed: false }]);
	}

	const taskCompletedToggleHandler = (id) => {
		const newTodoList = [...multiProps];
		const changeTodo = newTodoList.find((todo) => todo.key === id);
		changeTodo.completed = !changeTodo.completed;
		setTodoList(newTodoList);
	}

	const linkTo = () => {
		navigate('/login', { state: { passedText: todoTextInput.current.value } });
	}


	return (
		<div className='main'>
			<input type="text" id="add-text" placeholder="入力してください" ref={todoTextInput} />
			<button onClick={handleClickAddTodoButton}>追加</button>
			<button onClick={linkTo}>リンク</button>
			<SampleParts count={count} />
			<SampleMultiprops multiProps={multiProps} completedToggleHandler={taskCompletedToggleHandler} />
			<button onClick={() => setTodoList(multiProps.filter((todo) => !todo.completed))}>削除</button>
			<p>未完了のタスク数: {multiProps.filter((todo) => !todo.completed).length}</p>
		</div>
	);
}

export default SamplePage_Main;

import React from "react";

const SampleParts = (props) => {
  return (
    <div>
      <h1>Sample Parts</h1>
      <p>受け取った値: {props.count}</p>
    </div>
  );
}

// 受け取った配列データから、以下のUIを生成する コンポーネントを作成してください。
// (チェックボックス) (props で受け取った文字列)  文字列は太字

const TodoComponent = (props) => {

  const taskCompletedToggleHandler = () => {
    props.completedToggleHandler(props.value.key);
  }

  return (
    <div>
      <input type="checkbox" checked={props.value.completed} readOnly
        onChange={taskCompletedToggleHandler} />
      <span style={{ fontWeight: "bold" }}>{props.value.text}</span>
    </div>
  );
};

export default SampleParts;
export { TodoComponent };
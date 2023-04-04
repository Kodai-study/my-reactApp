import React from "react";

const SampleParts = (props) => {
  return (
    <div>
      <h1>Sample Parts</h1>
      <p>受け取った値: {props.count}</p>
    </div>
  );
}

export default SampleParts;
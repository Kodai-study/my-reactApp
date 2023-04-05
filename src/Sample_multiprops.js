import React from 'react'
import SampleParts, { TodoComponent } from './SampleParts'

const Sample_multiprops = (props) => {

    return props.multiProps.map((value) =>
        <>
            <SampleParts count={value.text} key={value.id + 10} />
            <TodoComponent value={value} key={value.id} completedToggleHandler={props.completedToggleHandler} />
        </>);
};

export default Sample_multiprops
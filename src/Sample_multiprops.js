import React from 'react'
import SampleParts, { TodoComponent } from './SampleParts'

const Sample_multiprops = (props) => {
    return props.multiProps.map((value) =>
        <>
            <SampleParts count={value} />
            <TodoComponent value={value} />
        </>);
};


export default Sample_multiprops
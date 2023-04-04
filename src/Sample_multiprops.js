import React from 'react'
import SampleParts from './SampleParts'

const Sample_multiprops = ( props ) => {
    return props.multiProps.map((value) => <SampleParts count={value} />);
};

export default Sample_multiprops
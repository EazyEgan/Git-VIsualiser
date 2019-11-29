import React from 'react';
//import * as d3 from 'd3'
import Plot from 'react-plotly.js';

const Graph = (props) => {
    const repoSize =[];const repoNames=[];
    for(const i = 0; i < props.repo.length; i++){
        repoSize.push(props.repo[i].size);
        repoNames.push(props.repo[i].name);  
    }
console.log(repoSize);console.log(repoNames);
    
  
    

    
return(<div>p</div>)
};
export default Graph;
import Plot from 'react-plotly.js';
import React from 'react';

<Plot data={[
{
y: [forks,watchers],
x : ['Forks', 'Watchers'],
type: 'bar'
}
]}
layout={ {width: 500, height: 400} }
/>

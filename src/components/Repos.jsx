import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Plot from 'react-plotly.js';
import Graph from './Graph.jsx';  
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
const Repos = (props) => {
const elements =[];
if(props.repos){
//const repoNumber = Number(props.infoclean.public_repos); 
//console.log(repoNumber);
//stores repo names in array
var commits= [];
for(const i = 0; i < props.repos.length; i++){
elements.push(props.repos[i].name);
axios.get('https://api.github.com/repos/brianlunch/'+props.repos[i].name+'/commits').then(response =>{
commits.push(response.data.length);//console.log(response.data.length);
}).catch((err) => { console.log(err); });
}

const repoSize =[];const repoNames=[];
    for(const i = 0; i < props.repos.length; i++){
        repoSize.push(props.repos[i].size);
        repoNames.push(props.repos[i].name);  
    }
//stores commit json in commitFile
return (
<div class="slide-in-right">
<div class="row">
   <div class="col-3">
      <h5>Select a repo to analyse</h5>
      <div class="list-group" id="list-tab" role="tablist">
         <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#allrepos" role="tab" aria-controls="home">All repos
         </a>
         {elements.map((value,index) => {
         return(<a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href={"#"+value} role="tab" aria-controls="home">{value}</a>)
         })}
      </div>
   </div>
   <div class="col-md-9 text-left">
      <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show" id="allrepos" role="tabpanel" aria-labelledby="list-homes-list"><h3>All Repos by size</h3><div class="slide-in-right"><div class="row justify-content-left text-dark"><Plot data={[
    {
      values: repoSize,
labels: repoNames,
type: 'pie'
    }
  ]}
  layout={ {width: 700, height: 400} }
/></div></div></div>
         {elements.map((value,index) => {
            const forks =props.repos[index].forks;
            const watchers = props.repos[index].watchers;
         return(
            
         <div class="tab-pane fade show" id={value} role="tabpanel" aria-labelledby="list-homes-list">
            <i></i>
            <div class="row justify-content-left text-dark">
               <h5>{value}<br></br><br></br></h5>
            </div>
            <div class="slide-in-right">
            <div class="row justify-content-left text-dark">
               <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-3 text-left ">Size:</div>
                     <div class="col-md-7 text-left ">{String((Number(props.repos[index].size) * .001).toFixed(3))+" Mb"}</div>
                  </div>
               </div>
             
               
                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-right">Created:</div>
                  {props.repos[index].created_at ? 
         <div class="col-md-8 text-left border-right">{<Moment from={new Date()}>{props.repos[index].created_at}</Moment>}</div>
      : null }
                  </div>
               </div>
            </div>
            <div class="row justify-content-left text-dark">
               <div class="col-md-5 text-left">
                  <div class="row justify-content-left text-dark">
                     <div class="col-md-3 text-left ">Language:</div>
                     <div class="col-md-7 text-left ">{props.repos[index].language}</div>
                  </div>
               </div>
               
               
                  <div class="col-md-4 text-left">
                  <div class="row justify-content-left text-dark">
                  <div class="col-md-4 text-right">Updated:</div>
                  {props.repos[index].created_at ? 
         <div class="col-md-8 text-left border-right">{<Moment from={new Date()}>{props.repos[index].updated_at}</Moment>}</div>
      : null }
                  </div>
               </div>
            </div>
           
            <div class="slide-in-right">
            <div class="row justify-content-left text-dark">
            
            <Plot data={[
    {
    y: [forks,watchers],
   x : ['Forks', 'Watchers'],
type: 'bar'
    }
  ]}
  layout={ {width: 500, height: 400} }
/>

            </div></div>
            <b></b>
         </div></div>
         )
         })}
      </div>
   </div>
</div></div>
)
}else{return null;}
};
export default Repos;
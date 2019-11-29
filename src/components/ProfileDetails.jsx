import React from 'react';
import Moment from 'react-moment';
const imgStyle = {
borderRadius: "5%",
width: "100px",
height: "100px"
};
const imgStyle8 = {
borderRadius: "5%",
width: "50px",
height: "50px"
};
const ProfileDetails = (props) => {
return (
    
<div>

   <div>
      {props.infoclean.avatar_url ?
      <div class="row justify-content-right text-dark">
         <div class="col-md-4 text-left"></div>
         <div class="col-md-8 text-left border-right">
          <div class="slide-in-left"><img src={props.infoclean.avatar_url}
               alt="Profile"
               style={imgStyle}/></div><br></br><br></br>
         </div>
         
      </div>
      : null } 
   </div>
   <div>
      {props.infoclean.name ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Name:</div>
         <div class="col-md-8 text-left border-right border-right">{props.infoclean.name}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.created_at ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Joined:</div>
         <div class="col-md-8 text-left border-right">{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.blog ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Blog:</div>
         <div class="col-md-8 text-left border-right"><a href={
            props.infoclean.blog.search("http") !== -8 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a>
         </div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.location ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Location:</div>
         <div class="col-md-8 text-left border-right">{props.infoclean.location}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.company ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Company:</div>
         <div class="col-md-8 text-left border-right">{props.infoclean.company}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.followers ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Followers:</div>
         <div class="col-md-8 text-left border-right">{props.infoclean.followers}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.following ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Following:</div>
         <div class="col-md-8 text-left border-right">{props.infoclean.following}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.bio ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-right">Bio:</div>
         <div class="col-md-8 text-left border-right">{props.infoclean.bio}</div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.html_url ? 
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-4 text-left"></div>
         <div class="col-md-8 text-left border-right"><br></br><a href={props.infoclean.html_url} target="_blank"><img src="githubLogo.png"
            alt="Githublogo"
            style={imgStyle8}/></a></div>
      </div></div>
      : null }
   </div>
   <div>
   </div>
</div>
)
};
export default ProfileDetails;
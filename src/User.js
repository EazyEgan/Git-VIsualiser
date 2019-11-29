import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import './Collapsible.css';
import './container.css';

const imgStyle = {
borderRadius: "5%",
width: "100px",
height: "100px"
};
const imgStyle8 = {
borderRadius: "5%",
width: "313px",
height: "75px"
};

class User extends Component {

  render(){

    const {user} = this.props
    return(



      <div>



        {user.login ?

          <div id="container">
          <form>
          <a href={user.html_url} target="_blank"><img src ={user.avatar_url}/>
          </a>

          </form>



          <fontStyle2>User Details </fontStyle2>

          {user.name ?
          <div>
            <fontStyle>Name: {user.name}</fontStyle>
          </div>
          :null}

          {user.login ?
          <div>
            <fontStyle>Username: {user.login}</fontStyle>
          </div>
          :null}

          {user.created_at ?

             <div>
             <fontStyle>Joined: {user.created_at}</fontStyle>
          </div>
          : null }

          {user.blog ?
            <div><fontStyle>Blog
        <a href={user.blog.search("http") !== -8 ? user.blog
                : "http://" +  user.blog } target="_blank">{user.blog}</a></fontStyle>
             </div>

          : null }

          {user.location ?
          <div>
          <fontStyle>Location:
    {user.location}</fontStyle>
    </div>

          : null }
          {user.company ?
        <div>
        <fontStyle>Company:
             {user.company}</fontStyle>
          </div>
          : null }

          {user.followers ?
          <div><fontStyle>Followers:
             {user.followers}</fontStyle>
          </div>
          : null }

          {user.following ?
          <div><fontStyle>Following:
             {user.following}</fontStyle>
          </div>
          : null }

          {user.bio ?
          <div><fontStyle>Bio:
             {user.bio}</fontStyle></div>

          : null }
          {user.repos ?
          <div><fontStyle>Repos:
             {user.repos}</fontStyle></div>

          : null }

        </div>

        :null}
        {user.login?
          <div>
          <graph>
          <Plot data={[
          {
          y: [user.followers, user.following],
          x : ['Followers', 'Following'],
          type: 'bar'

          }
          ]}
          layout={ {width: 500, height: 400} }
          />
          </graph>
          </div>
          :null}
      </div>
    )
  }
}
export default User;

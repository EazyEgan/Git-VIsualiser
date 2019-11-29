import React, {Component} from 'react';
import User from './User';

import './App.css';
import './RetroButton.css';
//import './SearchBar.css';
import './container.css';
import './image.css';

class App extends Component {
  state = {
    displayGraph:  false,
    user: {}
  }

  getUser = () => {
    const name = this.refs.name.value;

    fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      //.then(A => { return A.showList; })
      //.then(data =>console.log(data))
      .then(data => {
        this.setState({

          user: {
            name: data.name,
            login: data.login,
            bio: data.bio,
            avatar_url: data.avatar_url,
            created_at: data.created_at,
            blog: data.blog,
            location: data.location,
            company: data.company,
            followers: data.followers,
            following: data.following,
            html_url: data.html_url,
            repos: data.repos
          }
        })
      })


  }
  displayGraph() {
   this.setState({
     displayGraph: !this.state.displayGraph
   })
 }
  render(){
    const {user} = this.state;
    return (

      <div className="App">
      <div><img src="Logoresized.png" alt="Face" />
      </div>
      <div class = "SearchBar">

        <input type="text" placeholder="Search..." ref = "name" />

      </div>
      <div id="intro-content" class="center-content">

        <div class="center-content-inner">

          <div class="content-section content-section-margin">

            <div class="content-section-grid clearfix">

            <a href="#" class="button nav-link" onClick={this.getUser}>

              <div class="bottom"></div>

              <div class="top">

              <div class="label">SEARCH</div>

                <div class="button-border button-border-left"></div>
                <div class="button-border button-border-top"></div>
                <div class="button-border button-border-right"></div>
                <div class="button-border button-border-bottom"></div>

              </div>

              </a>

            </div>

           </div>

          </div>

         </div>












      <div>



        <User user={user}/>

        </div>

        </div>
    );
  }
}



export default App;

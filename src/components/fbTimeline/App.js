import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "./sidenav.js"
import Post from "./Post.js"



class App extends React.Component {


render(){
    return(
  <div>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Home</span>
</nav>
<SideNav />
<Post />

  </div> );
}

}

export default App;
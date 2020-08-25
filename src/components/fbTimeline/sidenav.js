import React from "react";
import PostInput from "./PostInput.js"



class SideNav extends React.Component{


  render(){
    return(
      <div>

<nav class="nav">
  <a class="nav-link active" href="#">
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Privacy</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Copyright 2019</a>
  </li>
 
</ul>
</a>
  <a class="nav-link" href="#"><PostInput/></a>
   </nav>



</div>


    )
}
}


export default SideNav;

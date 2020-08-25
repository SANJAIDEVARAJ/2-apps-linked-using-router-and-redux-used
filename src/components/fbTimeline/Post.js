import React from "react";
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import Cmnt from "./cmnt.js";
import LikeDisLike from "./likedislike.js";



class Post extends React.Component{
  

render(){


        var style1={
            width: "100%",
            border: "2px solid green",
            padding: "50px",
            margin: "20px"


        }
 
return(
<div>
{this.props.posts.map((a,id)=>{ 
  return(  
      <>
<div class="container" style={style1} key={id}>
<p>{a}</p>
<LikeDisLike key={id}/>
<Cmnt key={id}/>
</div>
</>
  )
})

}

</div>

)

}

}

const mapStateToProps = (state) => {
  
  return {
    posts: state.feed,
  };
};



export default connect(mapStateToProps,null)(Post);
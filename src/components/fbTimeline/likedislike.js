import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { faThumbsUp,faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LikeDislike extends React.Component{
    state={like:0,dislike:0}

like=()=>{
    this.setState({
       like:this.state.like+1
        
        })
        }
dislike=()=>{
    this.setState({
       dislike:this.state.dislike+1
        
        })
        }





    render(){
        return(
<p >{this.state.like} <span onClick={this.like}><FontAwesomeIcon icon={faThumbsUp} />
</span>&emsp;{this.state.dislike}<span onClick={this.dislike}><FontAwesomeIcon icon={faThumbsDown} /></span></p>
        )
}
}

export default LikeDislike;
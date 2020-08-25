import React from "react";
import 'bootstrap/dist/css/bootstrap.css';



class Cmnt extends React.Component{
    state={ comments:[],comment:""}

    v=(e)=>{
        this.setState({
        comment : e.target.value
        
        })
        
         }
            comment=()=>{
                this.setState({
                    comments : [...this.state.comments,this.state.comment],
                    comment:""
                    
                    })
        
            }




render(){
    var style = {
        width:"600px",
        height:"80px",
        }
    return(
<div>
<input type="text" style={style}  placeholder="TYPE YOUR COMMENTS HERE" value={this.state.comment} onChange={this.v}/>
<button class="btn btn-success" onClick={this.comment}>Comment</button>
    <p>{this.state.comments.map((b,id)=>{return(<div key={id}>{b}</div>)})}</p>
    </div>
    )
}
}
export default Cmnt;
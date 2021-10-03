import './App.css';
import clip from "./paperclip.svg";
import mic from "./mic.svg";
import smile from "./smile.svg";
import friends from "./friends.svg"
import adduser from "./adduser.svg"
import searchicon from "./searchicon.svg"

import photo1 from "./photo1.jpeg"
import photo2 from "./photo2.jpeg"
import photo3 from "./photo3.jpeg"

function App() {

  function Person (props){
    return(
      <div className="friend_list">
          <img className= "profile_pic" src = {props.photo}/>
          <h2 className = "name">{props.name} </h2>
        </div>
    );
  };
  return (
     <div className="main-body">
     <div className="leftpanel">
       <div className="friendsmenu">
        <div className="friend_title">
          <img className = "friends_logo" src ={friends}/>
          <h2>Friends List</h2>
          <img className = "friends_add_logo" src ={adduser}/>
          <img className = "search_icon" src ={searchicon}/>

        </div>
        <Person name = "John Smith" photo = {photo1} />
        <Person name = "Renae Marshall" photo = {photo2} />
        <Person name = "Luis Diaz" photo = {photo3} />
          
       </div>
     </div>
     
     <div className="rightpanel">
     <div className="friend-profile">
     <img className= "profile_pic" src= {photo1}/>
     <h1 className="title">John Smith</h1>
     </div>
     <div className="txt-msg"></div>
     <div className="msg-bar">
    
     <img className = "smile_img"src = {smile}/>
     <input className="msg-board" type="text" placeholder="Write Message.."/>
     <img className = "clip_img" src = {clip}/>
     <img className = "mic_img"src = {mic}/>
     
     </div>


     </div>
     </div>
  );
}

export default App;

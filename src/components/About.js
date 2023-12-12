import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

function checkBio(bio){
  if(bio && bio != ""){
    return <p>{bio}</p>
  } 
}

export default About;

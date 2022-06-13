import React,{Component} from "react";
import ji from "./audioClips/ji.mp3";
import ni from "./audioClips/ni.mp3";
import tai from "./audioClips/tai.mp3";
import mei from "./audioClips/mei.mp3";
import {Howl, Howler } from "howler"; 

const audioClips = [
  {sound: ji, label:'鸡'},
  {sound: ni, label:'你'},
  {sound: tai, label:'太'},
  {sound: mei, label:'美'},
]


class App extends Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }
  RenderButtonAndSound = () => {
    return audioClips.map((soundObj,index) =>{
      return(
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)} >
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return<div>
      {this.RenderButtonAndSound()}
    </div>;
  }
}

export default App

import React,{Component} from "react";
import ji from "./audioClips/ji.mp3";
import ni from "./audioClips/ni.mp3";
import tai from "./audioClips/tai.mp3";
import mei from "./audioClips/mei.mp3";
import niganma from "./audioClips/niganma1.mp3";
import haha from "./audioClips/haha1.mp3";
import yo from "./audioClips/yo1.mp3";
import {Howl, Howler } from "howler"; 
import { Icon } from '@iconify/react';

const audioClips = [
  {sound: ji, label:'鸡'},
  {sound: ni, label:'||你'},
  {sound: tai, label:'||太'},
  {sound: mei, label:'||美'},
  {sound: niganma, label:'||你干嘛'},
  {sound: haha, label:'||哈哈'},
  {sound: yo, label:' ||哟'},
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
    return<div className="text-5xl w-full h-screen  justify-center">
      {this.RenderButtonAndSound()}
      <img src="http://newsimg.5054399.com/uploads/userup/1906/25162JL016.gif" className="mt-8 w-full"/>
      
    </div>;
  }
}

export default App

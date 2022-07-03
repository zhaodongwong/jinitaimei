import React,{Component} from "react";
import ji from "./audioClips/ji.mp3";
import ni from "./audioClips/ni.mp3";
import tai from "./audioClips/tai.mp3";
import mei from "./audioClips/mei.mp3";
import niganma from "./audioClips/niganma2.mp3";
import haha from "./audioClips/haha2.mp3";
import yo from "./audioClips/yo2.mp3";
import zhengban from "./audioClips/zhengban.mp3";
import nvsheng from "./audioClips/nvsheng.mp3";
import hechengqi from "./audioClips/hechengqi.mp3";
import chanyin from "./audioClips/chanyin.mp3";
import dianyin from "./audioClips/dianyin.mp3";
import guaiwu from "./audioClips/guaiwu.mp3";
import kunkun from "./audioClips/ezgif.com-gif-maker.gif"
import {Howl, Howler } from "howler"; 
import { Icon } from '@iconify/react';

const audioClips = [
  {sound: ji, label:'鸡'},
  {sound: ni, label:'你'},
  {sound: tai, label:'太'},
  {sound: mei, label:'美'},
  {sound: niganma, label:'你干嘛'},
  {sound: haha, label:'哈哈'},
  {sound: yo, label:'哟'},
  {sound: zhengban, label:'正版'},
  {sound: nvsheng, label:'女声'},
  {sound: hechengqi, label:'合成器'},
  {sound: chanyin, label:'颤音'},
  {sound: dianyin, label:'电音'},
  {sound: guaiwu, label:'怪物'},
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
        <div>
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)} >
          {soundObj.label}
        </button>
        </div>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return<div className="text-5xl w-full h-screen  justify-center">
      <img src={kunkun} className="w-full h-screen blur-sm absolute -z-50"/>
      <div className="flex flex-row w-full justify-center bg-red-500 h-20 items-center select-none ">
        <h2 className="text-2xl lg:text-5xl">⚠️</h2>
      <h1 className="text-2xl lg:text-5xl select-none text-white">注意调低音量</h1>
      <h2 className="text-2xl lg:text-5xl">⚠️</h2>
      </div>
      <div className="line w-full border-black"></div>
      <div className="mt-4 p-2 flex gap-3 flex-wrap select-none text-5xl">
        {this.RenderButtonAndSound()}
      
      </div>
    </div>;
  }
}

export default App

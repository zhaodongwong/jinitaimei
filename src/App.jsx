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
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)} >
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0)
    return<div className="text-5xl w-full h-screen  justify-center">
      <div className="flex flex-row">
      <div className="mt-1 flex flex-row">
      <Icon icon="twemoji:chicken" width="26" height="26"/>
      <Icon icon="bi:arrow-down"  width="26" height="26"/>
      </div>
      <h1 className="text-2xl">点击以下按键开始模拟</h1>
      <div className="mt-1 flex flex-row">
      <Icon icon="bi:arrow-down"  width="26" height="26"/>
      <Icon icon="emojione-v1:basketball" width="26" height="26"/>
      </div>
      </div>
      <div className='line mt-4 border-black'>
      </div>
      <div className="mt-4">
      {this.RenderButtonAndSound()}
      </div>
      <img src="http://newsimg.5054399.com/uploads/userup/1906/25162JL016.gif" className="mt-8 w-full lg:w-1/2"/>
      
    </div>;
  }
}

export default App

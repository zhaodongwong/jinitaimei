import React,{Component} from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
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
import yijianquanbo from "./audioClips/yijianquanbo.mp3";
import kunkun from "./audioClips/ezgif.com-gif-maker.gif";
import kunkunkun from "./audioClips/kunkunkun.gif";
import {Howl, Howler } from "howler";
import 'animate.css'; 
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
  {sound: yijianquanbo, label:'一键全播'},
]

function Navbar(){
  const location = useLocation();
  return(
    <nav>
      <ul className="flex gap-36 text-3xl lg:gap-48 lg:text-5xl ">
        {[
          ["/","Light"],
          ["dark","Dark"],
        ].map(([path,label]) => (
          <li className="w-full flex justify-center ">
            <Link to={path} className="bg-white px-7 py-4 rounded-lg font-['Roboto'] bottom-0 absolute lg:px-9 lg:py-6">
              {label}
              {path === location.pathname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Layout(){
  return<>
  <div className="flex flex-row w-full justify-center bg-red-500 h-10 lg:h-20 items-center select-none ">
        <h2 className="text-2xl lg:text-5xl">⚠️</h2>
      <h1 className="text-2xl lg:text-5xl select-none text-white">注意调低音量</h1>
      <h2 className="text-2xl lg:text-5xl">⚠️</h2>
      </div>
  <div className="select-none">
    <Navbar/>
      </div>
    <Outlet/>
    </>
}


class Light extends Component {
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
    return<div className="w-full h-screen  justify-center">
      <img src={kunkun} className="w-full h-screen blur-sm absolute -z-50 select-none"/>
      <div className="mt-4 p-2 flex gap-3 flex-wrap select-none text-3xl light lg:text-5xl">
        {this.RenderButtonAndSound()}
      
      </div>
    </div>;
  }
}

class Dark extends Component {
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
    return<div className="w-full h-screen justify-center">
      <img src={kunkunkun} className="w-full h-screen blur-sm absolute -z-50 select-none"/>
      <div className="mt-4 p-2 dark flex gap-3 flex-wrap select-none text-3xl lg:text-5xl">
        {this.RenderButtonAndSound()}
      
      </div>
    </div>;
  }
}

function App(){
  return (
    <div className="App w-full min-h-screen flex flex-col items-center text-3xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Light/>}/>
            <Route path="dark" element={<Dark/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App

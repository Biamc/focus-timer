import Controls from "./controls.js";
import Timer from "./timer.js"
import Sounds from "./sounds.js";
import {
  buttonPause,
  buttonPlay,
  buttonSet, 
  buttonStop, 
  buttonSoundOn,
  buttonSoundOff
 } from "./settings.js";




export default function Events ({controls, timer, sounds}){
  buttonPlay.addEventListener('click', function (){
    controls.playOrPause()
    timer.countDown()
    sounds.pressButton()
  })

   buttonPause.addEventListener('click', function (){
    controls.playOrPause()
    timer.hold()
    sounds.pressButton ()
  })
  
  buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sounds.pressButton ()
  })
  
  buttonSet.addEventListener('click', function (){
    let newMinutes = controls.getMinutes()
    
    if (!newMinutes) {
      timer.reset()
      return
    }
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  
  buttonSoundOn.addEventListener('click', function (){
    controls.sound()
    sounds.bgAudio.play()
  })

  buttonSoundOff.addEventListener('click', function (){
    controls.sound()
    sounds.bgAudio.pause()
  })

}


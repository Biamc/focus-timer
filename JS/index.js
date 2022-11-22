import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from "./sounds.js";
import Events from "./events.js";

import { buttonPause,
  buttonPlay,
  buttonSet, 
  buttonStop, 
  buttonSoundOn,
  buttonSoundOff, 
  minutesDisplay, 
  secondsDisplay
} from "./settings.js"





const controls = Controls({
  buttonPlay, 
  buttonPause, 
  buttonStop, 
  buttonSet, 
  buttonSoundOn, 
  buttonSoundOff
})
const timer = Timer({
  minutesDisplay, 
  secondsDisplay,  
  resetControls: controls.reset
})

const sounds = Sounds()

Events({controls, timer, sounds})

/*
const timer = Timer(

), inside the Timer(), i will inject all the dependences that is shoed for me, in other words 
*/

//event-driven : progamation directed by events





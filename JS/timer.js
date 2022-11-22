import Sounds from "./sounds.js";


//function factoryis a function that will return an object, everything will be organized the way i want.


// function factory
// this export means the same of export {Time}
export default function Timer ({
  minutesDisplay, 
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function updateMinutes(newMinutes){
    minutes = newMinutes
  }
  
  
  function reset (){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
    
      updateDisplay(minutes, 0)
    
      if ( minutes <= 0  && seconds <= 0) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
    
      if (seconds <= 0) {
        seconds = 3
        --minutes
        //-- is a decrement operator, so everytime it will decrement -1 until the condition of the programator happen
        //++ is a increment operator, o everytime it will increment -1 until the condition of the programator happen
      }
    
      updateDisplay(minutes, String(seconds-1))
    
      countDown()
    }, 1000)
  }

  function hold () {
    clearTimeout(timerTimeOut)
  }

  return {
    countDown,
    reset, 
    updateDisplay, 
    updateMinutes, 
    hold
  }
  // using shorthant, if you have a property that its valueis the same nameof the property, its enougth write just one time cause the js will understand thet the property has the value of a function, the same way its not necessary tocreate a the object, once it will only be use to return something, so its enougth write like that return {}

  //it can be written like this 
  /*
  let output = {
    countDown: countDow
  }

  return output
  */

}




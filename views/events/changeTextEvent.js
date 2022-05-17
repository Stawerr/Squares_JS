import { countEvent } from "./countEvent.js"

const changeTextEvent=function(e, cleanText=false){
    const h2Element=document.querySelector('#changeText')
    const inputValue = e.target.value

    h2Element.textContent=(inputValue)? inputValue:'Use events to change me'
    countEvent();
    // if(h2Element)
    //     inputValue.textContent=inputValue
    // else
    //     inputValue.textContent='Use events to change me'
}
export{changeTextEvent}
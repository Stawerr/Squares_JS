import { countEvent } from "./countEvent.js"

const cleanReset=function(e){
    const [input]= e.target.closest('div').childNodes;
    input.value='';
    const h2Elem=document.querySelector('#changeText')
    h2Elem.textContent='Use events to change me'
    countEvent();
}
export {cleanReset}
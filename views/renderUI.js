import { numberEvents } from "./components/numberEvents.js";
import { firstRow } from "./components/firstRow.js";
import { textChange } from "./components/textChange.js";
import { divSquareAll } from "./components/divSquareAll.js";

const renderUI = function(){
    //console.log("render")
    const divMain=document.querySelector('#main');
    divMain.append(numberEvents(),firstRow(),textChange(),divSquareAll());
}
export {renderUI}
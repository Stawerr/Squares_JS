import { h2 } from "./widgets/h2.js"

const textChange=function(){
    const h2Element = h2('Use events to change me')
    h2Element.id="changeText"
    return h2Element
}

export {textChange};
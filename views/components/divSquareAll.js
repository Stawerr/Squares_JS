import { divSquare } from "./divSquare.js"

const divSquareAll=function(text,color){
    const divSquareAll=document.createElement('div')
    divSquareAll.id='squares'
    divSquareAll.classList.add('flex','space-ar','w-100')
    divSquareAll.append(divSquare('A','red'),divSquare('B','green'),divSquare('C','blue'))
    return divSquareAll
}

export{divSquareAll}
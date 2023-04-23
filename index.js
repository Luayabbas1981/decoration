const divsArray =  Array.from(document.querySelectorAll(".frame > .odd ,.even"))
const oddDivs = Array.from(document.querySelectorAll(".odd"))
const evenDivs = Array.from(document.querySelectorAll(".even"))
const frame = document.querySelector(".frame")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const controls = document.querySelector(".controls")
const upArrow = document.querySelector("#up-arrow")
const controlsInfos = document.querySelector(".controls-infos")
const magnifyingPlus = document.querySelector("#magnifying-plus")
const magnifyingMinus = document.querySelector("#magnifying-minus")
const infosSymbol = document.querySelector("#infos-symbol")
const infosContainer = document.querySelector(".infos-container")
const tenBtn = document.querySelector(".ten")
const twentyBtn = document.querySelector(".twenty")
const madsContainer = document.querySelector(".mads-container")
const randomBtn1 = document.querySelector(".r1")
const randomBtn2 = document.querySelector(".r2")
const madBtn = document.querySelector(".mad1")
const endMadBtn = document.querySelector(".stop-mad1")
const madBtn2 = document.querySelector(".mad2")
console.log(madBtn,endMadBtn)
const endMadBtn2 = document.querySelector(".stop-mad2")
const invert = document.querySelector(".invert")

/* Initial values */
window.onload= ( function(){
    window.scrollTo(0,0)
})()
evenDivs.map(item=> item.classList.add("even-animi"))
tenBtn.style="color:#0079b3"
randomBtn2.classList.add("r-id")
controlsInfos.textContent="3rd mode on"

/* Colors buttons functions */
function oddColor (color){
   
    randomBtn2.classList.remove("r2-c")
   divsArray.map((item,i)=>{
       return i % 2 === 0? "":item.setAttribute("id",`${color}`)
   })

color1.textContent=color.toUpperCase()
color1.style=`background-color:${color}`
if(interval){
   randomBtn2.classList.add("r-id")
   clearInterval(interval)
}
}

function evenColor (color){
randomBtn2.classList.remove("r2-c")
divsArray.map((item,i)=>{
   return i % 2 === 0? item.setAttribute("id",`${color}`):""
})

color2.textContent=color.toUpperCase()
color2.style=`background-color:${color}`

if(interval){
randomBtn2.classList.add("r-id")
clearInterval(interval)
}
}

/* 3rd buttons function */
function thirdColor(){
    color3.classList.toggle("color3")
   evenDivs.map((item)=>{  
       return item.classList.toggle("even-animi")
   })
   }


/* Number of leaves functions */
function setFirstMove (){
    tenBtn.style="color:#0079b3"
    twentyBtn.style="color:#6e6c6c"
         for(i=0;i<=divsArray.length;++i){ 
            divsArray[i].style=`--d:${i}`   
        }  
    }

function setSecondMove (){
    twentyBtn.style="color:#0079b3"
    tenBtn.style="color:#6e6c6c"
    if((divsArray[0].style="--d:1")){
        let x= 0
        for(i=0;i<divsArray.length;++i){ 
            x+= .5
            divsArray[i].style=`--d:${x}`  
        } 
    } 
}

/* Random 1 and 2 buttons */
console.log(divsArray)
let firstColorArray= [ "cyan","lightblue","wevenDivste","coral","lightsalmon","orcevenDivsd","lime","aquamarine","lawngreen","turquoise","yellowgreen","chartreuse","wevenDivste","tomato","yellow","red","wevenDivste","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","wevenDivste","hotpink","white","white","white","white","white","white","white","white"]

let secondColorArray= ["yellow","red","wevenDivste","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","wevenDivste","hotpink","white","white","white","white"]

    function randomColorOne (){
       
        color1.style="background-color:black"
        color2.style="background-color:black"
        randomBtn2.classList.remove("r2-c")
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
        evenDivs.map((item)=>{  
            return item.classList.remove("even-animi")
        }) 

        let x = Math.floor(Math.random()* firstColorArray.length ) 
        let y = Math.floor(Math.random()* secondColorArray.length ) 
        divsArray.map((item,i)=>{
            return i % 2 === 0? item.setAttribute("id",`${firstColorArray[x]}`):""
        })
        divsArray.map((item,i)=>{
            return i % 2 === 0? "": item.setAttribute("id",`${secondColorArray[y]}`)
        })
        if(interval){
            randomBtn2.classList.add("r-id")

            clearInterval(interval)
        }
    }

    let interval
    function randomColorTwo (){
        
        randomBtn2.classList.toggle("r2-c")
        color1.style="background-color:black"
        color2.style="background-color:black"
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
    evenDivs.map((item)=>{  
        return item.classList.remove("even-animi")
    }) 

    if(randomBtn2.classList.contains("r-id")){
        randomBtn2.classList.remove("r-id")
        interval =
        setInterval(()=>{
            let x = Math.floor(Math.random()* firstColorArray.length ) 
            let y = Math.floor(Math.random()* secondColorArray.length ) 
            divsArray.map((item,i)=>{
                return i % 2 === 0?"": item.setAttribute("id",`${firstColorArray[x]}`)
            })
            divsArray.map((item,i)=>{
                return i % 2 === 0?  item.setAttribute("id",`${secondColorArray[y]}`):""
            })
            
        },5000)
    }else{
        clearInterval(interval)
        randomBtn2.classList.add("r-id")
    }
       
    }

    /* show / hide controls buttons functions */
 function fullScreen(){
   if( color3.classList.contains("color3")&&  !frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent="3rd color mode on"
    controlsInfos.style="color:#00ffe0"
   } if(randomBtn2.classList.contains("r2-c")&&  !frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent="Random2 mode on"
    controlsInfos.style="color:#03def4"
   }
   if(color3.classList.contains("color3") && randomBtn2.classList.contains("r2-c")
   &&  !frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent= "Random2/3rd modes on"
    controlsInfos.style="color:#ff1100"
   }
   
    frame.classList.add("frame-center")
     controls.classList.add("f-screen")
     magnifyingPlus.classList.remove("f-screen")
     magnifyingMinus.classList.remove("f-screen")
     upArrow.classList.remove("f-screen")
 } 
 
 function showControls (){
    controlsInfos.textContent=""
    frame.classList.remove("frame-magnifying")
    controls.classList.remove("f-screen")
    upArrow.classList.add("f-screen")
    magnifyingPlus.classList.add("f-screen")
    magnifyingMinus.classList.add("f-screen")
    frame.classList.remove("frame-center")
 }

 
 /* Info bar functions */
 function showInfos (){
    infosSymbol.classList.remove(".infos-symbol2")
    if(!infosContainer.classList.contains("show-infos")){

        infosContainer.classList.add("show-infos")
        infosContainer.classList.remove("hide-infos")
    } else{
        infosContainer.classList.remove("show-infos")
        infosContainer.classList.add("hide-infos")
    }
   
 }
 function infosSymbolAlert (){
    if(infosContainer.classList.contains("show-infos")){

        infosSymbol.classList.remove("infos-symbol")
        setTimeout(() => {
            
            infosSymbol.classList.add("infos-symbol")
        }, 1);
    }
 }
 
 /* Magnifying function */
 function glass(){
    frame.classList.toggle("frame-magnifying")
    magnifyingPlus.classList.toggle("f-screen")
  
 }/* Mads-container function */

 function showMadsContainer (){
    madsContainer.classList.toggle("show-mads-container")
 }
 
/*  Mad mode function */
    let secondInterval 
function madMode1 (){ 
    color3.disabled=true
    color3.textContent="Disable"
    madsContainer.classList.remove("show-mads-container")
    fullScreen()
    if(frame.classList.contains("frame-center")){
        controlsInfos.textContent= "Mad1 mode on"
        controlsInfos.style="color:#dbff00"
    }
        randomColorTwo()  
        setSecondMove ()
        evenDivs.map(item=> item.classList.add("even2"))
        oddDivs.map(item=> item.classList.add("odd2"))
        frame.classList.add("frame-mad-mode")
        randomBtn1.disabled=true
        randomBtn2.disabled=true
        randomBtn1.textContent="Disable"
        randomBtn2.textContent="Disable"
        madBtn.disabled = true;
        madBtn2.disabled = true;
        tenBtn.disabled = true;
        tenBtn.textContent="Disable"
        endMadBtn.style="z-index:1 ; color:#e21e1e"
        color3.classList.toggle("color3")
        secondInterval= setInterval(() => {
            frame.classList.toggle("mad-filter")
           
        }, 1500);

}

function madMode2 (){
    madMode1()
    if(frame.classList.contains("frame-center")){
        controlsInfos.textContent= "Mad2 mode on"
        controlsInfos.style="color:#89dc39"
    }
    madsContainer.classList.remove("show-mads-container")
    clearInterval(secondInterval)
    endMadBtn.style="z-index:-1 ; color:black"
    endMadBtn2.style="z-index:1 ; color:#e21e1e"
    thirdInterval= setInterval(() => {   
        colorfulRose ()
    }, 1500);
   
    
}
function stopMadMode (){
    resetApp()
}
/* Colorful Rose  */
   
function colorfulRose (){
    
    oddDivs.map((item)=>{
        let x = Math.floor(Math.random()* firstColorArray.length ) 
        item.setAttribute("id",`${firstColorArray[x]}`)
    }).reverse()
    evenDivs.map((item)=>{
        let x = Math.floor(Math.random()* firstColorArray.length ) 
        item.setAttribute("id",`${firstColorArray[x]}`)
    })
}

/* Invert color function */
function invertMode (){
    madsContainer.classList.remove("show-mads-container")
    if( frame.classList.contains("mad-filter")){
        clearInterval(secondInterval)
        clearInterval(thirdInterval)
        frame.classList.toggle("filter")
        invert.classList.toggle("invert-color")
    }else{

        frame.classList.toggle("filter")
        invert.classList.toggle("invert-color")
    }
}
/* Reset button function */
function resetApp(){
    location.reload()
   
}
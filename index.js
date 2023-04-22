const divsArray =  Array.from(document.querySelectorAll(".frame > .odd ,.even"))
const oddDivs = Array.from(document.querySelectorAll(".even"))
const evenDivs = Array.from(document.querySelectorAll(".odd"))
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
const randomBtn = document.querySelector(".r2")
const madBtn = document.querySelector(".mad")
const endMadBtn = document.querySelector(".stop-mad")
const endMadBtn2 = document.querySelector(".stop-mad2")
const invert = document.querySelector(".invert")

/* Initial values */
oddDivs.map(item=> item.classList.add("even-animi"))
tenBtn.style="color:#0079b3"
randomBtn.classList.add("r-id")
controlsInfos.textContent="3rd mode on"

/* Colors buttons functions */
function oddColor (color){
   
    randomBtn.classList.remove("r2-c")
   divsArray.map((item,i)=>{
       return i % 2 === 0? "":item.setAttribute("id",`${color}`)
   })

color1.textContent=color.toUpperCase()
color1.style=`background-color:${color}`
if(interval){
   randomBtn.classList.add("r-id")
   clearInterval(interval)
}
}

function evenColor (color){
randomBtn.classList.remove("r2-c")
divsArray.map((item,i)=>{
   return i % 2 === 0? item.setAttribute("id",`${color}`):""
})

color2.textContent=color.toUpperCase()
color2.style=`background-color:${color}`

if(interval){
randomBtn.classList.add("r-id")
clearInterval(interval)
}
}

/* 3rd buttons function */
function thirdColor(){
    color3.classList.toggle("color3")
   oddDivs.map((item)=>{  
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
let firstColorArray= [ "cyan","lightblue","white","coral","lightsalmon","orchid","lime","aquamarine","lawngreen","turquoise","yellowgreen","chartreuse","white","tomato","yellow","red","white","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","white","hotpink"]

let secondColorArray= ["yellow","red","white","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","white","hotpink"]

    function randomColorOne (){
       
        color1.style="background-color:black"
        color2.style="background-color:black"
        randomBtn.classList.remove("r2-c")
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
        oddDivs.map((item)=>{  
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
            randomBtn.classList.add("r-id")

            clearInterval(interval)
        }
    }

    let interval
    function randomColorTwo (){
        
        randomBtn.classList.toggle("r2-c")
        color1.style="background-color:black"
        color2.style="background-color:black"
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
    oddDivs.map((item)=>{  
        return item.classList.remove("even-animi")
    }) 

    if(randomBtn.classList.contains("r-id")){
        randomBtn.classList.remove("r-id")
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
        randomBtn.classList.add("r-id")
    }
       
    }

    /* show / hide controls buttons functions */
 function fullScreen(){
   if( color3.classList.contains("color3")){
    controlsInfos.textContent="3rd color mode on"
    controlsInfos.style="color:gold"
   } if(randomBtn.classList.contains("r2-c")){
    controlsInfos.textContent="Random2 mode on"
    controlsInfos.style="color:#2196f3"
   }
   if(color3.classList.contains("color3") && randomBtn.classList.contains("r2-c")){
    controlsInfos.textContent= "Random2 / 3rd modes on"
    controlsInfos.style="color:#f44336"
   }
   if(color3.classList.contains("color3") && randomBtn.classList.contains("r2-c") && oddDivs[0].classList.contains("even2")){
    controlsInfos.textContent= "Mad mode on"
    controlsInfos.style="color:#ff9800"
}
if( randomBtn.classList.contains("r2-c") && oddDivs[0].classList.contains("even2")){
    controlsInfos.textContent= "Mad mode on"
    controlsInfos.style="color:#ff9800"
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
  
 }

 /* Reset button function */
function resetApp(){
    location.reload()
   
}
/*  Mad mode function */
    let secondInterval 
function madMode (){ 
    
    fullScreen()
    if(frame.classList.contains("frame-center")){
        controlsInfos.textContent= "Mad mode on"
        controlsInfos.style="color:#ff9800"
    }
        randomColorTwo() 
        setSecondMove ()
        oddDivs.map(item=> item.classList.add("even2"))
        evenDivs.map(item=> item.classList.add("odd2"))
        frame.classList.add("frame-mad-mode")
        madBtn.disabled = true;
        tenBtn.disabled = true;
        tenBtn.textContent="Disable"
        endMadBtn.style="z-index:1 ; color:#e21e1e"
        color3.classList.toggle("color3")
        secondInterval= setInterval(() => {
            frame.classList.toggle("mad-filter")
           
        }, 1500);

}

function mad2Mode (){
    madMode()
    if(frame.classList.contains("frame-center")){
        controlsInfos.textContent= "Mad2 mode on"
        controlsInfos.style="color:#ff9800"
    }
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
    for(i=0; i<=firstColorArray.length;i++){
        let x = Math.floor(Math.random()* firstColorArray.length ) 
        oddDivs[i].setAttribute("id",`${firstColorArray[x]}`)
        evenDivs.reverse()[i].setAttribute("id",`${firstColorArray[x]}`)
        console.log(i,x)
       
    }
}

/* Invert color function */
function invertMode (){
    if( frame.classList.contains("mad-filter")){
        clearInterval(secondInterval)
        frame.classList.toggle("filter")
        invert.classList.toggle("invert-color")
    }else{

        frame.classList.toggle("filter")
        invert.classList.toggle("invert-color")
    }
}
const divsArray =  Array.from(document.querySelectorAll(".frame > .odd ,.even"))
const oddDivs = Array.from(document.querySelectorAll(".odd"))
const evenDivs = Array.from(document.querySelectorAll(".even"))
const frame = document.querySelector(".frame")
const controls = document.querySelector(".controls")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const colorOneValue = document.querySelector(".color1-value")
const colorTwoValue = document.querySelector(".color2-value")
const inputContainerOne = document.querySelector(".fc")
const inputContainerTwo = document.querySelector(".sc")
const inputColorOne = document.querySelector(".input-one")
const inputColorTwo = document.querySelector(".input-two")
const tenBtn = document.querySelector(".ten")
const twentyBtn = document.querySelector(".twenty")
const randomBtn1 = document.querySelector(".r1")
const randomBtn2 = document.querySelector(".r2")
const upArrow = document.querySelector("#up-arrow")
const controlsInfos = document.querySelector(".controls-infos")
const addControlsInfos = document.querySelector(".add-infos")
const addControlsInfosTwo = document.querySelector(".add-infos2")
const magnifyingPlus = document.querySelector("#magnifying-plus")
const magnifyingMinus = document.querySelector("#magnifying-minus")
const infosSymbol = document.querySelector("#infos-symbol")
const infosContainer = document.querySelector(".infos-container")
const madSecArrow = document.querySelector(".mads-arrow >i")
const madsContainer = document.querySelector(".mads-container")
const firstFormBtn = document.querySelector(".form1")
const secondFormBtn = document.querySelector(".form2")
const madBtn = document.querySelector(".mad1")
const endMadBtn = document.querySelector(".stop-mad1")
const madBtn2 = document.querySelector(".mad2")
const endMadBtn2 = document.querySelector(".stop-mad2")
const invert = document.querySelector(".invert")
const attention = document.querySelector(".attention")
/* Project variables */

const firstForm = "30% 70% 70% 30% / 30% 30% 70% 70%"
const secondForm = "50% 50% 50% 50% / 35% 36% 65% 65% "
/* Project arrays */
let firstColorArray= [ "orange2","cyan","blue-violet","lightblue","coral","lightsalmon","orcevenDivsd","lime","aquamarine","lawngreen","silver", "turquoise","yellowgreen","chartreuse","tomato","white","blue-violet","white","white","white"]

let secondColorArray= ["orange2","yellow","red","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","silver" ,"hotpink","white","white","white","white"]

let colorfulArr = ["orange2","cyan","lightblue","blue-violet","coral","lightsalmon","orcevenDivsd","lime","aquamarine","lawngreen","turquoise","yellowgreen","chartreuse","tomato","white","white","yellow", "silver","red","wevenDivste","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","blue-violet","wevenDivste","hotpink","white","white","white","white"]

/* Initial values */
color1.textContent= "1st color"
color2.textContent= "2nd color"
oddDivs.map(item=>item.setAttribute("id","white"))
evenDivs.map(item=>item.setAttribute("id","blue-violet"))
evenDivs.map(item=> item.classList.add("even-animi"))
tenBtn.style="color:#0079b3"
randomBtn2.classList.add("r-id")
controlsInfos.textContent="3rd mode on"
addControlsInfos.textContent="/ Format1"

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
 
/* Colors buttons functions */
    
inputColorOne.addEventListener("change", function(){
    evenDivs.map(item=>item.removeAttribute("id","blue-violet"))
    randomBtn2.classList.remove("r2-c")
   let  chosenColorOne = inputColorOne.value  + 18
   
        colorOneValue.textContent= chosenColorOne.toUpperCase() 
    if(frame.classList.contains("first-form")){
        evenDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i *2};--c:${chosenColorOne};--form: ${firstForm}`)
         })
    }
    
    if(frame.classList.contains("first-form") && frame.classList.contains("second-move")){
        evenDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i +1};--c:${chosenColorOne};--form:${firstForm} `)
         })
    }
    if(frame.classList.contains("second-form")){
        evenDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i *2};--c:${chosenColorOne};--form:${secondForm}`)
         })
    }
    if(frame.classList.contains("second-form") && frame.classList.contains("second-move")){
        evenDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i +1};--c:${chosenColorOne};--form:${secondForm} `)
         })
    }
   
     if(interval){
     randomBtn2.classList.add("r-id")
     clearInterval(interval)
     }

})


inputColorTwo.addEventListener("change", function(){
    oddDivs.map(item=>item.removeAttribute("id","white"))
    randomBtn2.classList.remove("r2-c")
    let chosenColorTwo = inputColorTwo.value + 18
    colorTwoValue.textContent= chosenColorTwo.toUpperCase()
    if(frame.classList.contains("first-form")){
        oddDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${(i*2)+1};--c:${chosenColorTwo};--form:${firstForm}`)
         })
    }
    if(frame.classList.contains("first-form") && frame.classList.contains("second-move")){
        oddDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i +.5};--c:${chosenColorTwo};--form:${firstForm} `)
         })
    }
    
    if(frame.classList.contains("second-form")){
        oddDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${(i*2)+1};--c:${chosenColorTwo};--form:${secondForm}`)
         })
    }
    if(frame.classList.contains("second-form")&& frame.classList.contains("second-move")){
        oddDivs.map((item,i)=>{
            item.setAttribute("style",` --d:${i +.5};--c:${chosenColorTwo};--form:${secondForm}`)
         })
    }
    
     if(interval){
     randomBtn2.classList.add("r-id")
     clearInterval(interval)
     }

})
/* Reset ( form / move ) function */

function resetAll(){
    evenDivs.map(item=>item.setAttribute("id","blue-violet"))
    oddDivs.map(item=>item.setAttribute("id","white"))
    inputColorOne.value= "#111111"
    inputColorTwo.value="#111111"
    color1.style="color:#eee"
    color2.style="color:#eee"
    color1.textContent= "1st color"
    color2.textContent= "2nd color"
    colorOneValue.textContent=""
    colorTwoValue.textContent=""
}
/* Rose format */
function setFirstForm(){
    secondFormBtn.disabled= false
    resetAll()
    if(frame.classList.contains("frame-center")){
        addControlsInfos.textContent="/ Format1"
    }

madsContainer.classList.toggle("show-mads-container")
frame.classList.remove("second-form")
frame.classList.add("first-form")
firstFormBtn.classList.toggle("form-color")
secondFormBtn.classList.remove("form-color")
divsArray.map((item,i)=>{
    item.setAttribute("style",` --d:${i + 1};--form:${firstForm} `)
})
firstFormBtn.disabled= true
}

function setSecondForm (){
    firstFormBtn.disabled= false
    resetAll()
    if(frame.classList.contains("frame-center")){

        addControlsInfos.textContent="/ Format2"
    }
madsContainer.classList.toggle("show-mads-container")
frame.classList.remove("first-form")
frame.classList.add("second-form")
secondFormBtn.classList.toggle("form-color")
firstFormBtn.classList.remove("form-color")
divsArray.map((item,i)=>{
    item.setAttribute("style",`--d:${i + 1};--form:${secondForm} `)
})
secondFormBtn.disabled= true
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
    resetAll()
    frame.classList.remove("second-move")
    tenBtn.style="color:#0079b3"
    twentyBtn.style="color:#6e6c6c"
    if(frame.classList.contains("first-form")){
        divsArray.map((item,i)=>item.style=`--d:${i};--form: ${firstForm} ` )
       
    }else{
        divsArray.map((item,i)=>item.style=`--d:${i};--form:${secondForm} ` )
    }
    }

function setSecondMove (){
    resetAll()
    frame.classList.add("second-move")
    twentyBtn.style="color:#0079b3"
    tenBtn.style="color:#6e6c6c"
    if(( frame.classList.contains("first-form") )){
        divsArray.map((item,i)=>{
            item.style=`--d:${i / 2};--form:${firstForm}` 
        })
    }
        if(( frame.classList.contains("second-form"))){
            divsArray.map((item,i)=>{    
                item.style=`--d:${i /2};--form:${secondForm}` 
            })
    }

}
/* Random 1 and 2 buttons */

/* Random1 function */

    function randomColorOne (){
        inputContainerOne.classList.remove("input-none")
        inputContainerTwo.classList.remove("input-none")
        inputColorOne.value= "#111111"
        inputColorTwo.value="#111111"
        colorOneValue.textContent=""
        colorTwoValue.textContent=""
        randomBtn2.classList.remove("r2-c")
        color1.style="background-color:black"
        color2.style="background-color:black"
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

    /* Random2 function */

    let interval

    function randomColorTwo (){
        inputContainerOne.classList.toggle("input-none")
        inputContainerTwo.classList.toggle("input-none")
        inputColorOne.value= "#111111"
        inputColorTwo.value="#111111"
        color1.style="color:#eee"
        color2.style="color:#eee"
        color1.textContent= "1st color"
        color2.textContent= "2nd color"
        colorOneValue.textContent=""
        colorTwoValue.textContent=""
        randomBtn2.classList.toggle("r2-c")
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
                return i % 2 === 0? item.setAttribute("id",`${secondColorArray[y]}`): item.setAttribute("id",`${firstColorArray[x]}`)
            })
            
        },5000)
    }else{
        clearInterval(interval)
        randomBtn2.classList.add("r-id")
    }
       
    }

    /* show / hide controls buttons functions */

 function fullScreen(){

    frame.classList.remove("frame-magnifying")
    if(frame.classList.contains("first-form")){
        addControlsInfos.textContent="/ Fromat1"
    }
    if(frame.classList.contains("second-form")){
        addControlsInfos.textContent="/ Fromat2"
    }
    if(addControlsInfosTwo.classList.contains("invert-on")){
        addControlsInfosTwo.textContent="/ Invert on"
    }
   if( color3.classList.contains("color3")&&  !frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent="3rd color mode on"
    controlsInfos.style="color:#00ffe0"
   } if(randomBtn2.classList.contains("r2-c")&&  !frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent="Random2 mode on"
    controlsInfos.style="color:#feaf03"
   }
   if(frame.classList.contains("frame-mad-mode")){
    controlsInfos.textContent="Mad mode on"
    controlsInfos.style="color:#feaf03"
   }
   
   
    frame.classList.add("frame-center")
     controls.classList.add("f-screen")
     magnifyingPlus.classList.remove("f-screen")
     magnifyingMinus.classList.remove("f-screen")
     upArrow.classList.remove("f-screen")
 } 

 /* Show controls function */

 function showControls (){
    if(frame.classList.contains("frame-mad-mode")){
        attention.classList.add("show-attention")
        madSecArrow.classList.add("mads-arrows")
        setTimeout(() => {
            attention.classList.remove("show-attention")
            madSecArrow.classList.remove("mads-arrows")
        }, 3500);
        return
    }
    controlsInfos.textContent=""
    addControlsInfos.textContent=""
    addControlsInfosTwo.textContent=""
    frame.classList.remove("frame-magnifying")
    controls.classList.remove("f-screen")
    upArrow.classList.add("f-screen")
    magnifyingPlus.classList.add("f-screen")
    magnifyingMinus.classList.add("f-screen")
    frame.classList.remove("frame-center")
    if(frame.classList.contains("frame-mad-mode")){
        inputContainerOne.classList.add("input-none")
        inputContainerTwo.classList.add("input-none")
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
    
function madMode1 (){ 
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
        madBtn.disabled = true;
        madBtn2.disabled = true;
        madBtn2.style="color:black";
        endMadBtn.style="z-index:1 ; color:#060bff"
       
}
function madMode2 (){
    
    madMode1()
    madBtn.style="color:black";

    if(frame.classList.contains("frame-center")){
        controlsInfos.textContent= "Mad2 mode on"
        controlsInfos.style="color:#00ffe7"
    }
    madsContainer.classList.remove("show-mads-container")
    endMadBtn.style="z-index:-1 ; color:black"
    endMadBtn2.style="z-index:1 ; color:#060bff"
    secondInterval= setInterval(() => {   
        colorfulRose ()
    }, 1500);
   
    
}
function stopMadMode (){
    resetApp()
}
/* Colorful Rose  */
   
function colorfulRose (){
    
    oddDivs.map((item)=>{
        let x = Math.floor(Math.random()* colorfulArr.length ) 
        item.setAttribute("id",`${colorfulArr[x]}`)
    }).reverse()
    evenDivs.map((item)=>{
        let x = Math.floor(Math.random()* colorfulArr.length ) 
        item.setAttribute("id",`${colorfulArr[x]}`)
    })
}

/* Invert color function */
function invertMode (){

    addControlsInfosTwo.classList.toggle("invert-on")
    if(frame.classList.contains("frame-center")){

        addControlsInfosTwo.textContent="/ Invert on"
    }
    if(! addControlsInfosTwo.classList.contains("invert-on")){

        addControlsInfosTwo.textContent=""
    }

    madsContainer.classList.remove("show-mads-container")
    if( frame.classList.contains("mad-filter")){
        clearInterval(secondInterval)
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


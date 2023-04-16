const divsArray =  Array.from(document.querySelectorAll(".frame > div"))
const oddDivs = Array.from(document.querySelectorAll(".even"))
const frame = document.querySelector(".frame")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const controls = document.querySelector(".controls")
const upArrow = document.querySelector("#up-arrow")
const magnifyingPlus = document.querySelector("#magnifying-plus")
const magnifyingMinus = document.querySelector("#magnifying-minus")
const infosContainer = document.querySelector(".infos-container")
const tenBtn = document.querySelector(".ten")
const twentyBtn = document.querySelector(".twenty")

let firstColorArray= [ "cyan","lightblue","coral","hotpink","lightsalmon","orchid","lime","	aquamarine","lawngreen","turquoise","yellowgreen"]

let secondColorArray= ["yellow","red","blue","darkorange","deepskyblue","gold","chocolate","chartreuse","magenta","violet","white"]
console.log(secondColorArray.length)

oddDivs.map(item=> item.classList.add("even-animi"))
tenBtn.style="color:#0079b3"

function setSecondMove (){
    twentyBtn.style="color:#0079b3"
    tenBtn.style="color:#6e6c6c"
    if((divsArray[0].style="--d:1")){
        let x= 0
        for(i=0;i<divsArray.length;++i){ 
            x+= .5
            divsArray[i].style=`--d:${x}`  
        } 
        return
    } 
}
function setFirstMove (){
    tenBtn.style="color:#0079b3"
    twentyBtn.style="color:#6e6c6c"
        for(i=0;i<=divsArray.length;++i){ 
            console.log(i)
            divsArray[i].style=`--d:${i}`   
        } 
        
    }

function oddColor (color){
   
        divsArray.map((item,i)=>{
            return i % 2 === 0? "":item.setAttribute("id",`${color}`)
        })
  
    color1.textContent=color.toUpperCase()
    color1.style=`background-color:${color}`
}
function evenColor (color){
    
    divsArray.map((item,i)=>{
        return i % 2 === 0? item.setAttribute("id",`${color}`):""
    })

color2.textContent=color.toUpperCase()
color2.style=`background-color:${color}`
}

 function thirdColor(){
     color3.classList.toggle("color3")
    oddDivs.map((item)=>{  
        return item.classList.toggle("even-animi")
    })
    }
    function randomColor (){
        color1.style="background-color:black"
        color2.style="background-color:black"
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
    oddDivs.map((item)=>{  
        return item.classList.remove("even-animi")
    })

        let x = Math.floor(Math.random()* firstColorArray.length ) +1
        console.log(x)
        divsArray.map((item,i)=>{
            return i % 2 === 0? item.setAttribute("id",`${firstColorArray[x -1]}`):""
        })
        let y = Math.floor(Math.random()* secondColorArray.length ) +1
        console.log(y)
        divsArray.map((item,i)=>{
            return i % 2 === 0? "": item.setAttribute("id",`${secondColorArray[y - 1]}`)
        })


    }
    function randomColorTwo (){
        color1.style="background-color:black"
        color2.style="background-color:black"
        color1.textContent="1st color"
        color2.textContent="2nd color"
        color3.classList.remove("color3")
    oddDivs.map((item)=>{  
        return item.classList.remove("even-animi")
    })

        let x = Math.floor(Math.random()* firstColorArray.length ) 
        console.log(x)
        divsArray.map((item,i)=>{
            return i % 2 === 0?"": item.setAttribute("id",`${firstColorArray[x]}`)
        })
        let y = Math.floor(Math.random()* secondColorArray.length ) 
        console.log(y)
        divsArray.map((item,i)=>{
            return i % 2 === 0?  item.setAttribute("id",`${secondColorArray[y]}`):""
        })


    }
    /* function colorReset(){
        divsArray.map((item,i)=>{
            return i % 2 === 0? "":item.setAttribute( "style",`--d:${i+=.5} ;--c:#ffd50014`)
        })
        divsArray.map((item,i)=>{
            return i % 2 === 0? item.setAttribute ("style",`--d:${i+=1} ;--c:#ff080022`):""
        })
  
    } */
 /* function fullScreen(){
    frame.classList.remove("frame-magnifying")
    controls.classList.toggle("f-screen")
    upArrow.classList.toggle("f-screen")
    magnifyingPlus.classList.toggle("f-screen")
    magnifyingMinus.classList.toggle("f-screen")
    frame.classList.toggle("frame-center")
   
 } */
 function fullScreen(){
    
    frame.classList.add("frame-center")
     controls.classList.add("f-screen")
     magnifyingPlus.classList.remove("f-screen")
     magnifyingMinus.classList.remove("f-screen")
     upArrow.classList.remove("f-screen")
 } 
 function showControls (){
    frame.classList.remove("frame-magnifying")
    controls.classList.remove("f-screen")
    upArrow.classList.add("f-screen")
    magnifyingPlus.classList.add("f-screen")
    magnifyingMinus.classList.add("f-screen")
    frame.classList.remove("frame-center")
 }
 function glass(){
    frame.classList.toggle("frame-magnifying")
    magnifyingPlus.classList.toggle("f-screen")
  
 }
 function showInfos (){
    infosContainer.classList.toggle("show-infos")
 }
 
function resetApp(){
    location.reload()
}


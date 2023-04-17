const divsArray =  Array.from(document.querySelectorAll(".frame > .odd ,.even"))
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
const randomBtn = document.querySelector(".r2")

console.log(divsArray)
let firstColorArray= [ "cyan","lightblue","coral","lightsalmon","orchid","lime","aquamarine","lawngreen","turquoise","yellowgreen","chartreuse","white","tomato"]

let secondColorArray= ["yellow","red","blue","darkorange","deepskyblue","gold","chocolate","magenta","violet","white","hotpink"]

oddDivs.map(item=> item.classList.add("even-animi"))
tenBtn.style="color:#0079b3"
randomBtn.classList.add("r-id")



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

 function thirdColor(){
     color3.classList.toggle("color3")
    oddDivs.map((item)=>{  
        return item.classList.toggle("even-animi")
    })
    }

    function randomColorOne (){
       
        color1.style="background-color:black"
        color2.style="background-color:black"
        randomBtn.classList.remove("r2-c")
        color1.textContent="1st color"
        color2.textContent="2nd color"
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


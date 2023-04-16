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



oddDivs.map(item=> item.classList.add("even-animi"))


function setSecondMove (){
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
        for(i=0;i<=divsArray.length;++i){ 
            console.log(i)
            divsArray[i].style=`--d:${i}`   
        } 
    }

function evenColor (color){
   
        divsArray.map((item,i)=>{
            return i % 2 === 0? "":item.setAttribute("id",`${color}`)
        })
  
    color1.textContent=color.toUpperCase()
    color1.style=`color:${color}`
}
function oddColor (color){
    
    divsArray.map((item,i)=>{
        return i % 2 === 0? item.setAttribute("id",`${color}`):""
    })

color2.textContent=color.toUpperCase()
color2.style=`color:${color}`
}

 function thirdColor(){
     color3.textContent === "3rd color off"? color3.textContent = "3rd color on":color3.textContent = "3rd color off"
    oddDivs.map((item)=>{
        
        return item.classList.toggle("even-animi")
    })
    }
 /* function fullScreen(){
    frame.classList.remove("frame-magnifying")
    controls.classList.toggle("f-screen")
    upArrow.classList.toggle("f-screen")
    magnifyingPlus.classList.toggle("f-screen")
    magnifyingMinus.classList.toggle("f-screen")
    frame.classList.toggle("frame-center")
   
 } */
 function fullScreen(){
    
    frame.classList.toggle("frame-center")
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


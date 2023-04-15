const divsArray =  Array.from(document.getElementsByTagName("div"))
const oddDivs = Array.from(document.querySelectorAll(".even"))
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const controls = document.querySelector(".controls")
const upArrow = document.querySelector("#up-arrow")



oddDivs.map(item=> item.classList.add("even-animi"))


function evenColor (color){
   
        divsArray.map((item,i)=>{
            return i % 2 === 0? item.setAttribute("id",`${color}`):""
        })
  
    color1.textContent=color.toUpperCase()
    color1.style=`color:${color}`
}
function oddColor (color){
    
    divsArray.map((item,i)=>{
        return i % 2 === 0? "":item.setAttribute("id",`${color}`)
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
 function fullScreen(){
    controls.classList.toggle("f-screen")
    upArrow.classList.toggle("f-screen")
 }
function resetApp(){
    location.reload()
}


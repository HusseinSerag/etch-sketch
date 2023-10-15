 const slider = document.getElementById("myRange")
 const output = document.getElementById("demo")
const grid = document.getElementById('grid')
const restartBtn = document.getElementById('restart')
let divs  = document.querySelectorAll(".grid div")
const colorPicker = document.getElementById('colorpicker')
const randomBtn = document.getElementById('random')
let choice 
for(let i = 0 ; i < slider.value ; i++){
    for(let j = 0  ; j < slider.value ; j++){
        const div = document.createElement('div')
        let lenWidthHeight = 256 / slider.value
        div.style.cssText = `width:${lenWidthHeight}px; height:${lenWidthHeight}px ;background-color: #FAF9F6;`
        div.addEventListener('mouseenter', (e)=>{
            let lenWidthHeight = 256 / slider.value
            let color
            if(choice == 0)
            {
                color = colorPicker.value
            }
            else if(choice == 1){
                color = `rgba(${Math.floor(Math.random()*256)} ,${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} `
            }
            
        
        div.style.width = `${lenWidthHeight}px`
        div.style.height = `${lenWidthHeight}px`
        div.style.background=color
    })
        grid.appendChild(div)
        

    }
}
function sliderValue(){
{   
        
        divs.forEach(div =>{
          grid.removeChild(div)
      })
      
      
      
      
      for(let i = 0 ; i < slider.value ; i++){
          for(let j = 0 ; j < slider.value ; j++ )
          {
              const div = document.createElement('div')
              let width = 256/slider.value
              div.style.width = `${width}px`
              div.style.height = `${width}px`
              
              grid.appendChild(div)
          }
          
      }
      divs  = document.querySelectorAll(".grid div");
      divs.forEach(div =>{
          div.addEventListener('mouseenter' , ()=>{
              
             
              let color
                  if(choice == 0)
                  {
                      color = colorPicker.value
                  }
                  else if(choice == 1){
                      color = `rgba(${Math.floor(Math.random()*256)} ,${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)} `
                  }
                  
              let width = 256/slider.value
              div.style.width = `${width}px`
              div.style.height = `${width}px`
              div.style.background = color
          })
      })
       
    }
}
slider.addEventListener('input' , function(){
    output.textContent = slider.value + "x" + slider.value
    
    
})
slider.addEventListener('click' , ()=>{
    sliderValue()
} )



colorPicker.addEventListener('input',()=>{
    choice = 0
})


randomBtn.addEventListener('click' , ()=>{
    choice =  1
})


restartBtn.addEventListener('click',()=>{
    divs  = document.querySelectorAll(".grid div");
    divs.forEach(div =>{
        
            
            let width = 256/slider.value
            div.style.width = `${width}px`
            div.style.height = `${width}px`
            div.style.background='#ffffff';
        
    })
})
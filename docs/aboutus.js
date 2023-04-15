function toggleaboutus(){
  let text = document.querySelector("#texthere")
     if(text.style.display === 'block')
    text.style.display = 'none'
  else
    text.style.display = 'block'
}

function togglecontacts(){
  let text = document.querySelector("#contactuss")
   if(text.style.display === 'grid')
    text.style.display = 'none'
  else
    text.style.display = 'grid'
  }

function gotosocialmedia(url){
  window.location.href = url;
}

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


function generator(){
  pass1.textContent = password()
  pass2.textContent = password()
}

function password(){
  let data = ""
  let random = 0

  for(let i = 0; i < 15; i++){
    random = Math.floor(Math.random()*90+1)
    data += characters[random]
  }
  return data
}

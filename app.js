var userName = prompt('enter  your name?')

alert('Hello coffe lover')

 var userFavDrink = prompt(' favourite drink?')
  alert('coffe? ')
  alert('latte?')
  alert('macchiato')

var userFavDrink = prompt('Whats your favourite drink?')



var coffeFreak = prompt('How many pics do you wanna see ')


var image = ''
for(var x = 0; x < coffeCupsCounter ;x++){
  if(userFavDrink ==='coffe?'){
    image = image + '<img src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg">'
  }else if( userFavDrink ==='latte?'){
    image = image + '<img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGF0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80">'
  }
}
  document.write(image)
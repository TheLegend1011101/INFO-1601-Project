let categories = [];
let data = [];
let ingredients = [];
let screenwidth = window.screen.width;
let categoriesdisplay = '';
if(screenwidth <= 600)
   categoriesdisplay = 'block';
else 
  categoriesdisplay = 'grid'
async function getCatsandMeals(){   
 await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(res => res.json())
  .then(async cat => {
      //console.log(cat)
    
      for(let cats of cat.meals){
    
      //  console.log(categorylength)
        categories.push(cats.strCategory)
      await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cats.strCategory}`)
     .then(result => result.json())
     .then(detail => {
        data.push(detail)
     })
      }

  
  })
  .then(() => renderCategories())
                                }

  getCatsandMeals();
  

  async function getIngredients(){
   await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  .then(res => res.json())
  .then(ingre =>{
    for(let ingres of ingre.meals){
      ingredients.push(ingres);
    }
  })
  }

getIngredients()


  function renderCategories(){
    let html = '';
    let result = document.getElementById("renderstuff")
    result.style.display = categoriesdisplay;
    let ingredientsearch = document.getElementById("searchingredients")
    ingredientsearch.style.display = 'none'
    for(let cats of categories){
      html +=  `<div style="border: solid 1px" id="${cats}Toggle" class="toggler" title="Click to close this category" onclick="togglecards('${cats}')">${cats}</div>
      <div id="${cats}" class="category">
      </div>`
    }
    result.innerHTML = html;
    renderCards();
  }

  function renderCards(){
    for(let i = 0; i < data.length; i++){
      let result = document.querySelector(`#${categories[i]}`);
      let htmlcards='';
      for(let j = 0; j < data[i].meals.length; j++){
        htmlcards += `<div class = 'cardi' onclick="itemInfoWindow('${data[i].meals[j].idMeal}')"><img src="${data[i].meals[j].strMealThumb}" height="50"/><div><h5>${data[i].meals[j].strMeal}</h5></div></div>`
        
      }
      result.innerHTML = htmlcards;
    }
  }


function filterByCategory(){
  let filtered = [];
  let filter = document.querySelector("#filterkey").value
  console.log(categoriesdisplay)
  //console.log(filter)
  //console.log(data)
  //console.log(categories)
  for(let cats of categories){
    //console.log(categories[i])
    let result1 = document.querySelector(`#${cats}Toggle`)
    let result2 = document.querySelector(`#${cats}`)
    console.log(cats)
      if(cats !== filter){
        result1.style.display = 'none'
        result2.style.display = 'none'
      }
    else{
      result1.style.display = 'block'
      result2.style.display = categoriesdisplay;
    }
  }
/*  if(filtered.length === 0)
    alert(`There are no meals for this category
Here is a list of the available categories:
    Beef
    Seafood
    Breakfast
    Chicken 
    Desert
    Goat
    Lamb
    Miscellaneous
    Pasta
    Pork
    Side
    Starter
    Vegan
    Vegetarian
    `)*/
  
}
//console.log(categories)

async function searchByIngredient(){
  let regcat = document.querySelector("#renderstuff")
  regcat.style.display = 'none'
  let ingredient = document.querySelector("#ingredientkey").value;
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  .then(res => res.json())
  .then(meals => {
    console.log(meals)
    let html = '';
    let result = document.querySelector("#searchingredients");
    result.style.display = categoriesdisplay
    for(let meal of meals.meals){
      html += `<div class = 'cardi' onclick="itemInfoWindow('${meal.idMeal}')"><img src="${meal.strMealThumb}" height="50"/><div><h5>${meal.strMeal}</h5></div></div>`
    }
    result.innerHTML = html;
  })
  
}


// Create a list of words to use for autocomplete
const wordList = categories

// Get the input field and create a dropdown menu
const inputField = document.getElementById('filterkey');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
inputField.parentNode.appendChild(dropdownMenu);

// Attach an event listener to the input field
inputField.addEventListener('input', function() {
  // Get the current value of the input field
  const inputValue = inputField.value.toLowerCase();

  // Filter the word list based on the current value of the input field
  const filteredWords = wordList.filter(word => word.toLowerCase().startsWith(inputValue));

  // Clear the dropdown menu and display the filtered words
  dropdownMenu.innerHTML = '';
  filteredWords.forEach(word => {
    const dropdownItem = document.createElement('div');
    dropdownItem.classList.add('dropdown-item');
    dropdownItem.innerText = word;
    dropdownMenu.appendChild(dropdownItem);

    // Attach event listener to dropdown items
    dropdownItem.addEventListener('click', function() {
      // Update input field with selected word
      inputField.value = word;
      dropdownMenu.innerHTML = '';
    });
  });

  // Show or hide the dropdown menu based on whether there are any matching words
  if (filteredWords.length > 0) {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

// Hide the dropdown menu when the user clicks outside of it
document.addEventListener('click', function(event) {
  if (!dropdownMenu.contains(event.target)) {
    dropdownMenu.innerHTML = '';
  }
});

/*let myButton = document.getElementById("aboutus");
myButton.addEventListener("click", function() {
  window.location.href="iteminfo.html";
});*/



function itemInfoWindow(id) {
  localStorage.setItem('id', id)
  window.location.href = `iteminfo.html` }


function aboutusWindow(){
  window.location.href = "aboutus.html"
}
function togglecards(category) {
			let cards = document.querySelector(`#${category}`);
  
			if (cards.style.display === categoriesdisplay) {
				cards.style.display = "none";
			} else {
				cards.style.display = categoriesdisplay;
				
			}
		}
	
const searchParams = new URLSearchParams();



















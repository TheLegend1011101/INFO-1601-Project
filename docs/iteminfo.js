let idmeal = localStorage.getItem('id')

let mealInfo = [];


window.addEventListener('load', () => {

    /*// Via Query parameters - GET
     const params = (new URL(document.location)).searchParams;
     idmeal = params.get('idmeal');*/
  getMealInfo()
  
})



async function getMealInfo(){
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
  .then(res => res.json())
  .then(info => {
    mealInfo = info;
  })
  .then(() => loadMeal())
}
/*let i = 0
while(i < 1){
  loadMeal()
}*/
function loadMeal(){
  let result = document.querySelector('#rendermeal');
  let html = `<div id="Name">${mealInfo.meals[0].strMeal}</div><div class="filler">
  <div id="ingredients"><h1>Ingredients <br></h1></div>
  <div id="text">Instructions: <br>
  ${mealInfo.meals[0].strInstructions}</div>
  <img id="mealimage" src="${mealInfo.meals[0].strMealThumb}"/></div>`
  result.innerHTML = html;
  loadIngredients();
}


function loadIngredients(){
  let ingredients = [];
  let measurement = [];
  let i = 0;
  let html = '<h1>Ingredients <br></h1>';
  let result = document.querySelector("#ingredients")
  if(mealInfo.meals[0].strIngredient1 !== null && mealInfo.meals[0].strIngredient1 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient1)
    measurement.push(mealInfo.meals[0].strMeasure1)
    i++;
  }
  if(mealInfo.meals[0].strIngredient2 !== null  && mealInfo.meals[0].strIngredient2 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient2)
    measurement.push(mealInfo.meals[0].strMeasure2)
    i++
  }
  if(mealInfo.meals[0].strIngredient3 !== null  && mealInfo.meals[0].strIngredient3 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient3)
    measurement.push(mealInfo.meals[0].strMeasure3)
    i++
  }
  if(mealInfo.meals[0].strIngredient4 !== null  && mealInfo.meals[0].strIngredient4 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient4)
    measurement.push(mealInfo.meals[0].strMeasure4)
    i++
  }
  if(mealInfo.meals[0].strIngredient5 !== null  && mealInfo.meals[0].strIngredient5 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient5)
    measurement.push(mealInfo.meals[0].strMeasure5)
    i++
  }
  if(mealInfo.meals[0].strIngredient6 !== null  && mealInfo.meals[0].strIngredient6 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient6)
    measurement.push(mealInfo.meals[0].strMeasure6)
    i++
  }
  if(mealInfo.meals[0].strIngredient7 !== null  && mealInfo.meals[0].strIngredient7 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient7)
    measurement.push(mealInfo.meals[0].strMeasure7)
    i++
  }
  if(mealInfo.meals[0].strIngredient8 !== null  && mealInfo.meals[0].strIngredient8 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient8)
    measurement.push(mealInfo.meals[0].strMeasure8)
    i++
  }
  if(mealInfo.meals[0].strIngredient9 !== null  && mealInfo.meals[0].strIngredient9 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient9)
    measurement.push(mealInfo.meals[0].strMeasure9)
    i++
  }
  if(mealInfo.meals[0].strIngredient10 !== null  && mealInfo.meals[0].strIngredient10 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient10)
    measurement.push(mealInfo.meals[0].strMeasure10)
    i++
  }
  if(mealInfo.meals[0].strIngredient11 !== null  && mealInfo.meals[0].strIngredient11 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient11)
    measurement.push(mealInfo.meals[0].strMeasure11)
    i++
  }
  if(mealInfo.meals[0].strIngredient12 !== null  && mealInfo.meals[0].strIngredient12 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient12)
    measurement.push(mealInfo.meals[0].strMeasure12)
    i++
  }
  if(mealInfo.meals[0].strIngredient13 !== null  && mealInfo.meals[0].strIngredient13 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient13)
    measurement.push(mealInfo.meals[0].strMeasure13)
    i++
  }
  if(mealInfo.meals[0].strIngredient14 !== null  && mealInfo.meals[0].strIngredient14 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient14)
    measurement.push(mealInfo.meals[0].strMeasure14)
    i++
  }
  if(mealInfo.meals[0].strIngredient15 !== null  && mealInfo.meals[0].strIngredient15 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient15)
    measurement.push(mealInfo.meals[0].strMeasure15)
    i++
  }
  if(mealInfo.meals[0].strIngredient16 !== null  && mealInfo.meals[0].strIngredient16 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient16)
    measurement.push(mealInfo.meals[0].strMeasure16)
    i++
  }
  if(mealInfo.meals[0].strIngredient17 !== null  && mealInfo.meals[0].strIngredient17 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient17)
    measurement.push(mealInfo.meals[0].strMeasure17)
    i++
  }
  if(mealInfo.meals[0].strIngredient18 !== null  && mealInfo.meals[0].strIngredient18 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient18)
    measurement.push(mealInfo.meals[0].strMeasure18)
    i++
  }
  if(mealInfo.meals[0].strIngredient19 !== null  && mealInfo.meals[0].strIngredient19 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient19)
    measurement.push(mealInfo.meals[0].strMeasure19)
    i++
  }
  if(mealInfo.meals[0].strIngredient20 !== null  && mealInfo.meals[0].strIngredient20 !== ''){
    ingredients.push(mealInfo.meals[0].strIngredient20)
    measurement.push(mealInfo.meals[0].strMeasure20)
    i++
  }
  for(let j = 0; j < i; j++){
    html += `${measurement[j]} ${ingredients[j]}<br>`
  }
      result.innerHTML = html;
}



function gotohome(){
  window.location.href = 'index.html'
}
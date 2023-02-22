import './App.css';
import {useEffect, useState} from "react";
import MyRecipesComponent from './MyRecipesComponent';


function App () {

  const MY_ID = "4ccd80b4";
  const MY_KEY = "637e179d9d4d15c416b973b6f4ce5999";

  const [mySearch, setMySearch] = useState('');
  const [myRecipesDisplayed, setMyRecipesDisplayed] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipesDisplayed(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return(
      <div className="App">
        <div className="container">
            <h1>Find a Recipe</h1>
        </div>

        <div className='container'>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
            </input>
          </form>
        </div>

        <div className='container'>
          <button>
            Search
          </button>
        </div>

        {myRecipesDisplayed.map (element =>(
            <MyRecipesComponent label = {element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
        ))}

  </div>

  );
}

export default App;
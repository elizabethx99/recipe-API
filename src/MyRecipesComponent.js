function MyRecipesComponent ({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container image">
                <img src={image} alt="images" className="imageResult" />
            </div>
            <div className="container">
                <ul>
                    {ingredients.map(ingredient =>(
                        <li> <img src="https://img.icons8.com/office/256/checkmark.png" className="icon" alt="check"/>
                        {ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="container">
                <p >{calories.toFixed()} Calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponent;
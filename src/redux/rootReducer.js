import createRecipeReducer from './features/createRecipe.feature';
import recipesReducer from './features/recipes.feature';
const rootReducer = {
     createrecipe: createRecipeReducer,
     recipes:recipesReducer
}
export default rootReducer;

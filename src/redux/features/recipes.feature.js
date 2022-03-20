import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: []
}
const recipesSlice = createSlice({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        saveRecipe: function (state, action) {
            state.recipes.push(action.payload.recipe)
        },
        deleteRecipe:function(state,action){
            return {
                recipes: state.recipes.filter((val) => val.id !== action.payload.id),
                
            }
        }
    },
});
export const { saveRecipe,deleteRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';
const initialState = {
    recipeitems: [],
    recipesteps: [],
    title: '',
    loading:false,
    id:''
}
const createrecipeSlice = createSlice({
    name: 'createrecipe',
    initialState: initialState,
    reducers: {
        addTitle: function (state, action) {
            state.title = action.payload.title;
        },
        addItem: function (state, action) {
            const newItem = {
                id: uuid(),
                item: action.payload.itemname,
                category: 'item',
                qt: action.payload.qt,
                type: action.payload.type,
                title: action.payload.title
            }
            state.recipeitems = [...state.recipeitems, newItem];
        },
        deleteItem: (state, action) => {
            return {
                recipesteps: state.recipesteps,
                recipeitems: state.recipeitems.filter((val) => val.id !== action.payload.id),
                title:state.title
            }
        },
        addStep: (state, action) => {
            const MaxOrder = state.recipesteps ? state.recipesteps.length : ""
            // .reduce((acc, shot) => acc = acc > shot.order ? acc : shot.order, 0) :"";

            const newStep = {
                id: uuid(),
                description: action.payload.description,
                category: 'step',
                order: MaxOrder + 1
            }

            state.recipesteps = [...state.recipesteps, newStep];
        },
        deleteStep: (state, action) => {
            state.recipesteps = state.recipesteps.filter((val) => val.id !== action.payload.id);
            state.recipesteps = state.recipesteps.sort((a, b) => (a.order > b.order) ? 1 : -1);
            state.recipesteps.map((vals, index) => {
                vals.order = index + 1
            });

        },
        resetRecipe: (state, action) => {
            state.recipeitems = [];
            state.recipesteps = [];
            state.title = ''
            state.id = ''
        }
    }
});
export const { addItem, deleteItem, addStep, deleteStep, resetRecipe, addTitle } = createrecipeSlice.actions;
export default createrecipeSlice.reducer;
